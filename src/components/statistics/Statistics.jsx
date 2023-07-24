import clsx from 'clsx';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const StatsList = ({ variant, children }) => {
  return <ul className={clsx(css[variant])}>{children} </ul>;
};
export const StatsItem = ({ variant, children }) => {
  return <li className={clsx(css[variant])}>{children} </li>;
};
export const StatsLabel = ({ variant, children }) => {
  return <li className={clsx(css[variant])}>{children} </li>;
};

export const Statistics = ({
  good = '',
  neutral = '',
  bad = '',
  total = '',
  positivePercentage = '',
}) => (
  <StatsList variant="list">
    <StatsItem variant="list_item">Good: {good}</StatsItem>
    <StatsItem variant="list_item">Neutral: {neutral}</StatsItem>
    <StatsItem variant="list_item">Bad: {bad}</StatsItem>
    <StatsItem variant="list_item">Total: {total}</StatsItem>
    <StatsItem variant="list_item">
      PositivePercentage: {positivePercentage}
    </StatsItem>
  </StatsList>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
