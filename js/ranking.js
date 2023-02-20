import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
      

const firebaseConfig = {
  apiKey: "AIzaSyDJVSI2k2wWdvIh0Lrk1X9JhBjZtqGadaA",
  authDomain: "result-9aa90.firebaseapp.com",
  projectId: "result-9aa90",
  storageBucket: "result-9aa90.appspot.com",
  messagingSenderId: "298390810001",
  appId: "1:298390810001:web:f88a8f1e9771800c227e30",
  measurementId: "G-8PPK5GM3EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const db = getDatabase();