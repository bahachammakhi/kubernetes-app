import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Input, Button, message } from 'antd';
import useForm from '../../../hooks/useForm';
import loginActions from '../../../redux/login/login';
import loginActionsRequest from '../../../redux/login/loginRequest';
import classes from './loginform.module.scss';

const LoginForm = () => {
  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const { handleChange, form, handleReset } = useForm({ initialValues });
  useEffect(() => {
    if (redux.loginRequest.loaded && redux.loginRequest.name === 'login') {
      handleReset();
      dispatch(loginActions.modalHandler({ name: 'login' }));
      message.success(`Welcome ${redux.loginRequest.data.data.user.name} Logged in successfully`);
    }
  }, [redux.loginRequest.loaded, redux.loginRequest.name === 'login']);
  return (
    <div>
      <Input className={classes.input} onChange={handleChange} name="email" placeholder="email" />
      <Input.Password
        name="password"
        className={classes.input}
        onChange={handleChange}
        placeholder="password"
      />
      <div className={classes.error}>{redux.loginRequest.error}</div>
      <Button
        className={classes.button}
        onClick={() => {
          dispatch(loginActionsRequest.loginRequest({ form, name: 'login' }));
        }}
        type="primary"
        loading={false}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
