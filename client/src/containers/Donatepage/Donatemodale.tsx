import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from 'antd';
import Login from '../../components/ui/loginform/LoginForm';
import Formadd from './Formadd';
const { Title } = Typography;
const { Text } = Typography;
const Donatemodale = () => {
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state);
  useEffect(() => {
    
    if(redux.createDonations.loaded){
      setvisible(false)
    }
   },[redux.createDonations]);
  return (
    <div>
      <Button ghost size="large" style={{ margin: '10px' }} onClick={() => setvisible(true)}>
        Support classrooms monthly
      </Button>

      <Modal title="Add new item" visible={visible} onCancel={() => setvisible(false)} footer={null}>
        {redux.loginRequest.data ? <Formadd /> : <Login />}
      </Modal>
    </div>
  );
};

export default Donatemodale;
