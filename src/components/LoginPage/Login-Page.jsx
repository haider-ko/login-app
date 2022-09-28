import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Card, List } from "antd";
import React from "react";
import { Col, Row } from "antd";
import "../LoginPage/Login.css";
import { useState } from "react";
import { Space, message } from "antd";
const { Title } = Typography;

const LoginForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loginemail, setloginEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setpassword] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialState, SetinitialState] = useState([]);

  const signinfunction = () => {
    console.log("come");
    const allUsersData = JSON.parse(localStorage.getItem("userData")) || [];

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
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Row
        justify="center"
        align="center"
        gutter={24}
        padding="200px"
        className="body"
        style={{
          backgroundColor: "#41463D",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Col span={15} style={{ backgroundColor: "#191414" }}>
          <Space
            direction="vertical"
            size="middle"
            gutter={30}
            style={{
              display: "flex",
              justify: "center",
              paddingTop: "20px",
            }}
          >
            <Card
              size="small"
              style={{ marginTop: "100px", backgroundColor: "#ffffff" }}
            >
              <Row style={{ padding: "30px" }} gutter={[10, 100]}>
                <Col span={14} offset={4}>
                  <Title
                    level={3}
                    style={{
                      alignContent: "center",
                      justifyContent: "center",
                      paddingBottom: "5px",
                    }}
                  >
                    Welcome, Login to Continue
                  </Title>
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
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
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                      />
                    </Form.Item>
                    <Form.Item
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
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>

                      <a className="login-form-forgot" href="">
                        Forgot password
                      </a>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        shape="round"
                        onClick={signinfunction}
                      >
                        Log in
                      </Button>
                      Or <a href="">register now!</a>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
