// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg_mOb92Ad9mUFcSSs7_0Qn7dMwq0msx8",
  authDomain: "a7-d9048.firebaseapp.com",
  projectId: "a7-d9048",
  storageBucket: "a7-d9048.appspot.com",
  messagingSenderId: "364919846264",
  appId: "1:364919846264:web:198a4110d29759bb2c848d",
  measurementId: "G-FKQP1XJMJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);