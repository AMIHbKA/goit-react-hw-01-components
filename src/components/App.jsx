import { Profile } from 'components/Profile/Profile';
import { UploadStats } from 'components/UploadStats/UploadStats';
import { FriendList } from 'components/FriendList/FriendList';
import { HistoryTransactions } from 'components/HistoryTransactions/HistoryTransactions';
import { TaskDiv } from 'components/TaskDiv/TaskDiv';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <TaskDiv number={1} text="Profile">
        <Profile user={user} />
      </TaskDiv>

      <TaskDiv number={2} text="Upload Stats">
        <UploadStats title="Upload stats" items={data} />
      </TaskDiv>

      <TaskDiv number={3} text="FriendList">
        <FriendList friends={friends} />
      </TaskDiv>

      <TaskDiv number={4} text="History Transactions">
        <HistoryTransactions transactions={transactions} />
      </TaskDiv>
    </>
  );
};
