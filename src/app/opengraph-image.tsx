import { ImageResponse } from "next/og";

export const alt = "MrBrooksDigital Marketing — Good Marketing. Big Energy. Real Growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: "#080808",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.16 }}>
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} style={{ width: 80, height: "100%", borderRight: "1px solid #ffffff" }} />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            border: "90px solid #4169E1",
            borderRadius: "50%",
            right: -110,
            top: -170,
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 220,
            right: -80,
            bottom: -70,
            background: "#004225",
            transform: "rotate(-9deg)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "55px 70px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", width: 58, height: 58, alignItems: "center", justifyContent: "center", background: "#004225", border: "1px solid #ffffff", fontWeight: 900, fontSize: 17 }}>MB</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: 900, fontSize: 24, letterSpacing: -1 }}>MrBrooks</div>
              <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: 2.5, opacity: 0.65 }}>DIGITAL MARKETING</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 80, fontWeight: 900, letterSpacing: -6, lineHeight: 0.87, textTransform: "uppercase" }}>
            <span>Good marketing.</span>
            <span style={{ color: "#4169E1" }}>Big energy.</span>
            <span>Real growth.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, opacity: 0.7 }}>
            <span style={{ display: "flex", width: 9, height: 9, borderRadius: "50%", background: "#4169E1" }} />
            Creative thinking. Strategic digital marketing.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
