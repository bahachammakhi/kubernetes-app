import React from 'react';
import classes from './homeContainer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Modal, Input, Button } from 'antd';
import NumberSection from '../../components/ui/numbersSection/NumberSection';
import StoneGrid from '../../components/ui/stonegrid/StoneGrid';
import image1 from '../../assets/rb.jpg';
import DonationBackground from '../../components/ui/donationBackground/DonationBackground';
import Services from '../../components/ui/services/Services';
import Sponsors from '../../components/ui/sponsor/Sponsors';
const HomeContainer = () => {
  // const redux = useSelector((state: any) => state);
  // const dispatch = useDispatch();

  const data = [
    {
      title: 'Become a volunteer',
      parag:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: image1,
    },
    {
      title: 'Become a volunteer',
      parag:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: image1,
    },
    {
      title: 'Become a volunteer',
      parag:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: image1,
    },
  ];
  return (
    <>
      <DonationBackground />
      <div className={classes.stone}>
        <StoneGrid />
      </div>
      <div className={classes.services}>
        <Services data={data} />
      </div>
      <NumberSection />
      <Sponsors />
    </>
  );
};

export default HomeContainer;
