import React, { useEffect, useState } from 'react';
import { Typography, Divider } from 'antd';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { getDonation } from '../../requests';
const { Title, Paragraph, Text } = Typography;
const Donateinfo = () => {
  let { id } = useParams();
  console.log(id);

  const { ...calls } = useApi({ getDonation });
  const [data, setData] = useState<any>();
  useEffect(() => {
    calls.getDonation.call(id);
  }, []);

  useEffect(() => {
    if (calls.getDonation.success) setData(calls.getDonation.data.data.donation);
  }, [calls.getDonation.success]);

  const carousel = (
    <Carousel autoplay>
      {data?.images.map((el: any) => {
        return (
          <div>
            <img src={el.secure_url} style={{ width: '600px', height: '400px' }} alt="ImagesCarousel" />
          </div>
        );
      })}
    </Carousel>
  );

  console.log('data', data);
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col sm={10}>{carousel}</Col>
        <Col sm={14}>
          <Typography>
            <Paragraph>
              <Title>{data?.name}</Title>
              {data?.description}
            </Paragraph>
            <Paragraph>
              <Text strong style={{ fontSize: 20 }}>
                {' '}
                Contact:{' '}
              </Text>
              <Text style={{ fontSize: 17 }}>{data?.contact}</Text>
            </Paragraph>
            <Divider />
            <Avatar style={{ margin: '0 15px 0 0' }}>H</Avatar>{' '}
            <Text style={{ fontSize: 20 }}>{data?.author?.name}</Text>
          </Typography>
        </Col>
      </Row>
    </>
  );
};
export default Donateinfo;
