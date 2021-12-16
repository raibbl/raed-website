import "../App.css";
import "../index.css";
import "antd/dist/antd.css";
import { PageHeader, ArrowLeft,Row, Col, Typography, Timeline } from "antd";
import { ArrowLeftOutlined  } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
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
      style={{textDecorationColor:'white'}}
      className="site-page-header"
      onBack={() => navigate('/')}
      backIcon={<ArrowLeftOutlined style={{color:'White'}} />}
      title={<Text style = {{color:"white"}}>About Me</Text>}
      />
    </React.Fragment>
  );
}

export default AboutScreen;
