import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/StatisticsSection/StatisticsSection';
import { FriendList } from 'components/FriendList/FriendListUl/FriendListUl';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistoryTable/TransactionHistoryTable';
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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

// key, image
// section, transactionHistoryTable
