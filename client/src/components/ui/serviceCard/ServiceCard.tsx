import React from 'react';
import classes from './servicecard.module.scss';
import { Card } from 'antd';

interface Service {
  img: any;
  title: string;
  parag: string;
}
const ServiceCard = ({ img, title, parag }: Service) => {
  return (
    <Card hoverable className={classes.card}>
      <div>
        <img className={classes.logo} src={img}></img>
      </div>
      <h2 className={classes.titre}>{title}</h2>
      <p className={classes.par}>{parag}</p>
    </Card>
  );
};
export default ServiceCard;
