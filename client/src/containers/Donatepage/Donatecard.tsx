import React from 'react';
import classes from './Donatecard.module.scss';
import DeleteDonation from './DeleteDonation';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const { Text } = Typography;
const { Paragraph } = Typography;


interface LabeledValue {
  image?:string[];
  startDates?:string[];
  _id?: string;
  name?: string;
  contact?: string;
  description?: string;
  author?: author;
  imageCover?:imageCover;
  id?: string;
}

interface donation {
  data?: LabeledValue;
}
interface author {
  role: string;
_id: string;
name: string;
email: string;
__v: Number;
}

interface imageCover {
  secure_url: string;
  public_id:  string;
}

const Donatecard = ({ data }:donation) => {


  
  return (
    <div className={classes.card} >
      <Row align="middle" justify="center" gutter={[12, 12]}>
        <Col flex="10%" className={classes.img}>
          <img src={data?.imageCover?.secure_url} style={{ width: '160px', height: '160px' }} />
        </Col>
        <Col flex="80%">
          {' '}
          <Title level={3} style={{ color: '#A5B3CB' }}>
            {data?.name}
          </Title>
          <Text>  <Paragraph ellipsis={{ rows: 5, expandable: false }}> {data?.description} </Paragraph></Text>
          <Title level={4} style={{ margin: '0px' }}>
            {data?.author?.name}
          </Title>
          <Text>{data?.contact}</Text>
        </Col>
      </Row>
      <DeleteDonation data={data}/>
      <Link to={{pathname:`/Donateinfo/${data?._id}`}} >
    more info
      </Link>
    </div>
  );
};

export default Donatecard;
