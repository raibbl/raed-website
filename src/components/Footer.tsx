export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "24px",
        color: "#5c5c6b",
        fontSize: 13,
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      © {new Date().getFullYear()} Raed Ibrahim Albloushy
    </footer>
  );
}
