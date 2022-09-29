import { Button, Checkbox, Form, Input, Modal } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginPage/Login-Page";
import Navbar from "./components/Navbar/navbar";
import Signup from "./components/Sign-up";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
