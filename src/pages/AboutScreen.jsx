import "../App.css";
import "../index.css";
import "antd/dist/antd.css";
import { PageHeader, Typography } from "antd";
import raedPhoto from "../resources/raedPhoto.jpeg";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto";
import React from "react";

const { Text } = Typography;

function AboutScreen() {
  const navigate = useNavigate();
  const isMobile = window.screen.width < 1280;
  return (
    <React.Fragment>
      <PageHeader
        ghost={true}
        style={{ textDecorationColor: "white" }}
        className="site-page-header"
        onBack={() => navigate("/")}
        backIcon={<ArrowLeftOutlined style={{ color: "White" }} />}
        title={<Text style={{ color: "white" }}>About Me</Text>}
      />
      <MDBCard
        style={{ opacity: "0.75", maxWidth: "2000px", maxHeight: "2000px" }}
        background="transparent"
        className="text-white"
      >
        <MDBRow className="g-0">
          <MDBCol md="3">
            <MDBCardImage
              style={
                !isMobile ? { borderRadius: "25px", padding: "20px" } : null
              }
              src={raedPhoto}
              alt="..."
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody
              style={{
                fontSize: "18px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "25px",
              }}
            >
              <MDBCardText>
                I'm a 2020 Computer Engineering graduate from Iowa State
                University with a passion for full-stack development,
                problem-solving, and continuously learning new technologies. I
                enjoy hiking, photography, and videography in my free time,
                alongside exploring the latest trends in tech.
              </MDBCardText>
              <br></br>
              <MDBCardText>
                Throughout my career, I have worked with a range of
                technologies, from React and Spring Boot to MongoDB, PostgreSQL,
                and Grails, building and supporting scalable applications in
                industries such as veterinary healthcare. I love understanding
                how programs function end-to-end, from data handling to frontend
                interfaces, which has driven my passion for full-stack
                development.
              </MDBCardText>
              <br></br>
              <MDBCardText>
                After starting my career at SmartData Solutions as an Account
                Management Programmer, I transitioned to GlobalVetLink in May
                2021. Here, I progressed from Software Engineer Level 1 to Level
                2 within six months, working extensively with React and
                Groovy/Grails to develop new features and enhance the
                performance of animal health software solutions.
              </MDBCardText>
              <br></br>
              <MDBCardText>
                I'm always eager to grow as a developer, regularly practicing
                algorithms and keeping up-to-date with emerging technologies
                like Next.js, Kotlin, and Wear OS. My goal is to continue
                improving and, one day, build something groundbreaking.
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </React.Fragment>
  );
}

export default AboutScreen;
