import "../App.css";
import "../index.css";
import "antd/dist/antd.css";
import { Button, Row, Col, Typography, Timeline } from "antd";
import "@fontsource/roboto";
import React from "react";


const { Text } = Typography;

function screenContent(){
    return(
        <React.Fragment>
    <Text
    italic
    style={{ fontSize: "20px", marginLeft: "60px", color: "white" }}
  >
    A fullStack developer who is always looking for adventures!
  </Text>
  <Timeline
    mode="right"
    style={{
      float: "right",
      marginRight: "100px",
      marginBottom: "0px",
      marginTop: "10px",
    }}
  >
    <Timeline.Item style={{ color: "white" }} color="white">
      Joined GlobalVetLink May 2021
    </Timeline.Item>
    <Timeline.Item style={{ color: "white" }} color="white">
      Joined SmartData Solutions Aug 2020
    </Timeline.Item>
    <Timeline.Item style={{ color: "white" }} color="white">
      Graduated from ISU May 2020
    </Timeline.Item>
    <Timeline.Item style={{ color: "white" }} color="white">
      ISU TA Jan 2020
    </Timeline.Item>
    <Timeline.Item style={{ color: "white" }} color="white">
      Siemens Engineering Intern June 2019
    </Timeline.Item>
  </Timeline>
  <Row
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
      width: "50h",
    }}
    justify="center"
  >
    <Col>
      <Button size="large" style={{ color: "white" }} ghost>
        About Me
      </Button>
    </Col>
    <Col style={{ marginLeft: "10px" }}>
      <Button size="large" style={{ color: "white" }} ghost>
        Experince
      </Button>
    </Col>
    <Col style={{ marginLeft: "10px" }}>
      <Button size="large" style={{ color: "white" }} ghost>
        Projects
      </Button>
    </Col>
    <Col style={{ marginLeft: "10px", marginRight: "50px" }}>
      <Button size="large" style={{ color: "white" }} ghost>
        Contact Me
      </Button>
    </Col>
  </Row>
  </React.Fragment>
    );
}
function HomeScreen() {
    const isMobile = window.screen.width < 1280; 
  return (
    <React.Fragment>
     {screenContent()}
    </React.Fragment>
  );
}

export default HomeScreen;
