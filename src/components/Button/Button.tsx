import styles from './Button.module.scss';

interface IButton {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, onClick }: IButton) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
