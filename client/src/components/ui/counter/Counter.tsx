import React from 'react';
import classes from './counter.module.scss';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
import { Row, Col } from 'antd';

//This compoenent still needs responsive implementation

interface Props {
  data: Data[];
}
interface Data {
  number: number;
  name: String;
}

const Conter = ({ data }: Props) => {
  const countdown = data.map((el: Data) => {
    return (
      <Col
        xs={{ span: 6, offset: 2 }}
        sm={{ span: 6, offset: 2 }}
        md={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        xl={{ span: 6, offset: 2 }}
        xxl={{ span: 6, offset: 2 }}
      >
        <TrackVisibility once className={classes.element}>
          {({ isVisible }) =>
            isVisible && <CountUp className={classes.number} end={el.number} duration={10} delay={0.2} />
          }
        </TrackVisibility>
        <h2 className={classes.title}>{el.name}</h2>
      </Col>
    );
  });
  return <Row>{countdown}</Row>;
};

export default Conter;
