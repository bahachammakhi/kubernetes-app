import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import useApi from '../../hooks/useApi';
import { getStone } from '../../requests';
import { Carousel, Avatar, Row, Descriptions, Typography, Button, Col } from 'antd';
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

const StoneDetailsContainer = () => {
  const { id } = useParams();

  const { ...calls } = useApi({ getStone });
  const [data, setData] = useState<stone>();

  useEffect(() => {
    calls.getStone.call(id);
  }, []);

  useEffect(() => {
    if (calls.getStone.success) setData(calls.getStone.data.data.stone);
  }, [calls.getStone.success]);
  console.log('data', data);
  const carousel = (
    <Carousel autoplay>
      {data?.images.map(el => {
        return (
          <div>
            <img src={el.secure_url} alt="ImagesCarousel" />
          </div>
        );
      })}
    </Carousel>
  );
  return (
    <Row style={{ padding: '50px' }}>
      <Col span="14">
        {' '}
        <h1>{data?.name}</h1>
        {carousel}
        <div style={{ paddingLeft: '10%' }}>
          <Row style={{ padding: '5px 5px 5px' }}>
            <Avatar style={{ backgroundColor: 'blue', verticalAlign: 'middle' }} size="large">
              <span style={{ textTransform: 'capitalize' }}>{data?.author?.name[0]}</span>
            </Avatar>
            <span style={{ padding: '10px' }}>{data?.author?.name}</span>
          </Row>
          <Descriptions size="small" bordered>
            <Descriptions.Item span={1}>
              Created {moment(data?.startDate, 'YYYYMMDD').fromNow()}
            </Descriptions.Item>
          </Descriptions>
          <Paragraph ellipsis={{ rows: 3, expandable: true }}>{data?.description}</Paragraph>
          <Row>
            <Button type="primary" size="large">
              Donate
            </Button>
          </Row>
        </div>
      </Col>
      <Col span="10">Side one</Col>
    </Row>
  );
};

export default StoneDetailsContainer;
