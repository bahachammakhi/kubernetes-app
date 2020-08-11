import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { Upload, Button, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;

const AddStone = ({ Sendrequest }: any) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    Sendrequest(values);
  };
  return (
    <div>
      <Title>Form</Title>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="title"
          name="name"
          rules={[
            {
              min: 5,
              message: 'check length of title',
            },
            { required: true, message: 'Please input your  title' },
          ]}
        >
          <Input placeholder="Basic usage" />
        </Form.Item>

        <Form.Item
          label="Description"
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
        <Form.Item name={'but'} label="Goal" rules={[{ type: 'number', min: 20, required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="coverimage"
          name="imageCover"
          rules={[{ required: true, message: 'Please import image' }]}
        >
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item label="image" name="images">
          <Upload>
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
    </div>
  );
};

export default AddStone;
