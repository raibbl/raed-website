"use client";

import Image from "next/image";
import { Typography, Row, Col, Timeline } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { highlights, experience } from "@/data/content";

const { Title, Paragraph, Text } = Typography;

export default function About() {
  return (
    <section id="about" className="section">
      <Row gutter={[48, 40]}>
        <Col xs={24} lg={13}>
          <Title level={2} style={{ color: "#f4f4f7" }}>
            About
          </Title>
          <Image
            src="/assets/raed-photo.jpg"
            alt="Raed Ibrahim Albloushy"
            width={140}
            height={140}
            style={{ borderRadius: 14, objectFit: "cover", marginTop: 20, marginBottom: 16 }}
          />
          <Paragraph style={{ color: "#c4c4cf", fontSize: 16 }}>
            I&apos;m a full-stack engineer with 5+ years of experience,
            currently a Software Engineer III at GlobalVetLink, where I lead a
            5-engineer squad and mentor other engineers. I care about shipping
            reliable software end-to-end — from data modeling to the
            interfaces people actually use.
          </Paragraph>
          <Paragraph style={{ color: "#c4c4cf", fontSize: 16 }}>
            B.S. in Computer Engineering from Iowa State University (2020) and
            an MBA with an IT focus from Humphreys University (2025). Outside
            of work I hike, tinker with side projects (Android/Kotlin,
            automation tooling), and keep sharpening algorithms.
          </Paragraph>
          <ul style={{ listStyle: "none" }}>
            {highlights.map((item) => (
              <li key={item} style={{ padding: "6px 0" }}>
                <CheckCircleOutlined style={{ color: "#7c6cf6", marginRight: 10 }} />
                <span style={{ color: "#c4c4cf" }}>{item}</span>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={24} lg={11} id="experience">
          <Title level={2} style={{ color: "#f4f4f7" }}>
            Experience
          </Title>
          <Timeline
            style={{ marginTop: 32 }}
            items={experience.map((e) => ({
              color: "#7c6cf6",
              content: (
                <div key={e.title}>
                  <Text style={{ color: "#7c6cf6", fontSize: 13 }}>{e.date}</Text>
                  <div style={{ color: "#f4f4f7", fontWeight: 600, fontSize: 16 }}>
                    {e.title} · {e.org}
                  </div>
                  {e.detail && (
                    <div style={{ color: "#9a9aab", marginTop: 2 }}>{e.detail}</div>
                  )}
                </div>
              ),
            }))}
          />
        </Col>
      </Row>
    </section>
  );
}
