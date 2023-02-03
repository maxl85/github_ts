import { useState } from 'react';
import { Container } from './components/Container';
import { Search } from './components/Search';
import { TheHeader } from './components/TheHeader';
import { UserCard } from './components/UserCard';
import { defaultUser } from './mock';
import { IGithubError, IGithubUser, ILocalGithubUser } from './types';
import { extractLocalUser } from './utils/exract-local-user';
import { isGuthubUser } from './utils/typeguards';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<ILocalGithubUser | null>(defaultUser);
  
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    
    const res = await fetch(url);
    const user = await res.json() as IGithubUser | IGithubError;
    
    if (isGuthubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };
  
  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (<UserCard {...user} />)}
    </Container>
  );
}

export default App;
