import "./App.css";
import "./index.css";
import "antd/dist/antd.css";
import "@fontsource/roboto";
import React from "react";
import backgroundVideo from "./resources/backgroundVideo.mp4";
import HomeScreen from "./pages/HomeScreen.js";
import AboutScreen from "./pages/AboutScreen.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  const isMobile = window.screen.width < 1280;
  const mobileVideoStyle ={textAlign:'center',position:'fixed',minWidth:"100%",minHeight:"100%",backgroundSize:'cover',backgroundPosition:'cover'};
  const desktopVideoStyle = {
    position: "absolute",
    width: !isMobile?"100%":"auto",
    left: !isMobile?"50%":"30%",
    top: !isMobile?"50%":"70%",
    height: !isMobile?"100%":"auto",
    objectFit: "cover",
    transform: "translate(-50%,-50%)",
    zIndex: "-1",
  };
  return (
    
    <React.Fragment>
      <video
        autoPlay
        loop
        muted
        id="video"
        style={isMobile?mobileVideoStyle:desktopVideoStyle}
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
