import { getRandomHexColor } from 'utils/utils';
import PropTypes from 'prop-types';
import css from './UploadStats.module.css';

export const UploadStats = ({ title, items }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {items.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{`${item.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

UploadStats.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
