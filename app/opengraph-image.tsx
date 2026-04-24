import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Talha Waheed — Full-Stack GIS Developer & Spatial Data Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,215,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #FFD700, #FFC700, #FFED4E)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
            zIndex: 1,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: "86px",
              fontWeight: "900",
              letterSpacing: "-2px",
              background: "linear-gradient(135deg, #FFD700 0%, #FFC700 50%, #FFED4E 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1,
              marginBottom: "16px",
            }}
          >
            TALHA WAHEED
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "38px",
              fontWeight: "600",
              color: "#FFFFFF",
              letterSpacing: "1px",
              marginBottom: "8px",
            }}
          >
            Full-Stack GIS Developer
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: "400",
              color: "#94A3B8",
              letterSpacing: "0.5px",
              marginBottom: "36px",
            }}
          >
            Spatial Data Engineer
          </div>

          {/* Divider */}
          <div
            style={{
              width: "600px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
              marginBottom: "32px",
              opacity: 0.7,
            }}
          />

          {/* Tech stack */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: "400",
              color: "#94A3B8",
              letterSpacing: "0.5px",
              marginBottom: "24px",
            }}
          >
            FastAPI · PostGIS · Mapbox · ArcGIS · Next.js · QGIS
          </div>

          {/* CTA */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#FFD700",
              opacity: 0.9,
            }}
          >
            twaheedgj.vercel.app
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #FFD700, #FFC700, #FFED4E)",
            opacity: 0.3,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
