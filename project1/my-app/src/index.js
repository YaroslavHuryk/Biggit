import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
  { id: 1, name: "Sasha" },
  { id: 2, name: "Tom" },
  { id: 3, name: "Oleg" },
  { id: 4, name: "Petro" },
  { id: 5, name: "Ivan" },
  { id: 6, name: "Mykola" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "How is your it-kumasutra?" },
  { id: 5, message: "Yes or no?" },
  { id: 6, message: "Yes" },
];

let posts = [
  { id: 1, likeCounts: 20, message: "Hi , how are you" },
  { id: 2, likeCounts: 15, message: "Hi , how is he" },
  { id: 2, likeCounts: 15, message: "kwfa;lk" },
  { id: 2, likeCounts: 15, message: " efnk" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
