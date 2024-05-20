import { Fragment } from 'react';
import { classes } from '~/utils/style';
import styles from './heading.module.css';

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  ...rest
}) => {
  const clampedLevel = 1;
  const Component = as || `h${Math.max(clampedLevel, 1)}`;

  return (
    <Fragment>
      <Component
        className={classes(styles.heading, className)}
        data-align={align}
        data-weight={weight}
        data-level={level}
        {...rest}
      >
        {children}
      </Component>
    </Fragment>
  );
};
