import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import Help from "../assets/Help.svg";
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessageRef = push(ref(db, 'messages'));
    set(newMessageRef, formData)
      .then(() => {
        console.log("Message submitted successfully:", formData);
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
        setShowToast(true); // Show toast on successful submission
      })
      .catch((error) => {
        console.error("Error submitting message:", error);
      });
  };

  return (
    <>
     {showToast && (
        <Toast
          duration={3000} // Set the duration of the toast
          onDismiss={() => setShowToast(false)} // Dismiss the toast when clicked
          className="bg-green-500 text-white" // Customize toast style
        >
          Message submitted successfully!
        </Toast>
      )}
    <section className="min-h-screen flex flex-col lg:flex lg:flex-row justify-center items-center bg-gray-100">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md lg:max-w-none lg:flex-grow">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want any technical help?<br/> Want to send feedback about us? Give us suggestions.</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 lg:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="johndoe@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              className="outline-none block p-4 lg:p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
              id="message"
              rows="6"
              className="block p-4 lg:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a comment..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-4 lg:py-3 px-6 lg:px-5 
           rounded-lg text-black bg-blue-300
           dark:bg-blue-500"
          >
            Send message
          </button>
        </form>
      </div>
      <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
        <img src={Help} alt="Help" className="max-w-sm w-full h-auto lg:max-w-lg lg:w-auto" />
      </div>
     
    </section>
    </>
  );
};

export default ContactPage;
