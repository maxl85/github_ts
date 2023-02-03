import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { Button } from '../Button';

import styles from './Search.module.scss';

interface ISearch {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

interface IFormFields {
  username: HTMLInputElement;
}

export function Search({ hasError, onSubmit }: ISearch) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & IFormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    
    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };
    
  
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username ..."
        />
        {hasError && (
          <div className={styles.error}>
            No Result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
}







// import { useRef } from 'react';
// import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
// import { Button } from '../Button';

// import styles from './Search.module.scss';

// interface ISearch {
//   hasError: boolean;
//   onSubmit: (text: string) => void;
// }

// export function Search({ hasError, onSubmit }: ISearch) {
//   const searchRef = useRef<HTMLInputElement | null>(null);
  
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
    
//     const text = searchRef.current ? searchRef.current.value : '';
    
//     if (text) {
//       onSubmit(text);
//       if (searchRef.current) searchRef.current.value = '';
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <div className={styles.search}>
//         <label htmlFor="search" className={styles.label}>
//           <SearchIcon />
//         </label>
//         <input
//           ref={searchRef}
//           type="text"
//           className={styles.textField}
//           id="search"
//           name="username"
//           placeholder="Search GitHub username ..."
//         />
//         {hasError && (
//           <div className={styles.error}>
//             No Result
//           </div>
//         )}
//         <Button>Search</Button>
//       </div>
//     </form>
//   );
// }
