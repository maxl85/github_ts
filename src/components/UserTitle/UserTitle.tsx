import { ILocalGithubUser } from '../../types';
import styles from './UserTitle.module.scss';

interface IUserTitle extends Pick<
  ILocalGithubUser,
  'name' | 'login' | 'created'
> {}

const localDate = new Intl.DateTimeFormat('en-GB',{
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function UserTitle({ created, login, name }: IUserTitle) {
  const joinedDate = localDate.format(new Date(created));
  
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
}
