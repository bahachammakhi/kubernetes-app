import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Input, Button, message } from 'antd';
import useForm from '../../../hooks/useForm';
import loginActions from '../../../redux/login/login';
import loginActionsRequest from '../../../redux/login/loginRequest';
import classes from './signup.module.scss';
const Signup = () => {
  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
    name: '',
    passwordConfirm: '',
  };
  const { handleChange, form, handleReset } = useForm({ initialValues });
  const ModalHandler = () => {
    dispatch(loginActions.modalHandler({ name: 'signup' }));
  };
  const handleVerif = () => {
    if (form.password === form.passwordConfirm && form.password != '') {
      dispatch(loginActionsRequest.loginRequest({ form, name: 'signup' }));
    } else {
      message.warning(`Please Confirm your password !`);
    }
  };
  useEffect(() => {
    if (redux.loginRequest.loaded && redux.loginRequest.name === 'signup') {
      handleReset();
      dispatch(loginActions.modalHandler({ name: 'signup' }));
      message.success(`Welcome ${redux.loginRequest.data.data.user.name} Logged in successfully`);
    }
  }, [redux.loginRequest.loaded && redux.loginRequest.name === 'signup']);
  return (
    <Modal
      bodyStyle={{ padding: '50px' }}
      destroyOnClose
      footer={null}
      className={classes.modal}
      visible={redux.login.modalSignup}
      onOk={ModalHandler}
      onCancel={ModalHandler}
    >
      <Input className={classes.input} onChange={handleChange} name="email" placeholder="email" />
      <Input className={classes.input} onChange={handleChange} name="name" placeholder="name" />
      <Input.Password
        name="password"
        className={classes.input}
        onChange={handleChange}
        placeholder="password"
      />
      <Input.Password
        name="passwordConfirm"
        className={classes.input}
        onChange={handleChange}
        placeholder="Confirm your password"
      />
      <div className={classes.error}>{redux.loginRequest.error}</div>
      <Button className={classes.button} onClick={() => handleVerif()} type="primary" loading={false} block>
        Signup
      </Button>
    </Modal>
  );
};

export default Signup;
