import { Breadcrumb, Layout, Menu } from "antd";
import { Col, Row } from "antd";
import { Typography } from "antd";
import { Outlet } from "react-router";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import Signup from "../Sign-up";
import LoginForm from "../LoginPage/Login-Page";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const Navbar = (props) => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ height: "48px", lineHeight: "0" }}>
          <Row
            align="middle"
            gutter={20}
            justify="end"
            style={{ height: "48px", backgroundColor: "#0B132B" }}
          >
            <Col>
              <Avatar icon={<UserOutlined />} />
            </Col>
            <Col>
              <Typography.Title level={3} style={{ color: "white", margin: 0 }}>
                {props.name}
              </Typography.Title>
            </Col>
          </Row>
        </Header>

        {props.children}
      </Layout>
      <Outlet />
    </>
  );
};

export default Navbar;
