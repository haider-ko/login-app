import { Breadcrumb, Layout, Menu } from "antd";
import { Col, Row } from "antd";
import { Typography } from "antd";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import LoginForm from "../components/LoginPage/Login-Page";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const Home = (props) => (
  <>
    <Layout className="layout">
      <Header style={{ height: "48px", lineHeight: "0" }}>
        <Row
          align="middle"
          gutter={20}
          justify="end"
          style={{ height: "48px", backgroundColor: "#191414" }}
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
      <LoginForm />
    </Layout>
  </>
);

export default Home;
