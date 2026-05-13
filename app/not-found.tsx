import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link href="/" className={styles.homeBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
