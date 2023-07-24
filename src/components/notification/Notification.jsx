import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Notification.module.css';

export const Notification = ({ variant, children }) => {
  return <p className={clsx(css[variant])}>{children} </p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
