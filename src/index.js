import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Profile } from 'components/Profile/Profile';
import { UploadStats } from 'components/UploadStats/UploadStats';
import { FriendList } from 'components/FriendList/FriendList';

import './index.css';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile user={user} />
    <UploadStats title="Upload stats" items={data} />
    <FriendList friends={friends} />;
  </React.StrictMode>
);
