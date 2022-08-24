import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB30Rpu_cUZB5Y6iwmxluY2Miyu8gUWz5I",
  authDomain: "funky-code.firebaseapp.com",
  databaseURL: "https://funky-code-default-rtdb.firebaseio.com",
  projectId: "funky-code",
  storageBucket: "funky-code.appspot.com",
  messagingSenderId: "20921171810",
  appId: "1:20921171810:web:ce3f2db38408023a2d763b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
