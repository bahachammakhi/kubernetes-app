import React from 'react';
import classes from './card.module.scss';
import { Card } from 'antd';

const CardComponents = ({ img, title, parag }: any) => {
  return (
    <>
      <Card hoverable className={classes.card}>
        <div>
          <img className={classes.logo} src={img}></img>
        </div>
        <h2 className={classes.titre}>{title}</h2>
        <p className={classes.par}>{parag}</p>
      </Card>
    </>
  );
};
export default CardComponents;
