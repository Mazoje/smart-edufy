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
    background: `
      radial-gradient(
        ellipse at 78% 35%,
        rgba(224, 195, 255, 0.38) 0%,
        transparent 42%
      ),
      linear-gradient(
        135deg,
        #FCF7FF 0%,
        #F7E9FF 48%,
        #FCF5FF 100%
      )
    `,
    paddingTop: '24px',
    paddingBottom: '0px',
    overflow: 'hidden',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },

  container: {
    maxWidth: '1240px',
    width: '100%',
    margin: '0 auto',
    padding: '0 20px',
  },

  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
    minHeight: '480px',
    marginBottom: '0px',
  },

  leftCol: {
    flex: '1 1 48%',
    maxWidth: '510px',
  },

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(239, 246, 255, 0.75)',
    border: '1px solid rgba(191, 219, 254, 0.8)',
    padding: '5px 11px',
    borderRadius: '50px',
    marginBottom: '22px',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },

  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#2563EB',
  },

  badgeText: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#2563EB',
  },

  title: {
    fontSize: 'clamp(27px, 3.1vw, 34px)',
    fontWeight: 800,
    letterSpacing: '-1.1px',
    color: '#10172D',
    lineHeight: 1.15,
    marginBottom: '16px',
  },

  subtitle: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.55,
    marginBottom: '24px',
    maxWidth: '480px',
  },

  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '25px',
    flexWrap: 'wrap',
  },

  primaryBtn: {
    background: 'linear-gradient(135deg, #2563EB, #315FEA)',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.25)',
    padding: '11px 21px',
    borderRadius: '17px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 5px 14px rgba(37,99,235,0.20)',
    transition: 'all 0.25s ease',
  },

  secondaryBtn: {
    background: 'rgba(255,255,255,0.82)',
    color: '#172033',
    border: '1px solid rgba(203,213,225,0.9)',
    padding: '11px 21px',
    borderRadius: '17px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },

  checklistRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    flexWrap: 'wrap',
  },

  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '10px',
    fontWeight: 500,
    color: '#64748B',
  },

  rightCol: {
    flex: '1 1 45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '0',
  },

  mockupWrapper: {
    position: 'relative',
    width: '410px',
    maxWidth: '100%',
    height: '455px',
  },

  backPhone: {
    position: 'absolute',
    left: '12px',
    top: '5px',
    width: '205px',
    height: '425px',
    background: 'linear-gradient(145deg, #202A40, #0B1224)',
    borderRadius: '38px',
    padding: '7px',
    border: '2px solid rgba(255,255,255,0.18)',
    boxShadow: '0 22px 45px rgba(15,23,42,0.25)',
    transform: 'rotate(-4deg)',
    zIndex: 1,
  },

  frontPhone: {
    position: 'absolute',
    right: '12px',
    top: '0px',
    width: '215px',
    height: '445px',
    background: 'linear-gradient(145deg, #26334C, #080F20)',
    borderRadius: '40px',
    padding: '7px',
    border: '2px solid rgba(255,255,255,0.22)',
    boxShadow: `
      0 25px 55px rgba(15,23,42,0.30),
      0 5px 15px rgba(15,23,42,0.12)
    `,
    zIndex: 2,
  },

  phoneScreen: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F8FF 100%)',
    borderRadius: '32px',
    overflow: 'hidden',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  phoneStatusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '10px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '8px',
  },

  statusIconsRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '9px',
  },

  miniOnlinePill: {
    background: '#DCFCE7',
    color: '#166534',
    padding: '1px 5px',
    borderRadius: '8px',
    fontSize: '8px',
    fontWeight: 600,
  },

  notifBadge: {
    background: '#E2E8F0',
    color: '#0F172A',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '8px',
    fontWeight: 700,
  },

  notifBadgeRed: {
    background: '#EF4444',
    color: '#FFFFFF',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '8px',
    fontWeight: 700,
  },

  backHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },

  brandTitle: {
    fontSize: '12px',
    fontWeight: 800,
    color: '#0F172A',
  },

  adminTag: {
    background: '#EFF6FF',
    color: '#2563EB',
    fontSize: '8px',
    fontWeight: 700,
    padding: '2px 5px',
    borderRadius: '4px',
  },

  screenSectionTitle: {
    fontSize: '8px',
    fontWeight: 700,
    color: '#64748B',
    marginBottom: '2px',
  },

  screenSubSection: {
    fontSize: '8px',
    fontWeight: 700,
    color: '#2563EB',
    marginBottom: '6px',
  },

  backGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '6px',
    marginBottom: '10px',
  },

  gridBox: {
    background: 'rgba(255,255,255,0.88)',
    border: '1px solid rgba(226,232,240,0.75)',
    borderRadius: '10px',
    padding: '8px 6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    boxShadow: '0 2px 8px rgba(15,23,42,0.025)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },

  boxIcon: {
    fontSize: '14px',
  },

  boxLabel: {
    fontSize: '8px',
    fontWeight: 600,
    color: '#1E293B',
    textAlign: 'center',
  },

  backAdminFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: '#F8FAFC',
    padding: '6px',
    borderRadius: '8px',
    marginBottom: '8px',
  },

  avatarCircle: {
    width: '22px',
    height: '22px',
    background: '#2563EB',
    color: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    fontWeight: 700,
  },

  adminName: {
    fontSize: '9px',
    fontWeight: 700,
    color: '#0F172A',
  },

  adminEmail: {
    fontSize: '8px',
    color: '#64748B',
  },

  browserBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#E2E8F0',
    padding: '4px 8px',
    borderRadius: '10px',
    fontSize: '10px',
    color: '#334155',
    marginTop: 'auto',
  },

  backArrow: {
    fontSize: '12px',
    fontWeight: 700,
  },

  menuIcon: {
    fontSize: '10px',
  },

  domainUrl: {
    fontSize: '9px',
    fontWeight: 600,
    color: '#0F172A',
  },

  reloadIcon: {
    fontSize: '10px',
  },

  tabsIcon: {
    fontSize: '10px',
  },

  profileHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '10px',
  },

  schoolLogo: {
    width: '28px',
    height: '28px',
    background: '#EFF6FF',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  },

  greetingText: {
    fontSize: '11px',
    fontWeight: 800,
    color: '#0F172A',
  },

  schoolInfoText: {
    fontSize: '8px',
    color: '#64748B',
    lineHeight: '1.3',
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '6px',
    marginBottom: '10px',
  },

  statCard: {
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid rgba(255,255,255,0.95)',
    borderRadius: '12px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(15,23,42,0.08)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
  },

  statLabelText: {
    fontSize: '8px',
    color: '#64748B',
    fontWeight: 500,
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
    fontSize: '10px',
    color: '#FFFFFF',
  },

  activityBox: {
    background: 'rgba(255,255,255,0.82)',
    border: '1px solid rgba(255,255,255,0.9)',
    borderRadius: '12px',
    padding: '8px',
    flex: 1,
    boxShadow: '0 3px 12px rgba(15,23,42,0.04)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
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
    color: '#0F172A',
  },

  seeAllLink: {
    fontSize: '8px',
    fontWeight: 600,
    color: '#2563EB',
    cursor: 'pointer',
  },

  activityRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 0',
    borderTop: '1px solid #F1F5F9',
    fontSize: '8px',
    color: '#334155',
  },

  activityAvatar: {
    width: '18px',
    height: '18px',
    background: '#DCFCE7',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9px',
    flexShrink: 0,
  },

  activityAvatarPurple: {
    width: '18px',
    height: '18px',
    background: '#F3E8FF',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9px',
    flexShrink: 0,
  },

  activityText: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '8px',
  },

  chevronRight: {
    fontSize: '10px',
    color: '#94A3B8',
  },

  mobileNavBottom: {
    position: 'absolute',
    bottom: '26px',
    left: '8px',
    right: '8px',
    height: '32px',
    background: '#FFFFFF',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid #E2E8F0',
    padding: '0 4px',
    zIndex: 3,
  },

  mobileNavItemActive: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '7px',
    fontWeight: 700,
    color: '#2563EB',
    gap: '1px',
  },

  mobileNavItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '7px',
    fontWeight: 500,
    color: '#64748B',
    gap: '1px',
  },

  floatingAiFab: {
    position: 'absolute',
    right: '10px',
    bottom: '64px',
    width: '24px',
    height: '24px',
    background: '#2563EB',
    color: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    boxShadow: '0 3px 8px rgba(37,99,235,0.4)',
    zIndex: 4,
  },

  bottomFeaturesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: '25px',
    width: '100%',
    maxWidth: 'none',
    margin: '0 auto',
    background: 'rgba(255,255,255,0.48)',
    borderRadius: '0px',
    padding: '30px max(20px, calc((100% - 1180px) / 2))',
    boxShadow: '0 -5px 30px rgba(255,255,255,0.35)',
    borderTop: '1px solid rgba(255,255,255,0.75)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  },

  bottomFeatureCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  bottomIconSquare: {
    width: '34px',
    height: '34px',
    background: 'rgba(239,246,255,0.8)',
    border: '1px solid rgba(191,219,254,0.5)',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  featureTitleText: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#172033',
    margin: 0,
  },

  featureDescText: {
    fontSize: '10px',
    color: '#64748B',
    lineHeight: 1.4,
    margin: 0,
    marginTop: '3px',
  },
};