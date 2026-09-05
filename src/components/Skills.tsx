"use client";

import { Typography, Tag, Row, Col } from "antd";
import { skills } from "@/data/content";

const { Title, Text } = Typography;

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Title level={2} style={{ color: "#f4f4f7" }}>
        Skills
      </Title>
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        {Object.entries(skills).map(([category, items]) => (
          <Col xs={24} sm={12} key={category}>
            <Text style={{ color: "#7c6cf6", fontWeight: 600 }}>{category}</Text>
            <div style={{ marginTop: 10 }}>
              {items.map((s) => (
                <Tag key={s} style={{ marginBottom: 8 }}>
                  {s}
                </Tag>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
