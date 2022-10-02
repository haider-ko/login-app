import "../Home-Components/Card.style.css";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
const { Meta } = Card;

const Cards = ({ employee }) => (
  <Card
    className="card-container"
    style={{
      width: 250,
    }}
    cover={
      <img
        alt="example"
        src={`https://robohash.org/${employee.id}?set=set2&size=180x180`}
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={employee.name}
      description={employee.email}
    />
    {/* <p style={{ color: "blue", alignItems: "center" }}>{employee.username}</p> */}
  </Card>
);

export default Cards;
