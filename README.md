# Transaction App

This is a simple transaction management application built with React.js and Firebase. It allows users to submit transactions by entering wallet addresses and amounts, which are then stored in a Firebase Firestore database.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/transaction-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd transaction-app
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Create a Firebase project and obtain your Firebase configuration object.

5. Replace the placeholder Firebase configuration object in `src/components/Transaction.jsx` and `src/components/DataPage.jsx` with your own Firebase configuration.

6. Run the application:

   ```bash
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

Once the application is running, you can access the transaction page by clicking on the "Transactions" link in the navigation bar. Enter the wallet address and amount for the transaction, then click the "Submit" button to save the transaction data. The data will be stored in the Firebase Firestore database.

You can also access the data page to view the stored transactions.

## Challenges Faced

During the development of this application, I faced a few challenges:

1. **Firebase Integration**: Integrating Firebase with React and setting up Firestore for data storage required understanding the Firebase documentation and configuring the Firebase SDK correctly.

   *Solution*: I carefully followed the Firebase documentation and tutorials to set up Firebase in the React application. I also referred to community resources and forums for troubleshooting specific issues.

2. **Styling and Layout**: Achieving the desired styling and layout for the application components, especially ensuring responsiveness across different screen sizes, posed some challenges.

   *Solution*: I utilized Bootstrap for layout and styling to streamline the development process and ensure responsiveness. Additionally, I used inline CSS for specific styling requirements and adjusted the layout based on Bootstrap's grid system.

3. **Error Handling**: Implementing error handling for form validation and database operations required careful consideration to provide informative feedback to users.

   *Solution*: I implemented error handling mechanisms using state variables and conditional rendering to display error messages to users. Additionally, I used try-catch blocks for handling errors in asynchronous operations, such as database interactions.

## Standout Features

- **User-Friendly Interface**: The application provides a simple and intuitive interface for managing transactions, making it easy for users to submit and view transaction data.
- **Real-Time Data Updates**: The use of Firebase Firestore enables real-time synchronization of data, allowing users to see updates instantly without needing to refresh the page.
- **Responsive Design**: The application is designed to be responsive and accessible across various devices and screen sizes, ensuring a seamless user experience.
- **Secure Data Storage**: Firebase Firestore provides a secure and scalable database solution, ensuring that transaction data is stored safely and can be accessed securely.

Overall, the Transaction App stands out for its simplicity, reliability, and ease of use, offering a robust solution for managing transactions in a secure and efficient manner.
