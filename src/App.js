import "./App.css";
import "./index.css";
import "antd/dist/antd.css";
import "@fontsource/roboto";
import React, { useState } from "react";
import backgroundVideo from "./resources/backgroundVideo.mp4";
import HomeScreen from "./pages/HomeScreen.js";
import AboutScreen from "./pages/AboutScreen.js";
import { LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Button } from "antd";
const { Header } = Layout;

function App() {
  const isMobile = window.screen.width < 1280;
  const [isAtScreenBottom, setisAtScreenBottom] = useState(false);
  const mobileVideoStyle = {
    textAlign: "center",
    position: "fixed",
    minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "cover",
    backgroundPosition: "cover",
  };
  const desktopVideoStyle = {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "auto",
    objectFit: "cover",
    transform: "translate(-50%,-50%)",
    zIndex: "-1",
  };
  window.onscroll = function () {
    const difference =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollposition = document.documentElement.scrollTop;
    if (difference - scrollposition <= 2) {
      setisAtScreenBottom(true);
    } else {
      setisAtScreenBottom(false);
    }
  };
  return (
    <React.Fragment>
      {!isAtScreenBottom ? (
        <Header
          style={{
            position: "fixed",
            bottom: "0px",
            left: "0px",
            zIndex: 1,
            width: "50%",
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
        >
          <Button
            type="link"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/raedalbloushy/",
                "_blank"
              )
            }
            icon={
              <LinkedinOutlined
                style={{
                  fontSize: "30px",
                  paddingRight: "10px",
                  color: "rgba(255, 255, 255, .5)",
                }}
              />
            }
          />
          <Button
            type="link"
            onClick={() =>
              window.open(
                "https://www.youtube.com/c/RaedIbrahimAlbloushy",
                "_blank"
              )
            }
            icon={
              <YoutubeOutlined
                style={{ fontSize: "30px", color: "rgba(255, 255, 255, .5)" }}
              />
            }
          />
        </Header>
      ) : null}

      <video
        autoPlay
        loop
        muted
        id="video"
        style={isMobile ? mobileVideoStyle : desktopVideoStyle}
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4"></source>
      </video>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
