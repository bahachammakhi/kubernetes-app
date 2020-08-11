import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import createDonations from '../../redux/Donations/createDonations';
const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;

const Formadd = () => {
  const [fileListic, setfileListic] = useState();
  const [fileListi, setfileListi] = useState();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();
  var formData = new FormData();
  const onFinish = (values: any) => {
    const reqtype = ['image/jpg', 'image/gif', 'image/jpeg', 'image/png'];
    const reqsize = '104850';
    var files = values.images ? values.images.fileList : [{}];
    var filecoverimage = values.imageCover.fileList;

    const valdfile = (file: any, reqtype: string[], reqsize: string) => {
      let res = true;

      if (JSON.stringify(file) !== JSON.stringify([{}])) {
        file.map((element: any) => {
          if (element.size > reqsize) {
            message.error('check size of files');
            res = false;
          }
          if (reqtype.indexOf(element.type) == -1) {
            message.error('check type of files');
            res = false;
          }
        });
      }
      return res;
    };
    if (valdfile(files, reqtype, reqsize) && valdfile(filecoverimage, reqtype, reqsize)) {
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
      dispatch(createDonations.createDonationsRequest({ formData }));
      if (redux.createDonations.loaded) {
        message.success('upload successfully.');
      } else {
        message.error('upload error');
      }
    }

    //  calls.createDonations.call({data:formData})
    // console.log(Array.from(formData));
    //  axios.post("https://hopeigc-api.herokuapp.com/api/v1/donations", formData)
    // .then(function (response) {
    //   console.log(response);
    // })
    //  .catch(function (error) {
    //    console.log(error);
    // }
    //     )
  };
  const handleChangeimagecover = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setfileListic(fileList);
  };
  const handleChangeimages = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-5);
    fileList = fileList.map(file => {
      if (file.response) {
    
        file.url = file.response.url;
      }
      return file;
    });
    setfileListi(fileList);
  };
  return (
    <>
      <Title>Form</Title>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="title"
          name="name"
          rules={[
            {
              min: 10,
              message: 'check length of title',
            },
            { required: true, message: 'Please input your  title' },
          ]}
        >
          <Input placeholder="Basic usage" />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            {
              min: 10,
              message: 'check length of description',
            },
            { required: true, message: 'Please input your description' },
          ]}
        >
          <TextArea placeholder="description" allowClear />
        </Form.Item>

        <Form.Item
          label="contact"
          name="contact"
          rules={[
            {
              min: 10,
              message: 'Please input your contact',
            },
            { required: true, message: 'Please input your username!' },
          ]}
        >
          <Input placeholder="contact" />
        </Form.Item>
        <Form.Item
          label="coverimage"
          name="imageCover"
          rules={[{ required: true, message: 'Please import image' }]}
        >
          <Upload
            accept=".png,.jpeg,.jpg"
            action={'http://www.mocky.io/v2/5e7d189e350000119a06a53d'}
            onChange={handleChangeimagecover}
            fileList={fileListic}
          >
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item label="image" name="images">
          <Upload
            accept=".png,.jpeg,.jpg"
            onChange={handleChangeimages}
            fileList={fileListi}
            action={'http://www.mocky.io/v2/5e7d189e350000119a06a53d'}
          >
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Formadd;
