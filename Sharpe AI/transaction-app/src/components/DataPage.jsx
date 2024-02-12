import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { FaWallet, FaMoneyBillAlt } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';

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

function DataPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'transactions'));
        const transactionsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTransactions(transactionsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [db]);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Transaction Data</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <>
              {transactions.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Wallet Address</th>
                        <th>Amount</th>
                        <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map(transaction => (
                        <tr key={transaction.id}>
                          <td>{transaction.walletAddress}</td>
                          <td>{transaction.amount}</td>
                          <td>{new Date(transaction.timestamp).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center">No transactions found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataPage;
