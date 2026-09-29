"use client";

import { Card, Tag, Typography, Row, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { projects, type Project } from "@/data/content";

const { Title, Paragraph } = Typography;

function ProjectCard({ p }: { p: Project }) {
  return (
    <Card
      hoverable={!!p.href}
      style={{ height: "100%", backgroundColor: "#12121a", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Title level={4} style={{ color: "#f4f4f7", margin: 0 }}>
          {p.name}
        </Title>
        {p.href && <GithubOutlined style={{ color: "#9a9aab", fontSize: 18 }} />}
      </div>
      <Paragraph style={{ color: "#9a9aab", marginTop: 10 }}>{p.description}</Paragraph>
      <div>
        {p.tech.map((t) => (
          <Tag key={t} color="purple" style={{ marginBottom: 6 }}>
            {t}
          </Tag>
        ))}
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Title level={2} style={{ color: "#f4f4f7" }}>
        Projects
      </Title>
      <Row gutter={[20, 20]} style={{ marginTop: 24 }}>
        {projects.map((p) => (
          <Col xs={24} sm={12} key={p.name}>
            {p.href ? (
              <a href={p.href} target="_blank" rel="noreferrer">
                <ProjectCard p={p} />
              </a>
            ) : (
              <ProjectCard p={p} />
            )}
          </Col>
        ))}
      </Row>
    </section>
  );
}
