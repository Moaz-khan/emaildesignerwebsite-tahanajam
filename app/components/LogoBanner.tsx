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
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.italic}>Tool I work in</span>
        </h2>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {[...toolLogos, ...toolLogos].map((logo, i) => (
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
