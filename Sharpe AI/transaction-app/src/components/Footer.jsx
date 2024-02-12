import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Our Partners</h5>
            <ul className="list-unstyled">
              <li>Partner 1</li>
              <li>Partner 2</li>
              <li>Partner 3</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Country Information</h5>
            <p>Address: 123 Street, City, Country</p>
            <p>Phone: +123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-md-4">
            <h5>Advertisements</h5>
            <p>Advertise with us!</p>
            <p>Contact: ads@example.com</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
