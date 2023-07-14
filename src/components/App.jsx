import { Profile } from './Profile/Profile';
import user from '../data/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/Statistics/data.json';

export const App = () => {
  return (
     
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      
      
    </div>
  );
};
