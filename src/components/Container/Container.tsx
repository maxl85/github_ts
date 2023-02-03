import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface IContainer {
  children: ReactNode;
}

export function Container({ children }: IContainer) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
