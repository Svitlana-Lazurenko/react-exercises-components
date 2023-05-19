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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(248, 244, 236)',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 50,
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
      <TransactionHistory items={transactions} />
    </div>
  );
};
