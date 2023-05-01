import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Profile } from 'components/Profile/Profile';
import { UploadStats } from 'components/UploadStats/UploadStats';
import { FriendList } from 'components/FriendList/FriendList';
import { HistoryTransactions } from 'components/HistoryTransactions/HistoryTransactions';
import { TaskDiv } from 'components/TaskDiv/TaskDiv';

import './index.css';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskDiv number={1}>
      <Profile user={user} />
    </TaskDiv>

    <TaskDiv number={2}>
      <UploadStats title="Upload stats" items={data} />
    </TaskDiv>

    <TaskDiv number={3}>
      <FriendList friends={friends} />
    </TaskDiv>

    <TaskDiv number={4}>
      <HistoryTransactions transactions={transactions} />
    </TaskDiv>
  </React.StrictMode>
);
