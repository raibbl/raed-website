"use client";

import { Button, Space, Typography } from "antd";
import { DownloadOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        padding: "120px 24px 72px",
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <Text style={{ color: "#7c6cf6", letterSpacing: 2, fontWeight: 600 }}>
        SENIOR SOFTWARE ENGINEER
      </Text>
      <Title style={{ color: "#f4f4f7", fontSize: "clamp(36px, 7vw, 64px)", margin: "12px 0" }}>
        Raed Ibrahim Albloushy
      </Title>
      <Paragraph style={{ color: "#9a9aab", fontSize: 19, maxWidth: 640 }}>
        I build reliable, scalable software across web, mobile, and backend —
        from veterinary health software at GlobalVetLink to AI-powered side
        projects.
      </Paragraph>
      <Space size="middle" style={{ marginTop: 24 }} wrap>
        <Button type="primary" size="large" href="#projects" icon={<ArrowRightOutlined />}>
          View Projects
        </Button>
        <Button size="large" href="/resume.pdf" target="_blank" icon={<DownloadOutlined />}>
          Resume
        </Button>
      </Space>
    </section>
  );
}
