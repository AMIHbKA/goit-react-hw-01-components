import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ data }) => {
  return (
    <ul class="friend-list">
      {data.map(({ friend }) => {
        return (
          <li class="item">
            <span class="status"></span>
            <img class="avatar" src="" alt="User avatar" width="48" />
            <p class="name"></p>
          </li>
        );
      })}
    </ul>
  );
};
