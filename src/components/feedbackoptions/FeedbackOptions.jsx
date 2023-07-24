import clsx from 'clsx';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { StatsLabel } from 'components/statistics/Statistics';

export const Button = ({ variant, text, handle }) => {
  return (
    <button type="button" onClick={handle} className={clsx(css[variant])}>
      {text}
    </button>
  );
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <StatsLabel variant="label">
    {options.map((element, index) => (
      <Button
        variant="button"
        key={'i' + index}
        text={element}
        handle={onLeaveFeedback[index]}
      ></Button>
    ))}
  </StatsLabel>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  neutral: PropTypes.array,
};

Button.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};
