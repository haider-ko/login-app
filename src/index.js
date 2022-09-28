import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";
import Signup from "./components/Sign-up";

import Homepage from "./components/HomePage/Layout";
import LoginForm from "./components/LoginPage/Login-Page";
import { Layout } from "antd";
import Navbar from "./components/Navbar/navbar";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
