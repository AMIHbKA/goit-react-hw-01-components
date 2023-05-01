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

let tskCount = 0;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskDiv number={(tskCount += 1)} text="Profile">
      <Profile user={user} />
    </TaskDiv>

    <TaskDiv number={(tskCount += 1)} text="Upload Stats">
      <UploadStats title="Upload stats" items={data} />
    </TaskDiv>

    <TaskDiv number={(tskCount += 1)} text="FriendList">
      <FriendList friends={friends} />
    </TaskDiv>

    <TaskDiv number={(tskCount += 1)} text="History Transactions">
      <HistoryTransactions transactions={transactions} />
    </TaskDiv>
  </React.StrictMode>
);
