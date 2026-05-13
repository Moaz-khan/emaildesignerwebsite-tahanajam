'use client';

import { useEffect } from 'react';
import styles from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Something went wrong!</h2>
        <p className={styles.message}>
          We encountered an unexpected error. Don't worry, it's not your fault.
        </p>
        <button className={styles.resetBtn} onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
