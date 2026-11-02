import React from "react";
import {
  Search, Plus, Minus, Grid2X2, Bell, Moon,
  Users, BookOpen, BarChart3, Folder, UserRound,
  Home, Menu, CalendarDays, GraduationCap,
  ClipboardList, TrendingUp, ChevronRight,
  ChevronLeft, MoreHorizontal,
  Sparkles, School, MessageCircle, RefreshCw, Square, BellRing
} from "lucide-react";

const C = {
  background: "#f3effe",
  blue: "#2563eb",
  dark: "#0f172a",
  muted: "#64748b",
  border: "#e2e8f0",
  white: "#ffffff",
  offWhite: "#f8fafc",
};

const card: React.CSSProperties = {
  background: C.white,
  border: `1px solid ${C.border}`,
  borderRadius: 12,
  boxShadow: "0 4px 12px rgba(15,23,42,0.03)",
};

function StatusBar() {
  return (
    <div style={{
      height: 28, display: "flex", justifyContent: "space-between",
      alignItems: "center", padding: "0 14px", fontSize: 11,
      fontWeight: 700, color: C.dark, flexShrink: 0
    }}>
      <span>10:18</span>
      <div style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 9 }}>
        <span>●</span>
        <span>LTE</span>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div style={{
      height: 32, display: "flex", alignItems: "center",
      justifyContent: "space-around", background: "#ffffff",
      color: "#64748b", borderBottom: `1px solid ${C.border}`,
      flexShrink: 0, padding: "0 8px"
    }}>
      <Search size={13} />
      <Minus size={13} />
      <Plus size={13} />
      <Grid2X2 size={13} />
      <span style={{
        background: "#dcfce7", color: "#166534",
        borderRadius: 12, padding: "2px 8px", fontSize: 9, fontWeight: 600, display: "flex", alignItems: "center", gap: 3
      }}><span style={{fontSize: 6}}>🟢</span> Online</span>
      <Bell size={13} />
      <Moon size={13} />
    </div>
  );
}

