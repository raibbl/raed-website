import "../App.css";
import "../index.css";
import "antd/dist/antd.css";
import { Button, Row, Col, Typography, Timeline } from "antd";
import "@fontsource/roboto";
import React from "react";
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;
const baseRaedTitleHeaderStyling = {
  fontFamily: "Roboto",
  color: "white",
};
function RaedTitleHeader(props) {
  return <div style={props.style}>Raed Ibrahim Albloushy</div>;
}

function RaedDescriptionText(props) {
  return (
    <Text italic style={props.style}>
      A fullstack developer who is always looking for adventures!
    </Text>
  );
}

function RaedTimeline(props) {
  return (
    <Timeline mode="right" style={props.style}>
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
  );
}

function ScreenContentDesktop() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <RaedTitleHeader
        style={{
          ...baseRaedTitleHeaderStyling,
          paddingTop: "50px",
          marginLeft: "40px",
          marginBottom: "30px",
          fontSize: "80px",
        }}
      ></RaedTitleHeader>
      <RaedDescriptionText
        style={{ fontSize: "20px", marginLeft: "60px", color: "white" }}
      ></RaedDescriptionText>
      <RaedTimeline
        style={{
          float: "right",
          marginRight: "100px",
          marginBottom: "0px",
          marginTop: "10px",
        }}
      ></RaedTimeline>

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
          <Button size="large" onClick={()=> navigate('/about')} style={{ color: "white" }} ghost>
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

function ScreenContentMobile() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="ant-row">
        <div className="ant-col ant-col-xs-24 ant-col-xl-8">
          <RaedTitleHeader
            style={{
              ...baseRaedTitleHeaderStyling,
              paddingTop: "20px",
              marginLeft: "40px",
              marginBottom: "20px",
              fontSize: "50px",
            }}
          ></RaedTitleHeader>
          <RaedDescriptionText
            style={{ color: "white", paddingLeft: "10px", textAlign: "center" }}
          ></RaedDescriptionText>
          <RaedTimeline
            style={{
              float: "right",
              marginRight: "100px",
              marginBottom: "0px",
              marginTop: "30px",
            }}
          ></RaedTimeline>
        </div>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "20px",
            alignItems: "center",
            height: "auto",
            width: "auto",
          }}
          justify="center"
        >
          <Col>
            <Button onClick={()=> navigate('/about')} size="small" style={{ color: "white" }} ghost>
              About Me
            </Button>
          </Col>
          <Col style={{ marginLeft: "5px" }}>
            <Button size="small" style={{ color: "white" }} ghost>
              Experince
            </Button>
          </Col>
          <Col style={{ marginLeft: "5px" }}>
            <Button size="small" style={{ color: "white" }} ghost>
              Projects
            </Button>
          </Col>
          <Col style={{ marginLeft: "5px" }}>
            <Button size="small" style={{ color: "white" }} ghost>
              Contact Me
            </Button>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
function HomeScreen() {
  const isMobile = window.screen.width < 1280;
  return (
    <React.Fragment>
      {!isMobile ? ScreenContentDesktop() : ScreenContentMobile()}
    </React.Fragment>
  );
}

export default HomeScreen;
