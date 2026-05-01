import React from 'react';
import styles from './WhyChooseMe.module.css';

const reasons = [
  {
    id: 1,
    label: 'Email-only focus',
    body: "I don't split my attention between logos, ads, and decks. Email design is all I do. That depth shows in the work.",
    icon: 'https://cdn.lordicon.com/weqkkuwt.json',
  },
  {
    id: 2,
    label: 'Platform-native',
    body: 'I work directly inside Klaviyo and Mailchimp — not just in Figma. That means your designs go live faster, with no back-and-forth.',
    icon: 'https://cdn.lordicon.com/warimioc.json',
  },
  {
    id: 3,
    label: 'Dark mode ready',
    body: 'Every template I build is optimised for dark mode from day one. No broken layouts, no invisible text — just a clean experience in every inbox.',
    icon: 'https://cdn.lordicon.com/vvkusrbh.json',
  },
  {
    id: 4,
    label: 'System thinking',
    body: "I don't just design emails. I build systems — so your whole team can move fast without ever going off-brand.",
    icon: 'https://cdn.lordicon.com/shcfcebj.json',
  }
];

const WhyChooseMe = () => {
  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Why clients choose me</span>
          <h2 className={styles.title}>You're not hiring a generalist.<br />You're hiring an email specialist.</h2>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.reasonCard}>
              <div className={styles.iconBox}>
                {/* @ts-ignore */}
                <lord-icon
                  src={reason.icon}
                  trigger="loop"
                  colors="primary:#111827,secondary:#111827"
                  style={{ width: '50px', height: '50px' }}>
                </lord-icon>
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.reasonLabel}>{reason.label}</h3>
                <p className={styles.reasonBody}>{reason.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
