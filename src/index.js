import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
);






  // The below code was refactored after routes were added.
// import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <BrowserRouter >
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );


// const router = createBrowserRouter(routes)


// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./components/App";

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );