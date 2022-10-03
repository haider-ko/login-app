import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import NavbarHome from "./navbar";

function Directory() {
  const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setEmployees(users));
  // }, []);

  return (
    <>
      <NavbarHome name="Komail" employees={employees} />
      <Outlet />
    </>
  );
}

export default Directory;
