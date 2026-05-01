import React from 'react';
import { Metadata } from 'next';
import styles from './ServicesPage.module.css';

export const metadata: Metadata = {
  title: 'Email Design Services — Templates, Flows & Design Systems | Taha Najam',
  description: 'Hire Taha Najam for professional email template design, Klaviyo flow design, and email design systems. Senior freelance email designer for DTC and ecommerce brands.',
};

const servicesDetailed = [
  {
    id: 1,
    title: 'Email Template Design',
    intro: 'Your emails are a direct extension of your brand. A poorly designed template loses trust in seconds. A great one builds it. I design custom email templates from scratch — every element crafted to match your identity, every layout optimised for engagement.',
    who: 'DTC brands, ecommerce stores, and SaaS companies that want to look premium in every send — without relying on default platform templates.',
    get: [
      'Custom email template designed in Figma',
      'HTML-coded and ready to upload to Klaviyo, Mailchimp, or any major ESP',
      'Fully responsive mobile-first layout',
      'Dark mode version included',
      'Tested in Gmail, Apple Mail, Outlook, iOS, and Android',
      'Source Figma file — yours to keep',
      'Up to 2 revision rounds'
    ],
    timeline: '5–7 business days per template',
    starting: 'Custom quote based on scope',
    cta: 'Get a quote →'
  },
  {
    id: 2,
    title: 'Email Design System',
    intro: "Most brands redesign the same email over and over. There's no consistency, no efficiency, and no system. An email design system fixes all of that. I build a complete modular library in Figma — so any email your team ever needs to create starts with the right foundation.",
    who: 'Growing DTC brands, in-house marketing teams, and agencies that send high volumes of email and need consistency at scale.',
    get: [
      'Full email design system in Figma',
      'Modular component library (50+ components): headers, hero blocks, product grids, CTAs, testimonial blocks, dividers, footers',
      'Brand tokens: type scale, colour palette, spacing system',
      'Master template — ready to build any email in minutes',
      'Documentation: how to use each component, naming conventions, update guidelines',
      'Dark mode variants for all components',
      'Handoff session (30-min walkthrough with your team)'
    ],
    timeline: '2–3 weeks',
    starting: 'Custom quote based on brand complexity',
    cta: 'Book a discovery call →'
  },
  {
    id: 3,
    title: 'Klaviyo Flow & Campaign Design',
    intro: "A welcome flow is the most valuable email sequence your brand sends. It's your first impression, your brand story, and your biggest revenue driver — all at once. I design complete email sequences that feel intentional from the first email to the last.",
    who: 'DTC brands launching or rebuilding their email flows in Klaviyo, and brands running campaigns who want every send to look as good as their ads.',
    get: [
      'Full sequence design: welcome flow, abandon cart, post-purchase, win-back, or browse abandon',
      'Up to 5 emails per flow',
      'Copy structure and content hierarchy recommendations',
      'Each email designed, built, and published directly in Klaviyo',
      'Mobile and dark mode tested',
      'A/B test setup on subject lines or CTAs (on request)'
    ],
    timeline: '7–10 business days per flow',
    starting: 'Custom quote based on number of emails',
    cta: "Let's build your flow →"
  }
];

const processSteps = [
  {
    id: 1,
    label: 'Discovery call',
    body: 'We talk for 30 minutes. I learn about your brand, your goals, your current email setup, and what you need. No pitch — just clarity.',
    icon: 'https://cdn.lordicon.com/qgebwute.json'
  },
  {
    id: 2,
    label: 'Proposal',
    body: 'I send you a scope document with deliverables, timeline, and pricing within 24 hours.',
    icon: 'https://cdn.lordicon.com/xzzsrucp.json'
  },
  {
    id: 3,
    label: 'Design',
    body: 'I start work. You get a first draft to review, with clear feedback instructions. No endless revision loops — just clean, structured feedback rounds.',
    icon: 'https://cdn.lordicon.com/fikcyfpp.json'
  },
  {
    id: 4,
    label: 'Delivery',
    body: "Final files delivered — Figma source, HTML code, and ESP upload, all ready to go. I don't disappear after delivery. You get 14 days of post-launch support.",
    icon: 'https://cdn.lordicon.com/shcfcebj.json'
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Services</span>
          <h1 className={styles.headline}>Expert email design services for brands that take the inbox seriously.</h1>
          <p className={styles.subtext}>
            Every service I offer is built around one outcome — emails that look exceptional, 
            work across every device and client, and are easy for your team to maintain.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className={styles.detailedServices}>
        <div className={styles.container}>
          {servicesDetailed.map((service, index) => (
            <div key={service.id} className={styles.serviceRow}>
              <div className={styles.serviceContent}>
                <h2 className={styles.serviceHeading}>{service.title}</h2>
                <p className={styles.serviceIntro}>{service.intro}</p>
                <div className={styles.whoSection}>
                  <h4 className={styles.miniLabel}>Who this is for:</h4>
                  <p className={styles.whoText}>{service.who}</p>
                </div>
                <div className={styles.ctaSection}>
                  <div className={styles.pricingInfo}>
                    <span><strong>Timeline:</strong> {service.timeline}</span>
                    <span><strong>Starting from:</strong> {service.starting}</span>
                  </div>
                  <button className={styles.serviceCta}>{service.cta}</button>
                </div>
              </div>
              <div className={styles.getSection}>
                <div className={styles.glassList}>
                  <h4 className={styles.getLabel}>What you get:</h4>
                  <ul className={styles.list}>
                    {service.get.map((item, i) => (
                      <li key={i} className={styles.listItem}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.check}><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <span className={styles.badge}>Process</span>
            <h2 className={styles.processHeading}>Simple, fast, no back-and-forth.</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div key={step.id} className={styles.processCard}>
                <div className={styles.processIcon}>
                  {/* @ts-ignore */}
                  <lord-icon
                    src={step.icon}
                    trigger="loop"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: '50px', height: '50px' }}>
                  </lord-icon>
                </div>
                <h3 className={styles.stepLabel}>{step.id}. {step.label}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalGlassCard}>
            <h2 className={styles.finalHeading}>Not sure which service you need?</h2>
            <p className={styles.finalBody}>
              That's fine. Book a free 30-minute call and we'll figure it out together. 
              I'll tell you exactly what your brand needs — and what it doesn't.
            </p>
            <button className={styles.finalButton}>Book a free call →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
