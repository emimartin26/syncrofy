import React from "react";
import { useSocket } from "../hooks/socket/useSocket";

import { Button, Col, Row } from "antd";
import { PoweroffOutlined, CaretRightOutlined } from "@ant-design/icons";

import ListUsersOnline from "./ListUsersOnline";
import ListUsersSync from "./ListUsersSync";

const gridStyle = {
  textAlign: "center",
  padding: "8px 8px",
};

const Home = ({ userLoggedIn, handleOnClickLogout }) => {
  const { socket } = useSocket();

  const handleOnClikStart = () => {
    socket.emit("start sync");
  };

  return (
    <>
      <Row justify="space-around">
        <Col span={8} style={gridStyle}>
          <ListUsersOnline userLoggedIn={userLoggedIn} />
        </Col>
        <Col span={8} style={gridStyle}>
          <ListUsersSync userLoggedIn={userLoggedIn} />
        </Col>
      </Row>
      <Row>
        <Button
          icon={<PoweroffOutlined />}
          style={{ marginRight: "10px" }}
          onClick={handleOnClickLogout}
          type="primary"
          danger
        >
          Exit
        </Button>
        <Button
          icon={<CaretRightOutlined />}
          onClick={handleOnClikStart}
          type="primary"
        >
          Start
        </Button>
      </Row>
    </>
  );
};

export default Home;
