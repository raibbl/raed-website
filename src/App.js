import "./App.css";
import "./index.css";
import "antd/dist/antd.css";
import "@fontsource/roboto";
import React from "react";
import backgroundVideo from "./resources/backgroundVideo.mp4";
import HomeScreen from "./pages/HomeScreen.js";



function App() {
  const isMobile = window.screen.width < 1280;
  return (
    <React.Fragment>
     <video
        autoPlay
        loop
        muted
        id="video"
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={backgroundVideo} type="video/mp4"></source>
      </video> 
  
 


      <div
        style={{
          fontFamily: "Roboto",
          paddingTop: "50px",
          marginLeft: "40px",
          marginBottom: "30px",
          fontSize: "80px",
          color: "white",
        }}
      >
        Raed Ibrahim Albloushy
      </div>
      {HomeScreen()}
    </React.Fragment>
  );
}

export default App;
