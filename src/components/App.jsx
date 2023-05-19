import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
