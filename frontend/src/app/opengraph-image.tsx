import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MarketLens AI -- AI-Powered Stock Price Prediction";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0A 0%, #171717 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle gradient glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "25%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #10B981, #3B82F6)",
            marginBottom: "32px",
            boxShadow: "0 0 60px rgba(16,185,129,0.3)",
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#F8FAFC",
              letterSpacing: "-0.03em",
            }}
          >
            MarketLens
          </span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #10B981, #34D399)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.03em",
            }}
          >
            AI
          </span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#94A3B8",
            letterSpacing: "0.01em",
            margin: 0,
          }}
        >
          AI-Powered Stock Price Prediction
        </p>
      </div>
    ),
    { ...size }
  );
}
