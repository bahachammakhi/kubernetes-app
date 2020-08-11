import React, { useEffect } from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import deleteDonationAction from '../../redux/Donations/deleteDonation';
import axios from 'axios';
const { confirm } = Modal;

const DeleteDonation = (props?: any) => {
  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();

  function showDeleteConfirm() {
    let x = localStorage.getItem('token');
    console.log('token', props.data._id);
    confirm({
      title: 'Are you sure delete this task?',
      //   icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        // dispatch(deleteDonationAction.deleteDonationRequest({ data: props.data._id }));
        axios
          .delete(`https://hopeigc-api.herokuapp.com/api/v1/donations/${props.data._id}`, {
            headers: {
              Authorization: `Bearer ${x}`,
            },
            data: { author: props.data.author._id },
          })

          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log('payload', props.data.author._id);
          });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <div>
      <Button onClick={showDeleteConfirm} type="dashed">
        Delete
      </Button>
    </div>
  );
};
export default DeleteDonation;