function BottomNav() {
  const items = [
    { icon: Home, label: "Home", active: true },
    { icon: Menu, label: "Menu" },
    { icon: UserRound, label: "Profile" },
    { icon: MoreHorizontal, label: "Logout" },
  ];

  return (
    <div style={{
      position: "absolute", bottom: 36, left: 10, right: 10,
      height: 44, display: "flex", justifyContent: "space-around",
      alignItems: "center", background: "#ffffff",
      borderRadius: 14, boxShadow: "0 -4px 16px rgba(0,0,0,0.04)",
      border: `1px solid ${C.border}`, zIndex: 3, padding: "0 4px"
    }}>
      {items.map(({ icon: Icon, label, active }) => (
        <div key={label} style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 2,
          color: active ? C.blue : "#64748b"
        }}>
          <Icon size={14} />
          <span style={{ fontSize: 9, fontWeight: active ? 700 : 500 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function BrowserBar() {
  return (
    <div style={{
      position: "absolute", bottom: 4, left: 8, right: 8,
      height: 30, display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: 6,
      padding: "0 8px", background: "#e2e8f0", borderRadius: 16, zIndex: 5
    }}>
      <ChevronLeft size={14} color="#334155" />
      <span style={{ fontSize: 13, color: "#334155" }}>≡</span>
      <span style={{
        flex: 1, textAlign: "center", fontSize: 11,
        color: "#0f172a", fontWeight: 700
      }}>smartedufy.ng</span>
      <RefreshCw size={12} color="#334155" />
      <Square size={12} color="#334155" />
    </div>
  );
}

function Phone({
  children,
}: {
  children: React.ReactNode;
  variant: string;
}) {
  return (
    <div style={{
      position: "relative", width: 280, height: 560,
      flexShrink: 0, padding: 12, boxSizing: "border-box",
      borderRadius: 44, background: "#0b1329",
      boxShadow: "0 25px 50px -12px rgba(15,23,42,0.25)"
    }}>
      <div style={{
        width: "100%", height: "100%", overflow: "hidden",
        position: "relative", borderRadius: 32,
        background: "#f8fafc", display: "flex",
        flexDirection: "column"
      }}>
        <StatusBar />
        <Toolbar />

        <div style={{
          flex: 1, minHeight: 0, overflowY: "auto",
          padding: "10px 10px 75px", position: "relative"
        }}>
          {children}
        </div>

        {/* AI FAB Button */}
        <div style={{
          position: "absolute", right: 18, bottom: 84,
          width: 32, height: 32, borderRadius: "50%",
          display: "grid", placeItems: "center",
          background: "#2563eb",
          color: "#fff", boxShadow: "0 4px 12px rgba(37,99,235,0.4)",
          zIndex: 4
        }}>
          <Sparkles size={16} />
        </div>

        <BottomNav />
        <BrowserBar />
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  color = "#2563eb",
  bg = "#eff6ff"
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color?: string;
  bg?: string;
}) {
  return (
    <div style={{
      ...card, height: 52, padding: "8px 10px", display: "flex",
      alignItems: "center", justifyContent: "space-between",
      gap: 6
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <span style={{ fontSize: 9, color: C.muted, fontWeight: 500 }}>{label}</span>
        <strong style={{ fontSize: 15, color: C.dark, fontWeight: 800 }}>{value}</strong>
      </div>
      <div style={{
        width: 28, height: 28, flexShrink: 0,
        display: "grid", placeItems: "center",
        background: bg, color, borderRadius: 8
      }}>
        <Icon size={15} />
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  action
}: {
  title: string;
  action?: string;
}) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between",
      alignItems: "center", marginBottom: 6
    }}>
      <strong style={{ fontSize: 10.5, color: C.dark, fontWeight: 700 }}>{title}</strong>
      {action && <span style={{
        fontSize: 9.5, color: C.blue, fontWeight: 600, cursor: "pointer"
      }}>{action}</span>}
    </div>
  );
}

function Activity({
  color,
  title,
  subtitle
}: {
  color: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center",
      gap: 8, borderTop: "1px solid #f1f5f9", padding: "7px 0"
    }}>
      <div style={{
        width: 22, height: 22, flexShrink: 0, borderRadius: 6,
        background: color === "#36c68b" ? "#dcfce7" : "#f3e8ff",
        display: "grid", placeItems: "center", fontSize: 10
      }}>
        {color === "#36c68b" ? "👤" : "💼"}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 9.5, color: "#334155", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {title} <strong style={{ fontWeight: 700 }}>{subtitle}</strong>
        </span>
      </div>
      <ChevronRight size={13} color="#94a3b8" />
    </div>
  );
}

// ADMIN PHONE
function AdminPhone() {
  return (
    <Phone variant="admin">
      <div style={{
        display: "flex", alignItems: "flex-start",
        gap: 8, marginBottom: 10
      }}>
        <div style={{
          width: 32, height: 32, display: "grid",
          placeItems: "center", background: "#eff6ff",
          borderRadius: 8, fontSize: 16, flexShrink: 0
        }}>🏫</div>
        <div>
          <strong style={{ fontSize: 11.5, display: "block", color: C.dark, fontWeight: 800 }}>
            Good morning, Demo Admin 👋
          </strong>
          <span style={{
            fontSize: 8.5, color: C.muted, lineHeight: 1.3, display: "block", marginTop: 1
          }}>
            ADMIN • Demo Test School — Wednesday, October 28, 2026
          </span>
        </div>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 6, marginBottom: 10
      }}>
        <Stat icon={Users} label="Total Students" value="10" />
        <Stat icon={GraduationCap} label="Total Teachers" value="2" />
        <Stat icon={BookOpen} label="Classes" value="3" />
        <Stat icon={BarChart3} label="Avg Performance" value="—" />
      </div>

      <div style={{ ...card, padding: 10 }}>
        <SectionTitle title="Recent Activity" action="See All →" />
        <Activity color="#36c68b" title="demo teacher registered as" subtitle="TEACHER" />
        <Activity color="#a47af1" title="Alice Accountant payroll processed" subtitle="(2026-10)" />
        <Activity color="#36c68b" title="Alice Accountant registered as" subtitle="ACCOUNTANT" />
      </div>
    </Phone>
  );
}

