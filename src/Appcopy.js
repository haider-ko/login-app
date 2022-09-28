import { Button, Checkbox, Form, Input, Modal } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";

var users;
const Appscopy = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loginemail, setloginEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setpassword] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialState, SetinitialState] = useState([]);

  var userData;
  const signup = () => {
    userData = JSON.parse(localStorage.getItem("userData")) || [];

    userData.push({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });

    users = [];
    users.push(userData);

    localStorage.setItem("userData", JSON.stringify(userData));
    // console.log(userData[1].password) test create new branch;
  };

  // const showModal = () => {
  //   if (!(firstname && lastname && city && password && email) == "") {
  //     setIsModalOpen(true);
  //     SetinitialState([firstname, lastname, email, city, password]);
  //   }
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const clicked = (e) => {
  //   console.log("Submit clicked");
  // };

  const signin = () => {
    console.log("come");
    const allUsersData = JSON.parse(localStorage.getItem("userData")) || [];
    // var users = [];
    // console.log(localStorage.getItem("userlogin"));

    // users.push({
    //   loginemail: loginemail,
    //   loginpassword: loginpassword,
    // });

    const filterUser = allUsersData.filter((x) => x.email === loginemail);
    console.log(filterUser);
    // when email is found
    if (filterUser.length) {
      if (filterUser[0].password === loginpassword) {
        window.alert("Login success");
      } else {
        window.alert("Login failed. Wrong password");
      }
    } else {
      // when email is not found
      window.alert("no user found");
      console.log("login failed");
    }

    // if (
    //   userlogin.some((userlogin) => userlogin.email === users[0].loginemail) &&
    //   userlogin.some(
    //     (userlogin) => userlogin.password === users[0].loginpassword
    //   )
    // ) {
    //   console.log("User Exist , Welcome ");
    // } else {
    //   console.log("User Does not exist, Please make an account");
    // }

    // if (
    //   userlogin.some(
    //     (userlogin) => userlogin.password === users[0].loginpassword
    //   )
    // ) {
    //   console.log("password matched");
    // } else {
    //   alert("password not found.");
    // }

    // if (users[0].loginpassword === checkpassword) {
    //   console.log("Email matched");
    // } else {
    //   console.log("email not matched");
    // }
  };

  return (
    <>
      <Form
        style={{ margin: 10 }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          validateStatus="Danger"
          value={firstname}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          value={lastname}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
              type: email,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your city!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={signup}

            // style={{ backgroundColor: "blue" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          value={loginemail}
          onChange={(e) => {
            setloginEmail(e.target.value);
          }}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          value={loginpassword}
          onChange={(e) => {
            setloginpassword(e.target.value);
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={signin}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Appscopy;
