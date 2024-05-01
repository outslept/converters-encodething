import styles from './index.module.css'

export function FeatureSection({ title, description }: { title: string, description: string }) {
  return (
    <p className={styles.s}>
      <span className={styles.t}>{title}</span>{' '}
      {description}
    </p>
  );
}