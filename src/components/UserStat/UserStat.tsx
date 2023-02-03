import { ILocalGithubUser } from '../../types';
import styles from './UserStat.module.scss';

// interface IUserStat {
//   repos: number;
//   followers: number;
//   following: number;

// }

export interface IUserStat extends Pick<
  ILocalGithubUser,
  'repos' | 'followers' | 'following'
> { }

export function UserStat({ repos, followers, following }: IUserStat) {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{repos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
}
