import React from 'react';
import classes from './numbersection.module.scss';

import Counter from '../counter/Counter';
const data = [
  { number: 5, name: 'Test' },
  { number: 180, name: 'Test' },
  { number: 60, name: 'Test' },
  { number: 260, name: 'Test' },
];
const NumberSection = () => {
  return (
    <div className={classes.wrapper}>
      <Counter data={data} />
    </div>
  );
};

export default NumberSection;
