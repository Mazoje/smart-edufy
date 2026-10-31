import React from 'react';

export default function Hero() {
  return (
    <section style={styles.heroSection}>
      <div style={styles.container}>
        {/* Top Hero Layout (Left text + Right Mockups) */}
        <div style={styles.topRow}>
          {/* Left Hero Text Column */}
          <div style={styles.leftCol}>
            {/* Tag Badge */}
            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              <span style={styles.badgeText}>Built for African Schools</span>
            </div>

            {/* Main Title */}
            <h1 style={styles.title}>
              The AI–Powered School Management System Built for African Schools
            </h1>

            {/* Subtitle */}
            <p style={styles.subtitle}>
              Manage students, attendance, fees, results, staff and communication — all in one simple platform.
            </p>

            {/* Action Buttons */}
            <div style={styles.buttonGroup}>
              <button style={styles.primaryBtn}>Sign up for free</button>
              <button style={styles.secondaryBtn}>Learn More</button>
            </div>

            {/* Trust Badges Checkmarks */}
            <div style={styles.checklistRow}>
              <div style={styles.checkItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Zero Setup Hassle</span>
              </div>

              <div style={styles.checkItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Free 14–Day Trial</span>
              </div>

              <div style={styles.checkItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Offline Ready</span>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup Display */}
          <div style={styles.rightCol}>
            <div style={styles.mockupWrapper}>
              {/* Back Overlapping Phone (Tilted) */}
              <div style={styles.backPhone}>
                <div style={styles.phoneScreen}>
                  <div style={styles.phoneStatusBar}>
                    <span>10:46</span>
                    <div style={styles.statusIconsRight}>
                      <span style={styles.miniOnlinePill}>🟢 Online</span>
                      <span style={styles.notifBadge}>2</span>
                    </div>
                  </div>
                  
                  <div style={styles.backHeader}>
                    <span style={styles.brandTitle}>SmartEdufy</span>
                    <span style={styles.adminTag}>ADMIN</span>
                  </div>

                  <div style={styles.screenSectionTitle}>DASHBOARD</div>
                  <div style={styles.screenSubSection}>ACADEMIC</div>

                  <div style={styles.backGrid}>
                    <div style={styles.gridBox}>
                      <span style={styles.boxIcon}>🎓</span>
                      <span style={styles.boxLabel}>Classes</span>
                    </div>
                    <div style={styles.gridBox}>
                      <span style={styles.boxIcon}>👥</span>
                      <span style={styles.boxLabel}>Students</span>
                    </div>
                    <div style={styles.gridBox}>
                      <span style={styles.boxIcon}>📖</span>
                      <span style={styles.boxLabel}>Subjects</span>
                    </div>
                    <div style={styles.gridBox}>
                      <span style={styles.boxIcon}>📄</span>
                      <span style={styles.boxLabel}>Broadsheet</span>
                    </div>
                    <div style={styles.gridBox}>
                      <span style={styles.boxIcon}>💻</span>
                      <span style={styles.boxLabel}>CBT</span>
                    </div>
                    <div style={styles.gridBox}>
                      <span style={styles.boxIcon}>❓</span>
                      <span style={styles.boxLabel}>Question Bank</span>
                    </div>
                  </div>

                  <div style={styles.backAdminFooter}>
                    <div style={styles.avatarCircle}>D</div>
                    <div>
                      <div style={styles.adminName}>Demo Admin</div>
                      <div style={styles.adminEmail}>admin@demo.school</div>
                    </div>
                  </div>

                  <div style={styles.browserBar}>
                    <span style={styles.backArrow}>‹</span>
                    <span style={styles.menuIcon}>≡</span>
                    <span style={styles.domainUrl}>smartedufy.ng</span>
                    <span style={styles.reloadIcon}>↻</span>
                  </div>
                </div>
              </div>

              {/* Front Main Phone */}
              <div style={styles.frontPhone}>
                <div style={styles.phoneScreen}>
                  <div style={styles.phoneStatusBar}>
                    <span>10:18</span>
                    <div style={styles.statusIconsRight}>
                      <span style={styles.miniOnlinePill}>🟢 Online</span>
                      <span style={styles.notifBadgeRed}>2</span>
                      <span>🌙</span>
                    </div>
                  </div>

                  {/* Profile Header */}
                  <div style={styles.profileHeader}>
                    <div style={styles.schoolLogo}>🏫</div>
                    <div>
                      <div style={styles.greetingText}>
                        Good morning, Demo Admin 👋
                      </div>
                      <div style={styles.schoolInfoText}>
                        ADMIN • Demo Test School — Wednesday, October 28, 2026
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Metrics Grid */}
                  <div style={styles.statsGrid}>
                    <div style={styles.statCard}>
                      <div>
                        <div style={styles.statLabelText}>Total Students</div>
                        <div style={styles.statValueText}>10</div>
                      </div>
                      <div style={{ ...styles.statIconBadge, backgroundColor: '#3B82F6' }}>👥</div>
                    </div>

                    <div style={styles.statCard}>
                      <div>
                        <div style={styles.statLabelText}>Total Teachers</div>
                        <div style={styles.statValueText}>2</div>
                      </div>
                      <div style={{ ...styles.statIconBadge, backgroundColor: '#4F46E5' }}>🎓</div>
                    </div>

                    <div style={styles.statCard}>
                      <div>
                        <div style={styles.statLabelText}>Classes</div>
                        <div style={styles.statValueText}>3</div>
                      </div>
                      <div style={{ ...styles.statIconBadge, backgroundColor: '#6366F1' }}>📘</div>
                    </div>

                    <div style={styles.statCard}>
                      <div>
                        <div style={styles.statLabelText}>Avg Performance</div>
                        <div style={styles.statValueText}>—</div>
                      </div>
                      <div style={{ ...styles.statIconBadge, backgroundColor: '#2563EB' }}>📊</div>
                    </div>
                  </div>

                  {/* Recent Activity List */}
                  <div style={styles.activityBox}>
                    <div style={styles.activityHeader}>
                      <span style={styles.activityHeadingText}>Recent Activity</span>
                      <span style={styles.seeAllLink}>See All →</span>
                    </div>

                    <div style={styles.activityRow}>
                      <div style={styles.activityAvatar}>👤</div>
                      <div style={styles.activityText}>demo teacher registered as TEACHER</div>
                      <span style={styles.chevronRight}>›</span>
                    </div>

                    <div style={styles.activityRow}>
                      <div style={styles.activityAvatarPurple}>💼</div>
                      <div style={styles.activityText}>Alice Accountant payroll processed (2026-10)</div>
                      <span style={styles.chevronRight}>›</span>
                    </div>

                    <div style={styles.activityRow}>
                      <div style={styles.activityAvatar}>👤</div>
                      <div style={styles.activityText}>Alice Accountant registered as ACCOUNTANT</div>
                      <span style={styles.chevronRight}>›</span>
                    </div>
                  </div>

                  {/* Bottom App Nav */}
                  <div style={styles.mobileNavBottom}>
                    <div style={styles.mobileNavItemActive}>
                      <span>🏠</span>
                      <span>Home</span>
                    </div>
                    <div style={styles.mobileNavItem}>
                      <span>≡</span>
                      <span>Menu</span>
                    </div>
                    <div style={styles.mobileNavItem}>
                      <span>👤</span>
                      <span>Profile</span>
                    </div>
                    <div style={styles.mobileNavItem}>
                      <span>🚪</span>
                      <span>Logout</span>
                    </div>
                    <div style={styles.floatingAiFab}>✨</div>
                  </div>

                  {/* Bottom Browser Control Bar */}
                  <div style={styles.browserBar}>
                    <span style={styles.backArrow}>‹</span>
                    <span style={styles.menuIcon}>≡</span>
                    <span style={styles.domainUrl}>smartedufy.ng</span>
                    <span style={styles.reloadIcon}>↻</span>
                    <span style={styles.tabsIcon}>❐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Feature Cards */}
        <div style={styles.bottomFeaturesContainer}>
          <div style={styles.bottomFeatureCard}>
            <div style={styles.bottomIconSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>Cloud–Based</h3>
              <p style={styles.featureDescText}>Always accessible, zero server hassle.</p>
            </div>
          </div>

          <div style={styles.bottomFeatureCard}>
            <div style={styles.bottomIconSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>Secure</h3>
              <p style={styles.featureDescText}>Bank–grade encryption for student records.</p>
            </div>
          </div>

          <div style={styles.bottomFeatureCard}>
            <div style={styles.bottomIconSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>Mobile–Friendly</h3>
              <p style={styles.featureDescText}>Optimized for phones and low bandwidth.</p>
            </div>
          </div>

          <div style={styles.bottomFeatureCard}>
            <div style={styles.bottomIconSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M12 12L2.5 7.5"></path>
                <path d="M12 12v10"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>AI–Ready</h3>
              <p style={styles.featureDescText}>Built to integrate smart insights smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  heroSection: {
    width: '100%',
    backgroundColor: '#FAF5FF',
    paddingTop: '32px',
    paddingBottom: '40px',
    overflow: 'hidden',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px',
    flexWrap: 'wrap',
    marginBottom: '64px',
  },
  leftCol: {
    flex: '1 1 540px',
    maxWidth: '620px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#EFF6FF',
    border: '1px solid #DBEAFE',
    padding: '6px 14px',
    borderRadius: '50px',
    marginBottom: '28px',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#2563EB',
    borderRadius: '50%',
  },
  badgeText: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#2563EB',
  },
  title: {
    fontSize: 'clamp(38px, 4.2vw, 56px)',
    fontWeight: 800,
    letterSpacing: '-1.5px',
    color: '#0F172A',
    lineHeight: 1.15,
    marginBottom: '24px',
  },
  subtitle: {
    fontSize: '17px',
    color: '#64748B',
    lineHeight: 1.6,
    marginBottom: '36px',
    maxWidth: '540px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    marginBottom: '40px',
  },
  primaryBtn: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)',
  },
  secondaryBtn: {
    backgroundColor: '#FFFFFF',
    color: '#1E293B',
    border: '1px solid #CBD5E1',
    padding: '14px 28px',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  checklistRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#475569',
  },
  rightCol: {
    flex: '1 1 500px',
    display: 'flex',
    justifyContent: 'center',
  },
  mockupWrapper: {
    position: 'relative',
    width: '500px',
    height: '520px',
  },
  backPhone: {
    position: 'absolute',
    left: '20px',
    top: '10px',
    width: '260px',
    height: '490px',
    backgroundColor: '#0F172A',
    borderRadius: '40px',
    padding: '10px',
    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
    transform: 'rotate(-5deg)',
    zIndex: 1,
  },
  frontPhone: {
    position: 'absolute',
    right: '20px',
    top: '0px',
    width: '270px',
    height: '510px',
    backgroundColor: '#0F172A',
    borderRadius: '42px',
    padding: '10px',
    boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.4)',
    zIndex: 2,
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: '32px',
    overflow: 'hidden',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  phoneStatusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '10px',
    fontWeight: 600,
    color: '#334155',
    marginBottom: '8px',
  },
  statusIconsRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  miniOnlinePill: {
    fontSize: '8px',
    backgroundColor: '#DCFCE7',
    color: '#166534',
    padding: '2px 6px',
    borderRadius: '10px',
  },
  notifBadge: {
    backgroundColor: '#EF4444',
    color: '#FFF',
    fontSize: '8px',
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifBadgeRed: {
    backgroundColor: '#EF4444',
    color: '#FFF',
    fontSize: '8px',
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  brandTitle: {
    fontSize: '11px',
    fontWeight: 800,
    color: '#2563EB',
  },
  adminTag: {
    fontSize: '8px',
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
    padding: '2px 4px',
    borderRadius: '4px',
    fontWeight: 700,
  },
  screenSectionTitle: {
    fontSize: '8px',
    fontWeight: 700,
    color: '#94A3B8',
    marginBottom: '4px',
  },
  screenSubSection: {
    fontSize: '10px',
    fontWeight: 800,
    color: '#1E293B',
    marginBottom: '8px',
  },
  backGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '6px',
    marginBottom: '10px',
  },
  gridBox: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '8px',
    padding: '8px 6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  boxIcon: {
    fontSize: '12px',
  },
  boxLabel: {
    fontSize: '8px',
    fontWeight: 600,
    color: '#475569',
  },
  backAdminFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#FFFFFF',
    padding: '6px',
    borderRadius: '8px',
    marginTop: 'auto',
    marginBottom: '6px',
  },
  avatarCircle: {
    width: '20px',
    height: '20px',
    backgroundColor: '#2563EB',
    color: '#FFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9px',
    fontWeight: 700,
  },
  adminName: {
    fontSize: '9px',
    fontWeight: 700,
    color: '#1E293B',
  },
  adminEmail: {
    fontSize: '7px',
    color: '#64748B',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px',
  },
  schoolLogo: {
    width: '28px',
    height: '28px',
    backgroundColor: '#EFF6FF',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  },
  greetingText: {
    fontSize: '10px',
    fontWeight: 800,
    color: '#0F172A',
  },
  schoolInfoText: {
    fontSize: '7px',
    color: '#64748B',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '6px',
    marginBottom: '10px',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  },
  statLabelText: {
    fontSize: '7px',
    color: '#64748B',
  },
  statValueText: {
    fontSize: '14px',
    fontWeight: 800,
    color: '#0F172A',
  },
  statIconBadge: {
    width: '22px',
    height: '22px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: '10px',
  },
  activityBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '8px',
    flex: 1,
  },
  activityHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  activityHeadingText: {
    fontSize: '9px',
    fontWeight: 700,
    color: '#1E293B',
  },
  seeAllLink: {
    fontSize: '8px',
    color: '#2563EB',
    fontWeight: 600,
  },
  activityRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 0',
    borderBottom: '1px solid #F1F5F9',
  },
  activityAvatar: {
    fontSize: '10px',
    backgroundColor: '#F1F5F9',
    padding: '3px',
    borderRadius: '4px',
  },
  activityAvatarPurple: {
    fontSize: '10px',
    backgroundColor: '#F3E8FF',
    padding: '3px',
    borderRadius: '4px',
  },
  activityText: {
    fontSize: '7.5px',
    color: '#475569',
    flex: 1,
  },
  chevronRight: {
    fontSize: '8px',
    color: '#94A3B8',
  },
  mobileNavBottom: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '4px',
    marginTop: 'auto',
    marginBottom: '4px',
    boxShadow: '0 -2px 6px rgba(0,0,0,0.03)',
    position: 'relative',
  },
  mobileNavItemActive: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '7px',
    color: '#2563EB',
    fontWeight: 700,
  },
  mobileNavItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '7px',
    color: '#64748B',
  },
  floatingAiFab: {
    position: 'absolute',
    right: '8px',
    top: '-12px',
    width: '24px',
    height: '24px',
    backgroundColor: '#2563EB',
    borderRadius: '50%',
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    boxShadow: '0 4px 8px rgba(37,99,235,0.4)',
  },
  browserBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E2E8F0',
    borderRadius: '12px',
    padding: '4px 8px',
    fontSize: '8px',
    color: '#475569',
  },
  backArrow: { fontSize: '10px', fontWeight: 700 },
  menuIcon: { fontSize: '10px' },
  domainUrl: { fontSize: '8px', fontWeight: 600, color: '#1E293B' },
  reloadIcon: { fontSize: '8px' },
  tabsIcon: { fontSize: '8px' },

  /* Bottom 4 Feature Cards Row */
  bottomFeaturesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '16px',
  },
  bottomFeatureCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  bottomIconSquare: {
    width: '40px',
    height: '40px',
    backgroundColor: '#EFF6FF',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureTitleText: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '2px',
    margin: 0,
  },
  featureDescText: {
    fontSize: '12px',
    color: '#64748B',
    lineHeight: 1.4,
    margin: 0,
    marginTop: '4px',
  },
};