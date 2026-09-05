"use client";

import { Button, Space, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { socials } from "@/data/content";

const { Title, Paragraph } = Typography;

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ textAlign: "center" }}>
      <Title level={2} style={{ color: "#f4f4f7" }}>
        Get in touch
      </Title>
      <Paragraph style={{ color: "#9a9aab", maxWidth: 480, margin: "0 auto" }}>
        Open to senior / staff engineering roles, remote, US-eligible.
      </Paragraph>
      <Space size="middle" style={{ marginTop: 20 }} wrap>
        <Button size="large" icon={<MailOutlined />} href={`mailto:${socials.email}`}>
          Email
        </Button>
        <Button size="large" icon={<LinkedinOutlined />} href={socials.linkedin} target="_blank">
          LinkedIn
        </Button>
        <Button size="large" icon={<GithubOutlined />} href={socials.github} target="_blank">
          GitHub
        </Button>
      </Space>
    </section>
  );
}
