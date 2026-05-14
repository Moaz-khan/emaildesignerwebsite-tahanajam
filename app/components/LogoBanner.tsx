"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './LogoBanner.module.css';

const toolLogos = [
  { name: 'Klaviyo', src: '/Tools logo/klaviyo-email-marketing-platform-logo.png.png' },
  { name: 'Figma', src: '/Tools logo/figma-email-design-tool-logo.png.png' },
  { name: 'Attentive', src: '/Tools logo/attentive-sms-email-marketing-platform-logo.png.png' },
  { name: 'Omnisend', src: '/Tools logo/omnisend-email-marketing-platform-logo.png.png' },
  { name: 'Mailchimp', src: '/Tools logo/mailchimp-email-marketing-platform-logo.png.png' },
  { name: 'Gemini', src: '/Tools logo/gemini-ai-content-tool-logo.png.png' },
  { name: 'Kling', src: '/Tools logo/kling-ai-video-generation-tool-logo.png.png' },
];

const LogoBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }, []);

  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.italic}>Tools I work in</span>
        </h2>

        <div
          ref={containerRef}
          className={styles.marqueeContainer}
          data-animated={start}
        >
          <div
            ref={scrollerRef}
            className={`${styles.marqueeContent} ${start ? styles.animate : ''}`}
          >
            {toolLogos.map((logo, i) => (
              <div key={`${logo.name}-${i}`} className={styles.brandLogo}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={50}
                  className={styles.logoImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
