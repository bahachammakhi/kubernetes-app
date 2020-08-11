import React from 'react';
import classes from './services.module.scss';
import { Row, Col } from 'antd';
import ServiceCard from '../serviceCard/ServiceCard';
interface Props {
  data: Service[];
}
interface Service {
  img: any;
  title: string;
  parag: string;
}
const Services = ({ data }: Props) => {
  const card = data.map((el, index) => (
    <Col
      xs={{ span: 22, offset: 2 }}
      sm={{ span: 22, offset: 2 }}
      md={{ span: 6, offset: 1 }}
      lg={{ span: 6, offset: 2 }}
      xl={{ span: 6, offset: 2 }}
      xxl={{ span: 6, offset: 2 }}
      className={classes.card}
    >
      <ServiceCard {...el} />
    </Col>
  ));
  return <Row className={classes.wrapper}>{card}</Row>;
};

export default Services;
