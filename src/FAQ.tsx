import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is SmartEdufy cloud-based?",
    answer: "Yes, SmartEdufy is 100% cloud-based. You can access your school's dashboard from any internet-connected device without installing software or managing local servers."
  },
  {
    question: "Can I use SmartEdufy on mobile?",
    answer: "Absolutely! SmartEdufy is fully optimized for mobile devices, tablets, and desktop computers with dedicated mobile interfaces for Admins, Teachers, and Parents."
  },
  {
    question: "How secure is my school's data?",
    answer: "We use bank-grade SSL encryption for all data in transit and at rest. Automated daily backups ensure your student, financial, and academic records remain safe and recoverable."
  },
  {
    question: "Can we import existing school data?",
    answer: "Yes! You can easily bulk import student profiles, teacher lists, subjects, and past records using CSV or Excel spreadsheets through our seamless migration tool."
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is transparent, predictable, and charged on a per-term basis according to your student enrollment. There are zero hidden setup fees or long-term contracts."
  },
  {
    question: "When will AI features become available?",
    answer: "Core AI capabilities—such as automated result insights, personalized learning path recommendations, and smart report card summaries—are rolling out in upcoming term updates."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Frequently Asked Questions</h2>
          <p style={styles.subtitle}>
            Everything you need to know about getting started with SmartEdufy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={styles.faqList}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{
                  ...styles.faqCard,
                  ...(isOpen ? styles.faqCardOpen : {})
                }}
              >
                <button 
                  onClick={() => toggleFAQ(index)} 
                  style={styles.faqHeaderBtn}
                  aria-expanded={isOpen}
                >
                  <span style={styles.questionText}>{item.question}</span>
                  <div style={{
                    ...styles.chevronWrapper,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <ChevronDown size={18} color="#475569" strokeWidth={2.2} />
                  </div>
                </button>

                {isOpen && (
                  <div style={styles.answerWrapper}>
                    <p style={styles.answerText}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    width: '100%',
    backgroundColor: '#F3E8FF', // Matching soft purple tint backdrop
    padding: '90px 24px 110px 24px',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  title: {
    fontSize: 'clamp(28px, 3.5vw, 38px)',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-1px',
    marginBottom: '12px',
    margin: 0,
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748B',
    lineHeight: 1.6,
    margin: '12px 0 0 0',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '18px',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    // Multi-layered soft drop shadow under the cards matching image 2
    boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
    overflow: 'hidden',
    transition: 'all 0.25s ease',
  },
  faqCardOpen: {
    boxShadow: '0 15px 30px -5px rgba(37, 99, 235, 0.12), 0 6px 12px -2px rgba(37, 99, 235, 0.06)',
    border: '1px solid #DBEAFE',
  },
  faqHeaderBtn: {
    width: '100%',
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    outline: 'none',
  },
  questionText: {
    fontSize: '15.5px',
    fontWeight: 700,
    color: '#0F172A',
    letterSpacing: '-0.2px',
  },
  chevronWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    flexShrink: 0,
    marginLeft: '16px',
  },
  answerWrapper: {
    padding: '0 24px 22px 24px',
    borderTop: '1px solid #F1F5F9',
  },
  answerText: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#475569',
    margin: '14px 0 0 0',
  },
};