import React from 'react';
import { Row, Col } from 'antd';
import StoneCard from '../mileStoneCard/StoneCard';
import { useHistory, Link } from 'react-router-dom';
import classes from './stonegrid.module.scss';

// const dataArray = [
//   {
//     moneyleft: 100,
//     neededMoney: 280,
//     src: 'https://www.donorschoose.org/teacher/photo/u7137717?size=sm&t=1582735068741',
//     title: 'Please provide some food for this poor kids we need your help heree !',
//     description:
//       'Help me give my students an exciting day on an educational working farm. They would greatly benefit from this worthwhile hands-on experience on a country farm.',
//   },
//   {
//     moneyleft: 100,
//     neededMoney: 280,
//     src: 'https://www.donorschoose.org/teacher/photo/u7137717?size=sm&t=1582735068741',
//     title: 'Please provide some food for this poor kids we need your help heree !',
//     description:
//       'Help me give my students an exciting day on an educational working farm. They would greatly benefit from this worthwhile hands-on experience on a country farm.',
//   },
//   {
//     moneyleft: 100,
//     neededMoney: 280,
//     src: 'https://www.donorschoose.org/teacher/photo/u7137717?size=sm&t=1582735068741',
//     title: 'Please provide some food for this poor kids we need your help heree !',
//     description:
//       'Help me give my students an exciting day on an educational working farm. They would greatly benefit from this worthwhile hands-on experience on a country farm.',
//   },
// ];
interface Props {
  data?: stone[];
}
interface stone {
  startDate: Date;
  name: string;
  _id: string;
  author: {
    role: string;
    _id?: string;
    name: string;
    email: string;
    __v?: number;
  };
  contact: string;
  description: string;
  but: number;
  currentValue: number;
  imageCover: {
    secure_url: string;
    public_id: string;
  };
  images: [
    {
      _id?: string;
      secure_url: string;
      public_id: string;
    }
  ];
  slug: string;
  id: string;
}
const StoneGrid = ({ data }: Props) => {
  const history = useHistory();
  const StoneElemnts = data?.map(el => {
    return (
      <Col
        xs={{ span: 22, offset: 2 }}
        sm={{ span: 22, offset: 2 }}
        md={{ span: 8, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        xl={{ span: 6, offset: 2 }}
        xxl={{ span: 6, offset: 2 }}
        onClick={() => history.push(`/stones/${el.id}`)}
      >
        <StoneCard {...el} />{' '}
      </Col>
    );
  });
  return <Row className={classes.grid}>{StoneElemnts}</Row>;
};

export default StoneGrid;
