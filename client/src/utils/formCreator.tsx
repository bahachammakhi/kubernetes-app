import React, { FC } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  Checkbox,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
const { Option } = Select;

interface Props {
  elementConfig: any;
  elementType: string;
  onChange: any;
  value?: string | any;
  options?: any;
  type?: any;
}

const formCreator: FC<Props | any> = ({
  elementConfig,
  elementType,
  onChange,
  value,
  options,
}: Props): any => {
  switch (elementType) {
    case 'input':
      return (
        <Form.Item
          label={elementConfig.label ? elementConfig.label : ''}
          rules={[{ required: true, message: `${elementConfig.name} is required` }]}
        >
          <Input
            value={value}
            name={elementConfig.name}
            size={elementConfig.size ? elementConfig.size : 'large'}
            placeholder={elementConfig.placeholder ? elementConfig.placeholder : ''}
            prefix={elementConfig.icon ? elementConfig.icon : <></>}
            onChange={onChange}
          />
          {elementConfig.required && value === '' ? <span>Field required !</span> : <></>}
        </Form.Item>
      );
    case 'select':
      return (
        <Form.Item
          label={elementConfig.label ? elementConfig.label : ''}
          rules={[{ required: true, message: `${elementConfig.name} is required` }]}
        >
          <Select
            onChange={e => onChange(e)}
            // name={elementConfig.name}
            value={value}
            defaultValue={`Choose your ${elementConfig.name}`}
          >
            {elementConfig?.options?.map((el: { name: string; value: string }, index: number) => {
              return (
                <Option key={index} value={el.value}>
                  {el.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      );
    case 'password':
      return (
        <Form.Item
          label={elementConfig.label ? elementConfig.label : ''}
          rules={[{ required: true, message: `${elementConfig.name} is required` }]}
        >
          <Input.Password
            value={value}
            name={elementConfig.name}
            size={elementConfig.size ? elementConfig.size : 'large'}
            placeholder={elementConfig.placeholder ? elementConfig.placeholder : ''}
            prefix={elementConfig.icon ? elementConfig.icon : <></>}
            onChange={onChange}
          />
        </Form.Item>
      );
    case 'date':
      return (
        <Form.Item
          label={elementConfig.label ? elementConfig.label : ''}
          rules={[{ required: true, message: `${elementConfig.name} is required` }]}
        >
          <DatePicker
            value={value}
            name={elementConfig.name}
            size={elementConfig.size ? elementConfig.size : 'large'}
            defaultValue={elementConfig.placeholder ? elementConfig.placeholder : ''}
            onChange={onChange}
          />
        </Form.Item>
      );
    case 'checkout':
      return (
        <Form.Item
          label={elementConfig.label ? elementConfig.label : ''}
          rules={[{ required: true, message: `${elementConfig.name} is required` }]}
        >
          <Checkbox.Group
            value={value}
            name={elementConfig.name}
            options={elementConfig?.options}
            onChange={onChange}
          />
        </Form.Item>
      );
  }
};

export default formCreator;

//  const forms = [
//    {
//      elementType: 'input',
//      elementConfig: {
//        label: 'name',
//        name: 'name',
//        size: 'default',
//        placeholder: 'name',
//        required: true,
//      },
//    },
//    {
//      elementType: 'input',
//      elementConfig: {
//        label: 'Contact',
//        name: 'contact',
//        placeholder: 'test',
//      },
//    },
//    {
//      elementType: 'input',
//      elementConfig: {
//        label: 'Description',
//        name: 'description',
//        placeholder: 'description',
//      },
//    },
//    {
//      elementType: 'input',
//      elementConfig: {
//        label: 'But',
//        name: 'but',
//        placeholder: 'butfgfdg',
//      },
//    },
//    {
//      elementType: 'select',
//      elementConfig: {
//        label: 'Select',
//        name: 'select',
//        placeholder: 'test',
//        options: [
//          { name: 'Choose1', value: '2' },
//          { name: 'Choose3', value: '3' },
//        ],
//      },
//    },
//  ];
