import React from 'react';
import classes from './stonecard.module.scss';
import { Card, Progress, Typography } from 'antd';
const { Meta } = Card;
const { Paragraph } = Typography;

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

const StoneCard = ({ imageCover, description, contact, but, author, currentValue, name }: stone) => {
  const CalculPercent = () => {
    return (currentValue / but) * 100;
  };
  return (
    <>
      <Card
        hoverable
        loading={false}
        className={classes.card}
        cover={
          <div className={classes.cover}>
            <p className={classes.title}>{name}</p>
            <img className={classes.img} alt="example" src={imageCover.secure_url} />
          </div>
        }
      >
        <Meta
          className={classes.description}
          description={<Paragraph ellipsis={{ rows: 8, expandable: false }}> {description} </Paragraph>}
        />

        <Progress
          strokeColor={CalculPercent() > 50 ? '#32CD32' : '#FF0000'}
          className={classes.progress}
          percent={CalculPercent()}
          showInfo={false}
        />
        <span className={classes.money}>
          <b>${currentValue} raised</b> of ${but}
        </span>
      </Card>
    </>
  );
};

export default StoneCard;
