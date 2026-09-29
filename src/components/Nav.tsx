"use client";

import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { MenuOutlined, DownloadOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { socials } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(10,10,15,0.75)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <a href="#top" style={{ fontWeight: 700, color: "#e2e2e9" }}>
        RA
      </a>

      <Space size="large" style={{ display: "none" }} className="nav-desktop">
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{ color: "#9a9aab" }}>
            {l.label}
          </a>
        ))}
      </Space>

      <Space size="small">
        <Button
          type="text"
          href={socials.github}
          target="_blank"
          aria-label="GitHub"
          icon={<GithubOutlined style={{ color: "#9a9aab", fontSize: 18 }} />}
        />
        <Button
          type="text"
          href={socials.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          icon={<LinkedinOutlined style={{ color: "#9a9aab", fontSize: 18 }} />}
        />
        <span className="nav-desktop-cta" style={{ display: "none" }}>
          <Button icon={<DownloadOutlined />} href="/resume.pdf" target="_blank">
            Resume
          </Button>
        </span>
        <Button
          className="nav-mobile-toggle"
          type="text"
          icon={<MenuOutlined style={{ color: "#e2e2e9" }} />}
          onClick={() => setOpen(true)}
        />
      </Space>

      <Drawer open={open} onClose={() => setOpen(false)} placement="right" title="Menu">
        <Space orientation="vertical" size="large">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button icon={<DownloadOutlined />} href="/resume.pdf" target="_blank" block>
            Resume
          </Button>
        </Space>
      </Drawer>

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop, .nav-desktop-cta { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
