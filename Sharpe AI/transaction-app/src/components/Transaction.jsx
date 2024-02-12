import React, { useState } from 'react';
import { FaWallet, FaMoneyBillAlt } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz_DLnLVmyknJ-65Ie9cmv9Z8Qrka4Fbo",
  authDomain: "sharpeai-11669.firebaseapp.com",
  databaseURL: "https://sharpeai-11669-default-rtdb.firebaseio.com",
  projectId: "sharpeai-11669",
  storageBucket: "sharpeai-11669.appspot.com",
  messagingSenderId: "4441650620",
  appId: "1:4441650620:web:f562cb21d9534b07d0a7b9",
  measurementId: "G-2K51TMC4ZH"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

function Transaction() {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedAddress = walletAddress.trim();

    if (!trimmedAddress) {
      setError('Please enter a valid wallet address.');
      return;
    }
    // Amount validation
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 0 || amountNum > 10000) {
      setError('Please enter a valid amount between 0 and 10,000.');
      return;
    }

    try {
      // Save data to Firestore
      await addDoc(collection(db, 'transactions'), {
        walletAddress: trimmedAddress,
        amount: amountNum,
        timestamp: new Date()
      });

      // Reset form fields and error message
      setWalletAddress('');
      setAmount('');
      setError('');

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Transaction data saved successfully.'
      });
      // Log success message
      console.log('Transaction data saved successfully.');
    } catch (err) {
      console.error('Error saving transaction data:', err);
      setError('An error occurred while saving the transaction data.');
    }
  };

  return (
    <div className="container-fluid" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card p-4" style={{ width: '80%', maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h2 className="text-center text-dark mb-4">Transaction Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 flex items-center">
            <FaWallet className="text-xl mr-2" />
            <label htmlFor="walletAddress" className="form-label text-dark">Wallet Address:</label>
            <input
              type="text"
              id="walletAddress"
              className="form-control"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 flex items-center">
            <FaMoneyBillAlt className="text-xl mr-2" />
            <label htmlFor="amount" className="form-label text-dark">Amount:</label>
            <input
              type="number"
              id="amount"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Transaction;
