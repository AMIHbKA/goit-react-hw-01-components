import css from './TaskDiv.module.css';
import PropTypes from 'prop-types';

export const TaskDiv = ({ number, text, children }) => {
  return (
    <div className={css['task-container']}>
      <h2 className={css['task-header']}>
        Task #{number} {text}
      </h2>
      {children}
    </div>
  );
};

TaskDiv.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
