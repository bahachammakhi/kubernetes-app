import React from 'react';
import classes from './sponsors.module.scss';
import { Row } from 'antd';
import icon from '../../../assets/aa.png';
import classNames from '../../../utils/classNames';
const data = [icon, icon, icon, icon];
const Sponsors = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classNames(classes.title, classes.underlinea)}>Our Corporate Partners</h1>
      <p className={classes.description}>
        We've made it possible for more than 300 companies to support local causes around the world. We help companies
        expand their philanthropic footprint with global nonprofit vetting, grantmaking, charitable gift cards, and
        digital campaigns to power cause marketing, disaster response, and employee engagement.
      </p>
      <Row className={classes.logos}>
        {data.map(el => (
          <img className={classes.img} src={el} alt="logo" />
        ))}
      </Row>
    </div>
  );
};
export default Sponsors;
