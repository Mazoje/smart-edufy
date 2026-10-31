import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const C = {
  blue: "#2563eb",
  dark: "#0f172a",
  muted: "#64748b",
  border: "#cbd5e1",
  white: "#ffffff",
};

export default function PricingVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section style={{
      width: "100%",
      backgroundColor: "#EEF2FF", // Soft distinct blue/lavender background tint
      padding: "100px 24px 120px 24px",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderTop: "1px solid rgba(203, 213, 225, 0.4)", // Distinct top boundary line
    }}>
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", textAlign: "center" }}>
        
        {/* SECTION HEADER */}
        <div style={{ maxWidth: 720, margin: "0 auto 56px auto" }}>
          <h2 style={{
            fontSize: "clamp(34px, 4.5vw, 48px)",
            fontWeight: 800,
            color: C.dark,
            letterSpacing: "-1.2px",
            margin: "0 0 16px 0",
            lineHeight: 1.15,
          }}>
            Transparent Plans for Every School
          </h2>

          <p style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: C.muted,
            margin: "0 auto",
            maxWidth: "600px",
          }}>
            No hidden implementation costs. Predictable termly pricing designed to scale with your student enrollment.
          </p>
        </div>

        {/* LAPTOP DISPLAY MOCKUP FRAME */}
        <div style={{
          position: "relative",
          maxWidth: "1020px",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#0B1329",
          borderRadius: "28px",
          padding: "12px",
          boxShadow: "0 35px 70px -15px rgba(15, 23, 42, 0.3)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          boxSizing: "border-box",
        }}>
          {/* Inner Dashboard View Screen */}
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            backgroundColor: "#F8FAFC",
            borderRadius: "18px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}>
            
            {/* Top Mockup Header Bar */}
            <div style={{
              height: "40px",
              backgroundColor: "#FFFFFF",
              borderBottom: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              fontSize: "12px",
              color: "#64748B",
              flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontWeight: 800, color: "#2563EB", fontSize: "13px" }}>SmartEdufy</span>
                <span style={{ fontSize: "10px", backgroundColor: "#F1F5F9", padding: "2px 6px", borderRadius: "4px", fontWeight: 600 }}>Admin</span>
              </div>
              <div style={{ fontWeight: 600, color: "#0F172A", fontSize: "12px" }}>
                Golden Light School <span style={{ opacity: 0.5, fontWeight: 400 }}>First Term 2026/2027</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "11px" }}>
                <span>🔍</span>
                <span>— 80% +</span>
                <span>🔔</span>
              </div>
            </div>

            {/* Simulated Dashboard Visual UI Background */}
            <div style={{ padding: "20px", flex: 1, backgroundColor: "#F8FAFC" }}>
              <div style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", marginBottom: "4px" }}>
                Good afternoon, Golden Light Admin 👋
              </div>
              <div style={{ fontSize: "10px", color: "#64748B", marginBottom: "20px" }}>
                ADMIN • Golden Light School — Thursday, September 24, 2026
              </div>

              {/* Stat Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
                <div style={mockStatStyle}>
                  <div>
                    <span style={{ fontSize: "9px", color: "#64748B" }}>Total Students</span>
                    <div style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A" }}>4</div>
                  </div>
                  <div style={mockIconStyle}>👥</div>
                </div>

                <div style={mockStatStyle}>
                  <div>
                    <span style={{ fontSize: "9px", color: "#64748B" }}>Total Teachers</span>
                    <div style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A" }}>20</div>
                  </div>
                  <div style={mockIconStyle}>🎓</div>
                </div>

                <div style={mockStatStyle}>
                  <div>
                    <span style={{ fontSize: "9px", color: "#64748B" }}>Classes</span>
                    <div style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A" }}>16</div>
                  </div>
                  <div style={mockIconStyle}>📘</div>
                </div>

                <div style={mockStatStyle}>
                  <div>
                    <span style={{ fontSize: "9px", color: "#64748B" }}>Avg Performance</span>
                    <div style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A" }}>—</div>
                  </div>
                  <div style={mockIconStyle}>📊</div>
                </div>
              </div>

              {/* Activity Section Placeholder */}
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", padding: "12px", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>Recent Activity</div>
                <div style={{ fontSize: "9px", color: "#64748B", padding: "4px 0" }}>Huldah Sani Roni registered as TEACHER</div>
                <div style={{ fontSize: "9px", color: "#64748B", padding: "4px 0" }}>Hindatu Abubakar registered as TEACHER</div>
              </div>
            </div>

            {/* VIDEO PLAYER OVERLAY */}
            <div 
              onClick={togglePlay}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: isPlaying ? "transparent" : "rgba(15, 23, 42, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              {/* Actual HTML5 Video Tag (Put your video source URL in src) */}
              <video
                ref={videoRef}
                src="" // <-- ADD YOUR VIDEO LINK HERE
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: isPlaying ? "block" : "none",
                }}
                controls={isPlaying}
              />

              {/* Centered Large Play Button Overlay */}
              {!isPlaying && (
                <div style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#000000",
                  borderRadius: "24px",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  transition: "transform 0.2s ease",
                }}>
                  <Play size={36} color="#FFFFFF" fill="#FFFFFF" style={{ marginLeft: "4px" }} />
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

const mockStatStyle: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  padding: "10px 12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #E2E8F0",
};

const mockIconStyle: React.CSSProperties = {
  width: "28px",
  height: "28px",
  backgroundColor: "#3B82F6",
  color: "#FFFFFF",
  borderRadius: "8px",
  display: "grid",
  placeItems: "center",
  fontSize: "12px",
};