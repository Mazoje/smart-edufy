
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featuresData: FeatureCardProps[] = [
  {
    title: 'Student Management',
    description:
      'Complete digital student profiles, enrollment, and biographical records.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 8v6M17 11h6" />
      </svg>
    ),
  },
  {
    title: 'Attendance',
    description:
      'Fast daily roll call, automated absence alerts, and term attendance reports.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="10" cy="8" r="3.5" />
        <path d="M4 20v-2a5 5 0 0 1 9-3" />
        <path d="m16 17 2 2 4-5" />
      </svg>
    ),
  },
  {
    title: 'Fees Management',
    description:
      'Transparent tuition tracking, instant digital receipts, and payment reminders.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h3" />
      </svg>
    ),
  },
  {
    title: 'Results',
    description:
      'Automated continuous assessment scoring, broadsheets, and printable report cards.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m12 2 3 6.5 7 1-5 4.9 1.2 7L12 18l-6.2 3.4 1.2-7-5-4.9 7-1L12 2Z" />
      </svg>
    ),
  },
  {
    title: 'Timetable',
    description:
      'Conflict-free scheduling for classes, teachers, and exam periods.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Parent Communication',
    description:
      'Direct SMS and app notifications for updates, alerts, and report releases.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    title: 'Staff Management',
    description:
      'Teacher assignments, payroll tracking, and performance records in one place.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Reports',
    description:
      'Comprehensive school analytics and exportable ministry compliance reports.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 16v-3M12 16V8M16 16v-5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features-section" style={styles.section}>
      <div style={styles.container}>

        {/* Section Header */}
        <div className="features-header" style={styles.header}>
          <h2 style={styles.title}>
            Everything Your School Needs
          </h2>

          <p style={styles.subtitle}>
            Simple, powerful tools crafted specifically for the daily
            administration of primary and secondary institutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid" style={styles.grid}>
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="feature-card"
              style={styles.card}
            >
              <div style={styles.iconBox}>
                {item.icon}
              </div>

              <h3 style={styles.cardTitle}>
                {item.title}
              </h3>

              <p style={styles.cardDesc}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive and Hover Styles */}
      <style>{`
        

        .feature-card {
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease !important;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.78) !important;
          box-shadow:
            0 8px 18px rgba(15, 23, 42, 0.13),
            0 2px 5px rgba(15, 23, 42, 0.08) !important;
        }

        @media (max-width: 850px) {
          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .features-header {
            margin-bottom: 40px !important;
          }
        }

        @media (max-width: 520px) {
          .features-section {
            padding: 45px 0 !important;
          }

          .features-header {
            margin-bottom: 32px !important;
          }

          .features-header h2 {
            font-size: 24px !important;
          }

          .features-header p {
            font-size: 12px !important;
          }

          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .feature-card {
            min-height: 145px;
          }
        }
      `}</style>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    width: '100%',
    background: `
      linear-gradient(
        180deg,
        #F1F2FF 0%,
        #EAF0FF 100%
      )
    `,
    padding: '62px 0 46px',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },

  container: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 10px',
  },

  header: {
    textAlign: 'center',
    maxWidth: '625px',
    margin: '0 auto 49px auto',
  },

  title: {
    fontSize: '25px',
    fontWeight: 750,
    color: '#101D32',
    letterSpacing: '-0.9px',
    lineHeight: 1.25,
    margin: '0 0 10px 0',
  },

  subtitle: {
    fontSize: '13px',
    color: '#64718A',
    lineHeight: 1.55,
    fontWeight: 400,
    margin: 0,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '19px',
    width: '100%',
  },

  card: {
    minWidth: 0,
    minHeight: '163px',
    background: 'rgba(237, 243, 255, 0.58)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    border: '1px solid rgba(203, 213, 225, 0.65)',
    borderRadius: '24px',
    padding: '20px 19px',
    boxShadow: `
      0 3px 5px rgba(15, 23, 42, 0.20),
      0 1px 2px rgba(15, 23, 42, 0.12),
      inset 0 1px 2px rgba(255, 255, 255, 0.75)
    `,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  iconBox: {
    width: '30px',
    height: '30px',
    background: 'rgba(255, 255, 255, 0.20)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    flexShrink: 0,
  },

  cardTitle: {
    fontSize: '13px',
    fontWeight: 650,
    color: '#142238',
    margin: '0 0 8px 0',
    letterSpacing: '-0.15px',
    lineHeight: 1.3,
  },

  cardDesc: {
    fontSize: '11.5px',
    color: '#64718A',
    lineHeight: 1.45,
    fontWeight: 400,
    margin: 0,
  },
};
