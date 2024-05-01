import styles from './keyboard-input.module.css';

export default function KeyboardInput({ key }: { key: string }) {
  return (
    <>
      <kbd className={styles.k}>
        <span>{key}</span>
      </kbd>
    </>
  );
}
