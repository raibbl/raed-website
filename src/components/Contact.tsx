"use client";

import { App, Button, Space, Typography } from "antd";
import { CopyOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { socials } from "@/data/content";

const { Title, Paragraph } = Typography;

export default function Contact() {
  const { message } = App.useApp();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socials.email);
    message.success("Email copied to clipboard");
  };

  return (
    <section id="contact" className="section" style={{ textAlign: "center" }}>
      <Title level={2} style={{ color: "#f4f4f7" }}>
        Let&apos;s talk
      </Title>
      <Paragraph style={{ color: "#9a9aab", maxWidth: 480, margin: "0 auto" }}>
        Always happy to talk shop, or hear about what your team is building.
      </Paragraph>
      <Space size="middle" style={{ marginTop: 20 }} wrap>
        <Button size="large" icon={<MailOutlined />} href={`mailto:${socials.email}`}>
          Email
        </Button>
        <Button size="large" icon={<CopyOutlined />} onClick={copyEmail}>
          Copy email
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
