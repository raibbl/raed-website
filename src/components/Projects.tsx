"use client";

import { Card, Tag, Typography, Row, Col, Space } from "antd";
import { GithubOutlined, AndroidOutlined, RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { projects, type Project } from "@/data/content";

const { Title, Paragraph } = Typography;

function ProjectCard({ p, installs }: { p: Project; installs?: string | null }) {
  const playStoreUrl = p.playStoreId
    ? `https://play.google.com/store/apps/details?id=${p.playStoreId}&hl=en_US`
    : undefined;

  return (
    <Card style={{ height: "100%", backgroundColor: "#12121a", borderColor: "rgba(255,255,255,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Title level={4} style={{ color: "#f4f4f7", margin: 0 }}>
          {p.name}
        </Title>
        <Space size="small">
          {p.href && (
            <a href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`}>
              <GithubOutlined style={{ color: "#9a9aab", fontSize: 18 }} />
            </a>
          )}
          {playStoreUrl && (
            <a href={playStoreUrl} target="_blank" rel="noreferrer" aria-label={`${p.name} on Google Play`}>
              <AndroidOutlined style={{ color: "#9a9aab", fontSize: 18 }} />
            </a>
          )}
        </Space>
      </div>
      <Paragraph style={{ color: "#9a9aab", marginTop: 10 }}>{p.description}</Paragraph>
      <ul style={{ listStyle: "none", marginBottom: 10 }}>
        {p.highlights.map((h) => (
          <li
            key={h}
            style={{
              color: "#c4c4cf",
              fontSize: 13.5,
              display: "flex",
              gap: 6,
              padding: "2px 0",
            }}
          >
            <RightOutlined style={{ color: "#7c6cf6", fontSize: 10, marginTop: 4 }} />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      {playStoreUrl && (
        <Tag color="green" style={{ marginBottom: 10 }}>
          {installs ? `${installs} installs` : "On Google Play"}
        </Tag>
      )}
      {p.demoUrl && (
        <div style={{ marginBottom: 10 }}>
          <a
            href={p.demoUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7c6cf6", fontSize: 13.5, fontWeight: 600 }}
          >
            Live demo <ArrowRightOutlined style={{ fontSize: 11 }} />
          </a>
        </div>
      )}
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

export default function Projects({
  installCounts = {},
}: {
  installCounts?: Record<string, string | null>;
}) {
  return (
    <section id="projects" className="section">
      <Title level={2} style={{ color: "#f4f4f7" }}>
        Projects
      </Title>
      <Row gutter={[20, 20]} style={{ marginTop: 24 }}>
        {projects.map((p) => (
          <Col xs={24} sm={12} lg={8} key={p.name}>
            <ProjectCard p={p} installs={p.playStoreId ? installCounts[p.playStoreId] : undefined} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
