import React, { useEffect } from 'react';
import classes from './footer.module.scss';
import { Row, Col, Input, Button, message } from 'antd';
import useForm from '../../../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../../../redux/contact/contactRequest';
//This component still needs Form validations

const { TextArea } = Input;
const RightSide = () => (
  <div>
    <h1>Get In Touch with us</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the
    </p>
    <Row>
      <i className={`fab fa-instagram icons ${classes.icons}`}></i>
      <i className={`fab fa-facebook ${classes.icons}`}></i>
      <i className={`fas fa-phone-square-alt ${classes.icons}`}></i>
    </Row>
    <Row>
      <i className={`fas fa-phone-square-alt ${classes.icons}`}></i>+21655592675
    </Row>
    <Row>
      <i className={`fas fa-envelope ${classes.icons}`}></i>email@email.com
    </Row>
    <Row>
      <i className={`fas  fa-map-marker-alt ${classes.icons}`}></i>Rue 15 octobre 1596
    </Row>
  </div>
);

const LeftSide = () => {
  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };
  const {
    handleChange,
    handleReset,
    handleSubmit,
    handleBlur,
    setForm,
    form,
    errors,
    success,
    submitting,
  } = useForm({
    initialValues,
  });
  useEffect(() => {
    if (redux.contact.loaded) {
      handleReset();
      message.success(`Done! !!`);
    }
  }, [redux.contact.loaded]);

  //cons
  return (
    <div>
      <Input
        value={form.name}
        className={classes.formElement}
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <Input
        value={form.email}
        className={classes.formElement}
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <TextArea
        className={classes.formElement}
        placeholder="Message"
        value={form.message}
        autoSize={{ minRows: 4, maxRows: 6 }}
        name="message"
        onChange={handleChange}
      />
      <h4 style={{ padding: '10px', color: 'red' }}> {redux.contact.error}</h4>
      <Button
        onClick={e => {
          console.log(form);
          dispatch(contactActions.contactRequest({ form }));
        }}
        className={classes.button}
      >
        Contact us
      </Button>
    </div>
  );
};
const FooterHome = () => {
  return (
    <>
      <Row className={classes.wrapper}>
        <Col
          span={6}
          offset={6}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 6, offset: 6 }}
          xl={{ span: 6, offset: 6 }}
          xxl={{ span: 6, offset: 6 }}
        >
          <RightSide />
        </Col>
        <Col
          className={classes.form}
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 8, offset: 2 }}
          xl={{ span: 8, offset: 2 }}
          xxl={{ span: 8, offset: 2 }}
        >
          <LeftSide />
        </Col>
      </Row>
    </>
  );
};
export default FooterHome;
