"use client";

import { Timeline, Typography } from "antd";
import { experience } from "@/data/content";

const { Title, Text } = Typography;

export default function Experience() {
  return (
    <section id="experience" className="section">
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
    </section>
  );
}
