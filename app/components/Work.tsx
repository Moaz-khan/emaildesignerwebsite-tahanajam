import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Work.module.css';

const projects = [
  {
    id: 1,
    title: 'The Promise Co',
    type: 'Welcome Flow Design',
    details: '5 emails, Klaviyo',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    gridClass: styles.large
  },
  {
    id: 2,
    title: 'Rivlo',
    type: 'Email Template Design',
    details: 'shoe brand',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    gridClass: styles.tall
  },
  {
    id: 3,
    title: 'Sniffy Snax',
    type: 'Campaign Design',
    details: 'DTC pet treats brand',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    gridClass: styles.wide
  },
  {
    id: 4,
    title: 'Morphosys',
    type: 'Email Design System',
    details: 'Web3 brand',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    gridClass: styles.small
  }
];

const Work = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.container}>
        {/* Left Side: Text & CTA */}
        <div className={styles.leftCol}>
          <div className={styles.header}>
            <span className={styles.badge}>Selected work</span>
            <h2 className={styles.title}>Email work I'm proud of.</h2>
            <p className={styles.subtitle}>
              A few recent projects — each one built around the brand's identity, their audience, 
              and the goal of making every send count.
            </p>
          </div>
          <Link href="/work" className={styles.primaryCta}>
            View all case studies <span>→</span>
          </Link>
        </div>

        {/* Right Side: Bento Grid */}
        <div className={styles.rightCol}>
          <div className={styles.bentoGrid}>
            {projects.map((project) => (
              <div key={project.id} className={`${styles.projectCard} ${project.gridClass}`}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className={styles.projectImage}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.projectInfo}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectType}>{project.type}</p>
                      <span className={styles.projectDetails}>{project.details}</span>
                    </div>
                    <button className={styles.viewDetailBtn}>
                      View project detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
