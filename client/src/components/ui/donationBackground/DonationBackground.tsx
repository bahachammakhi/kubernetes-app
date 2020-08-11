import React from 'react';
import bg from '../../../assets/bg4.jpg';
import classes from './donationbackground.module.scss';
import NumberSection from '../numbersSection/NumberSection';
import Counter from '../counter/Counter';
import { Button, Row } from 'antd';
const data = [
  { number: 5, name: 'Test' },
  { number: 180, name: 'Test' },
  { number: 60, name: 'Test' },
  { number: 260, name: 'Test' },
];
const DonationBackground = () => {
  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url(${bg})` }}>
      <h1 className={classes.title}>Donate for a better world!</h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer
        accumsan sodales odio, id tempus ullamcorper
      </p>
      <Row>
        <Button type="primary" className={classes.button} size="large">
          Donate now !
        </Button>{' '}
        <Button type="primary" className={classes.button} size="large">
          Read more !
        </Button>
      </Row>

      {/* <div className={classes.counter}>
        <Counter data={data} />
      </div> */}
    </div>
  );
};
export default DonationBackground;
