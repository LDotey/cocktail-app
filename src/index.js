import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'


// ReactDOM.render(
//   <BrowserRouter >
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
);



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