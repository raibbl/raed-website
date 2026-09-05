"use client";

import Image from "next/image";
import { Typography, List } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { highlights } from "@/data/content";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <section id="about" className="section">
      <Title level={2} style={{ color: "#f4f4f7" }}>
        About
      </Title>
      <div
        style={{
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          alignItems: "flex-start",
          marginTop: 24,
        }}
      >
        <Image
          src="/assets/raed-photo.jpg"
          alt="Raed Ibrahim Albloushy"
          width={220}
          height={220}
          style={{ borderRadius: 16, objectFit: "cover" }}
        />
        <div style={{ flex: 1, minWidth: 280 }}>
          <Paragraph style={{ color: "#c4c4cf", fontSize: 16 }}>
            I&apos;m a full-stack engineer with 5+ years of experience,
            currently a Software Engineer III at GlobalVetLink, where I lead a
            5-engineer squad and mentor other engineers. I care about shipping
            reliable software end-to-end — from data modeling to the
            interfaces people actually use.
          </Paragraph>
          <Paragraph style={{ color: "#c4c4cf", fontSize: 16 }}>
            2020 Computer Engineering graduate from Iowa State University.
            Outside of work I hike, tinker with side projects (Android/Kotlin,
            automation tooling), and keep sharpening algorithms.
          </Paragraph>
          <List
            dataSource={highlights}
            renderItem={(item) => (
              <List.Item style={{ border: "none", padding: "6px 0" }}>
                <CheckCircleOutlined style={{ color: "#7c6cf6", marginRight: 10 }} />
                <span style={{ color: "#c4c4cf" }}>{item}</span>
              </List.Item>
            )}
          />
        </div>
      </div>
    </section>
  );
}
