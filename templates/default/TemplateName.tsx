import styles from './TemplateName.module.scss';

interface ITemplateName {}

export function TemplateName({  }: ITemplateName) {
  return (
    <div className={styles.templateName}>
      TemplateName Component
    </div>
  );
}
