import React, { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import { getStones } from '../../requests';
import StoneGrid from '../../components/ui/stonegrid/StoneGrid';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../../components/ui/loginform/LoginForm';
import { Form, Button, Modal, message, notification } from 'antd';
import AddStone from '../../components/ui/addStone/AddStone';
import createStoneActions from '../../redux/Stones/createStones';

interface stones {
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
const reqtype = ['image/jpg', 'image/gif', 'image/jpeg', 'image/png'];
const reqsize = '20000';

export const StoneContainer = () => {
  const dispatch = useDispatch();
  const [visible, setvisible] = useState(false);
  const redux = useSelector((state: any) => state);

  const [data, setData] = useState<stones[]>([]);

  const { ...calls } = useApi({ getStones });

  useEffect(() => {
    calls.getStones.call();
  }, []);

  useEffect(() => {
    if (calls.getStones.data.data?.stones) setData(calls.getStones.data.data?.stones);
  }, [calls.getStones.success]);
  useEffect(() => {
    if (redux.createStone?.data?.status === 'success') {
      calls.getStones.call();
      notification.success({
        message: 'Stone added successfully',
      });
      setvisible(false);
    }
  }, [redux.createStone?.loaded]);

  const valdfile = (file: any, reqtype: string[], reqsize: string) => {
    let res = true;

    if (JSON.stringify(file) !== JSON.stringify([{}])) {
      file.map((element: any) => {
        if (element.size < reqsize) {
          message.error('check size of files');
          return false;
        }
        if (reqtype.indexOf(element.type) == -1) {
          message.error('check type of files');
          return false;
        }
      });
    }
    return res;
  };
  const Sendrequest = (values: any) => {
    let formData = new FormData();

    const images = values.images ? values.images.fileList : [{}];
    const imageCover = values.imageCover.fileList;
    if (valdfile(images, reqtype, reqsize) && valdfile(imageCover, reqtype, reqsize)) {
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('contact', values.contact);
      formData.append('imageCover', values.imageCover.file.originFileObj);
      formData.append('author', redux.loginRequest.data.data.user._id);
      formData.append('visitor', 'false');
      formData.append(
        'images',
        values.images ? values.images.file.originFileObj : values.imageCover.file.originFileObj
      );
      formData.append('but', values.but);
      dispatch(createStoneActions.createStonesRequest({ formData }));
    }
  };
  return (
    <div>
      <Button onClick={() => setvisible(!visible)} style={{ marginLeft: '10%' }}>
        Add Your Stone
      </Button>
      {data ? <StoneGrid data={data} /> : <h1>No stones yet</h1>}
      <Modal title="Add new item" visible={visible} onCancel={() => setvisible(false)} footer={null}>
        {redux.loginRequest.data ? <AddStone Sendrequest={Sendrequest} /> : <Login />}
      </Modal>
    </div>
  );
};
