import clsx from 'clsx';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ variant, title, children }) => {
  return (
    <section className={clsx(css[variant])}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
