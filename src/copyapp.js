import { Button, Checkbox, Form, Input, Modal } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";

const App = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setpassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialState, SetinitialState] = useState([]);

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

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  // const clicked = (e) => {
  //   console.log("Submit clicked");
  // };
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
            onClick={showModal}
            htmlType="submit"

            // style={{ backgroundColor: "blue" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
