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
        style={{  opacity: "0.75",maxWidth: "2000px", maxHeight: "2000px"  }}
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
            <MDBCardBody style={{ fontSize : '18px',backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "25px" }}>
              <MDBCardText>
                I'm a 2020 computer engineering graduate from Iowa State
                University. I love hiking,photography,videography and involving
                myself in newer techonlogies.
              </MDBCardText>
              <br></br>
              <MDBCardText>
                As a computer engineering student I found myself lost with all
                the possible routes I could take with my carrer. I was taking
                courses ranging from pure embedded systems low level coding to
                CS project courses involving mobile apps. Working through some
                of my tech electives and going through my internships; I
                realized that I really like knowing the ins and out of a
                program. Where did it get its data from ? How does it display
                this data ? How do all the parts work togther? I really enjoyed
                the full stack of things.
              </MDBCardText>
              <br></br>
              <MDBCardText>
                I started working as full-time Account Management Programmer for
                a health insurance middlehouse software company called SmartData
                solutions on Aug 3rd of 2020. I practiced my debugging skills
                and communication skills every work day for 9 months, I was
                acting as a suport enginer implemnting new clinets on our system
                and supporting existing clients running on our Java based
                system. Then I moved on to work for Global VetLink, an animal
                health software company, as a full stack developer. I started
                out as a Software enginer Level 1 on the 1st of May 2021 and
                transtioned into a level 2 role after 6 months with the company.
                I use React and groovy/grails everyday to support existing
                Animal health products and develop new features on new company
                products.
              </MDBCardText>
              <br></br>
              <MDBCardText>
                I continue to grow as a developer and learn new and intersting
                technologies. my biggest fear is staying stangent in this
                industry, I practice algorithms (leetcode) and try to keep up to
                date with all that is new in hopes of one day building the next
                big thing!
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </React.Fragment>
  );
}

export default AboutScreen;
