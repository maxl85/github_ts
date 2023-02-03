import { ThemeSwitcher } from '../ThemeSwitcher';

import styles from './TheHeader.module.scss';

export function TheHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        devFinder
      </div>
      <ThemeSwitcher />
    </div>
  );
}

