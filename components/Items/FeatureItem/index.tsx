import { Typography } from '@components/Common/Typography/typography'
import styles from './index.module.css'

export function FeatureItem({ title, description }: { title: React.ReactNode, description: React.ReactNode }) {
  return (
    <Typography variant='caption' className={styles.a}>
      <Typography variant='span' className={styles.b}>{title}</Typography>{' '}
      {description}
    </Typography>
  );
}