// PARENT PHONE
function ParentPhone() {
  const actions = [
    { icon: BarChart3, label: "Results" },
    { icon: Folder, label: "Fees" },
    { icon: CalendarDays, label: "Attendance" },
    { icon: MessageCircle, label: "Messages" }
  ];

  return (
    <Phone variant="parent">
      <div style={{
        padding: "10px 12px", marginBottom: 8,
        borderRadius: 12, color: "#fff",
        background: "linear-gradient(135deg,#4f46e5,#6366f1)",
        position: "relative", overflow: "hidden"
      }}>
        <span style={{ fontSize: 9.5, opacity: .9 }}>Good morning 👋</span>
        <strong style={{ display: "block", fontSize: 15, margin: "2px 0", fontWeight: 800 }}>
          Mrs. Abubakar
        </strong>
        <span style={{
          fontSize: 8.5, background: "rgba(255,255,255,0.2)",
          padding: "2px 6px", borderRadius: 8, display: "inline-block", fontWeight: 600
        }}>2 children enrolled</span>
      </div>

      <SectionTitle title="My Children" action="+ Add Another Child" />

      <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
        <span style={{
          background: C.blue, color: "#fff", padding: "4px 10px",
          borderRadius: 12, fontSize: 9.5, fontWeight: 700
        }}>👦 John</span>
        <span style={{
          ...card, padding: "4px 10px", fontSize: 9.5, fontWeight: 600, color: C.muted
        }}>👧 Jane</span>
      </div>

      <div style={{
        ...card, padding: 8, display: "flex",
        alignItems: "center", gap: 8, marginBottom: 8
      }}>
        <div style={{
          width: 28, height: 28, display: "grid",
          placeItems: "center", borderRadius: "50%",
          background: "#eff6ff", color: C.blue,
          fontSize: 10, fontWeight: 800
        }}>JD</div>
        <div style={{ flex: 1 }}>
          <strong style={{ display: "block", fontSize: 10.5, color: C.dark }}>John Doe</strong>
          <span style={{ fontSize: 8.5, color: C.muted }}>
            No class • OS/STU/2026/001
          </span>
        </div>
        <ChevronRight size={14} color="#94a3b8" />
      </div>

      <div style={{
        ...card, display: "grid", gridTemplateColumns: "repeat(3,1fr)",
        padding: "10px 4px", marginBottom: 8, textAlign: "center"
      }}>
        {["Attendance", "Average", "Fees paid"].map((item, i) => (
          <div key={item} style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 4
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              border: `3px solid ${i === 2 ? "#10b981" : i === 0 ? "#2563eb" : "#e2e8f0"}`
            }} />
            <span style={{ fontSize: 8.5, color: C.muted, fontWeight: 500 }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <strong style={{ fontSize: 10.5, color: C.dark }}>Quick Actions</strong>
        <span style={{ fontSize: 8.5, color: C.muted }}>Tap to open</span>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10
      }}>
        {actions.map(({ icon: Icon, label }) => (
          <div key={label} style={{
            ...card, height: 42, display: "flex",
            flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: 2, color: C.blue
          }}>
            <Icon size={15} />
            <span style={{ fontSize: 8.5, color: "#334155", fontWeight: 600 }}>{label}</span>
          </div>
        ))}
      </div>
    </Phone>
  );
}

