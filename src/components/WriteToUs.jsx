import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { Toast } from 'flowbite-react';

const firebaseConfig = {
  apiKey: "AIzaSyBo1-eI6SC4OTaSX_FwBy4g624P_itr8EA",
  authDomain: "priyanshu-portfolio-412614.firebaseapp.com",
  projectId: "priyanshu-portfolio-412614",
  databaseURL: "https://priyanshu-portfolio-412614-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "priyanshu-portfolio-412614.appspot.com",
  messagingSenderId: "227605759311",
  appId: "1:227605759311:web:6a33b80670f25f95f9313a",
  measurementId: "G-T5NW0JBYPM"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export default function WriteToUs() {
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const writeToDatabase = () => {
    set(ref(db, 'users/' + name), {
      username: name
    }).then(() => {
      console.log("Data successfully written to the database");
      setSuccessMessage("Your name has been submitted successfully!");
      setName(""); // Clear the input field
      setShowToast(true); // Show toast on successful submission
    }).catch((error) => {
      console.error("Error writing data to the database: ", error);
    });
  };

  const handleButtonClick = () => {
    if (name.trim() !== "") {
      writeToDatabase();
    }
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      {/* Toast */}
      {showToast && (
        <Toast
          duration={3000} // Set the duration of the toast
          onDismiss={() => setShowToast(false)} // Dismiss the toast when clicked
          className="bg-green-500 text-white fixed top-0 left-0 right-0 z-50" // Customize toast style
        >
          {successMessage}
        </Toast>
      )}

      <div className="flex flex-col w-screen justify-start p-4 items-center space-y-4">
        <h1 className="text-gray-800 text-xl">Say us your name</h1>
        <div className="flex justify-center items-center w-screen">
          <input
            type="text"
            className="p-2 w-7/12 outline-none"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
          />
          <button className="bg-black p-2" onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 -960 960 960" width="24">
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
            </svg>
          </button>
        </div>
        {/* Success message will be displayed in the toast */}
      </div>
    </>
  );
}

