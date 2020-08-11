import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Donatemodale from './Donatemodale';
import Donatecard from './Donatecard';
import donationActions from '../../redux/Donations/donations';
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import classes from './Donateconatainer.module.scss';
import { Typography } from 'antd';
const { Title } = Typography;
const { Text } = Typography;

const Donateconatainer = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(donationActions.donationRequest());

    if (redux.donation.data && redux.donation.loaded) {
      setData(redux.donation.data.data.donations);
    }
  }, []);

  const Items =
    data.length > 0 ? (
      data.map((item, key): any => <Donatecard data={item} key={key} />)
    ) : (
      <Title>No Donations yet...</Title>
    );

  return (
    <div style={{ margin: '30px' }}>
      <Row>
        <Col flex="1 1 150px">
          <Title level={3}>ZTEEZTE</Title>
          <Checkbox.Group>
            <Checkbox value="a">Applied Learning</Checkbox>
            <br />
            <Checkbox value="c">Health & Sports</Checkbox>
            <br />
            <Checkbox value="v">History & Civics</Checkbox>
            <br />
          </Checkbox.Group>
        </Col>
        <Col flex="0 1 1100px">
          <div className={classes.addnew}>
            <Title style={{ color: '#fff' }}>Like what you’re seeing? Support classrooms monthly!</Title>

            <Text style={{ color: '#fff' }}>
              Sign up to automatically donate once a month, then handpick the projects you want to support.
            </Text>
            <br />
            <Donatemodale />
          </div>
          {Items}
        </Col>
      </Row>
      <Donatemodale />
    </div>
  );
};

export default Donateconatainer;
