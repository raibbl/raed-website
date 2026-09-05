"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider, theme as antdTheme } from "antd";
import { theme } from "@/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={{ ...theme, algorithm: antdTheme.darkAlgorithm }}>
        <App>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
