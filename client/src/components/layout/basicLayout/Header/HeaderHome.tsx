import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, message, Dropdown, Modal } from 'antd';
import { DownOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import classes from './header.module.scss';
import loginActions from '../../../../redux/login/login';
import loginActionsRequests from '../../../../redux/login/loginRequest';
import LoginForm from '../../../../components/ui/loginform/LoginForm';
import Signup from '../../../../components/ui/signupform/Signup';
interface Props {
  menu: string[];
}
const HeaderHome = ({ menu }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state);
  const menusItems = menu.map((element, index) => {
    if (element === 'login' && redux.loginRequest && redux.loginRequest.data && redux.loginRequest.data.token)
      element = 'logout';
    if (
      element === 'signup' &&
      redux.loginRequest &&
      redux.loginRequest.data &&
      redux.loginRequest.data.token
    )
      return <></>;
    return (
      <Menu.Item
        onClick={() => {
          switch (element) {
            case 'login': {
              dispatch(loginActions.modalHandler({ name: 'login' }));
              break;
            }
            case 'logout': {
              dispatch(loginActionsRequests.logout());
              message.warning(`Login the next time you gonna donate !`);
              break;
            }
            case 'signup': {
              dispatch(loginActions.modalHandler({ name: 'signup' }));
            }
            default:
              history.push(element === 'home' ? '/' : `/${element}`);
          }
        }}
        className={classes.navmenuitem}
        key={index}
      >
        {element}
      </Menu.Item>
    );
  });
  const ModalHandler = () => {
    dispatch(loginActions.modalHandler({ name: 'login' }));
  };
  return (
    <>
      <div className={classes.logo}>
        {/* <img src={logo} className={classes.logoimg} alt="logo" /> */}
        <h1 className={classes.logotitle}>Hope-APP</h1>
      </div>
      <Menu
        className={classes.menu}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
      >
        {window.innerWidth > 768 ? (
          menusItems
        ) : (
          <Dropdown
            overlay={<Menu>{menusItems}</Menu>}
            placement="bottomCenter"
            overlayClassName={classes.dropdown}
          >
            <MenuUnfoldOutlined
              style={{ fontSize: '1.5rem', color: '#193f85' }}
              onClick={e => e.preventDefault()}
            />
          </Dropdown>
        )}
      </Menu>
      <h1 className={classes.name}>
        {redux.loginRequest &&
          redux.loginRequest.data &&
          redux.loginRequest.data.data &&
          redux.loginRequest.data.data.user &&
          redux.loginRequest.data.data.user.name}
      </h1>
      <Modal
        bodyStyle={{ padding: '50px' }}
        destroyOnClose
        footer={null}
        visible={redux.login.modalOpened}
        onOk={ModalHandler}
        onCancel={ModalHandler}
      >
        <LoginForm />
      </Modal>
      <Signup />
    </>
  );
};

export default HeaderHome;
