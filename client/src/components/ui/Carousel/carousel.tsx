import React from 'react';
import classes from './carousel.module.scss';
import { Carousel } from 'antd';

const CarouselWrapper = (props: { msg: any }) => {
  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 className={classes.xd}>{props.msg}</h3>
        </div>
        <div>
          <h3 className={classes.xd}>{props.msg}</h3>
        </div>
        <div>
          <h3 className={classes.xd}>{props.msg}</h3>
        </div>
        <div>
          <h3 className={classes.msg1}>{props.msg}</h3>
        </div>
      </Carousel>
    </>
  );
};
export default CarouselWrapper;
