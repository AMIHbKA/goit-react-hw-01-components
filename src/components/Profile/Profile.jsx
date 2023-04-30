import css from './Profile.module.css';
import { formattedNumber } from 'utils/utils';
import PropTypes from 'prop-types';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          className={css.avatar}
          src={avatar}
          alt={`User ${username} avatar`}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>
            {formattedNumber(stats.followers)}
          </span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{formattedNumber(stats.views)}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{formattedNumber(stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
