import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HooksApp } from "./HooksApp";
import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> 
    <MainApp />
  </BrowserRouter>
);
