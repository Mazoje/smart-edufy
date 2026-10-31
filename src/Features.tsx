import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featuresData: FeatureCardProps[] = [
  {
    title: 'Student Management',
    description: 'Complete digital student profiles, enrollment, and biographical records.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 11h6" />
      </svg>
    ),
  },
  {
    title: 'Attendance',
    description: 'Fast daily roll call, automated absence alerts, and term attendance reports.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    title: 'Fees Management',
    description: 'Transparent tuition tracking, instant digital receipts, and payment reminders.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Results',
    description: 'Automated continuous assessment scoring, broadsheets, and printable report cards.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Timetable',
    description: 'Conflict-free scheduling for classes, teachers, and exam periods.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Parent Communication',
    description: 'Direct SMS and app notifications for updates, alerts, and report releases.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Staff Management',
    description: 'Teacher assignments, payroll tracking, and performance records in one place.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Reports',
    description: 'Comprehensive school analytics and exportable ministry compliance reports.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Everything Your School Needs</h2>
          <p style={styles.subtitle}>
            Simple, powerful tools crafted specifically for the daily administration of primary and secondary institutions.
          </p>
        </div>

        {/* 4x2 Cards Grid */}
        <div style={styles.grid}>
          {featuresData.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconBox}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    width: '100%',
    backgroundColor: '#FAF5FF', // Consistent light ambient background
    padding: '80px 0',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
  },
  header: {
    textAlign: 'center',
    maxWidth: '720px',
    margin: '0 auto 56px auto',
  },
  title: {
    fontSize: '36px',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.8px',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#64748B',
    lineHeight: 1.6,
    fontWeight: 400,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(10px)',
    border: '1px solid #E2E8F0',
    borderRadius: '20px',
    padding: '28px 24px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  iconBox: {
    width: '38px',
    height: '38px',
    backgroundColor: '#EFF6FF',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '10px',
    letterSpacing: '-0.2px',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.55,
    margin: 0,
  },
};