// TEACHER PHONE
function TeacherPhone() {
  const actions = [
    { icon: GraduationCap, label: "My Classes" },
    { icon: BookOpen, label: "My Subjects" },
    { icon: Users, label: "Students" },
    { icon: BarChart3, label: "Results" }
  ];

  return (
    <Phone variant="teacher">
      <div style={{ marginBottom: 10 }}>
        <strong style={{ fontSize: 11.5, color: C.dark, fontWeight: 800 }}>
          Welcome back, Mr. Adeyemi 👋
        </strong>
        <p style={{
          fontSize: 8.5, lineHeight: 1.3,
          color: C.muted, margin: "2px 0 0"
        }}>
          Here is an overview of your classes and today's activities.
        </p>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 6, marginBottom: 10
      }}>
        <Stat icon={School} label="Classes" value="1" color="#0d9488" bg="#ccfbf1" />
        <Stat icon={Folder} label="Subjects" value="2" color="#7c3aed" bg="#f3e8ff" />
        <Stat icon={Users} label="Form Classes" value="1" color="#059669" bg="#d1fae5" />
        <Stat icon={ClipboardList} label="Attendance Today" value="0/1" color="#d97706" bg="#fef3c7" />
      </div>

      <div style={{ ...card, padding: 10, marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <strong style={{ fontSize: 9.5, color: C.dark }}>Today's Schedule (Wednesday)</strong>
          <span style={{ fontSize: 8.5, color: C.blue, fontWeight: 600 }}>View full timetable</span>
        </div>
        <p style={{ fontSize: 8.5, color: C.muted, margin: 0 }}>
          No lessons scheduled for today.
        </p>
      </div>

      <SectionTitle title="Quick Actions" />

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6
      }}>
        {actions.map(({ icon: Icon, label }) => (
          <div key={label} style={{
            ...card, height: 42, display: "flex",
            flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: 2, color: C.blue
          }}>
            <Icon size={15} />
            <span style={{ fontSize: 8.5, color: "#334155", fontWeight: 600 }}>{label}</span>
          </div>
        ))}
      </div>
    </Phone>
  );
}

function Feature({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 14
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: "#eff6ff",
        display: "grid", placeItems: "center", color: "#2563eb", flexShrink: 0
      }}>
        <Icon size={22} />
      </div>
      <div>
        <h3 style={{
          fontSize: 16, fontWeight: 700,
          margin: "0 0 6px", color: C.dark
        }}>{title}</h3>
        <p style={{
          margin: 0, fontSize: 13, lineHeight: 1.5,
          color: C.muted
        }}>{description}</p>
      </div>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section 
      id="workflow"
      style={{
        width: "100%", 
        background: C.background,
        color: C.dark, 
        overflow: "hidden",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        paddingTop: "100px",
        marginTop: "40px",
        borderTop: "1px solid rgba(226, 232, 240, 0.8)",
      }}
    >
      <div style={{
        maxWidth: 1200, 
        margin: "0 auto", 
        padding: "0 24px",
        display: "flex", 
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          textAlign: "center", 
          maxWidth: 640,
          margin: "0 auto 50px"
        }}>
          <span style={{
            color: "#2563eb", 
            fontSize: 11,
            fontWeight: 800, 
            letterSpacing: 1.2
          }}>
            INTEGRATED WORKFLOW
          </span>

          <h1 style={{
            margin: "12px 0 16px", 
            fontSize: "clamp(32px, 4vw, 42px)",
            fontWeight: 800, 
            letterSpacing: -1, 
            color: C.dark
          }}>
            Everything in One Place
          </h1>

          <p style={{
            margin: "0 auto", 
            maxWidth: 520,
            fontSize: 16, 
            lineHeight: 1.6, 
            color: C.muted
          }}>
            A cohesive workspace that harmonizes classroom records, bursary accounts, and administrative oversight without switching tools.
          </p>
        </div>

        {/* THREE PHONE MOCKUPS CONTAINER */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
          width: "100%",
          marginBottom: 60
        }}>
          <AdminPhone />
          <ParentPhone />
          <TeacherPhone />
        </div>
      </div>

      {/* BOTTOM FEATURES CONTAINER WITH OFF-WHITE BACKGROUND */}
      <div style={{
        width: "100%",
        background: C.offWhite,
        borderTop: "1px solid #e2e8f0",
        padding: "50px 24px"
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32
        }}>
          <Feature
            icon={Folder}
            title="Manage Students"
            description="Keep student information organized, secure, and easily accessible for schools and parents, anytime, anywhere."
          />

          <Feature
            icon={TrendingUp}
            title="Track Performance"
            description="Stay on top of attendance, results, and school activities with ease—keeping schools and parents informed every step of the way."
          />

          <Feature
            icon={BellRing}
            title="Stay Connected"
            description="Keep parents, teachers, and school administrators connected with instant updates and alerts."
          />
        </div>
      </div>
    </section>
  );
}