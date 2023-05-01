import css from './TaskDiv.module.css';
import PropTypes from 'prop-types';

export const TaskDiv = ({ number, children }) => {
  return (
    <div className={css['task-container']}>
      <h2 className={css['task-header']}>Task #{number}</h2>
      {children}
    </div>
  );
};

TaskDiv.propTypes = {
  number: PropTypes.number.isRequired,
};
