import React from 'react';

import Image from 'next/image';

import { Button, Grid, Typography } from '@mui/material';

import { MdOutlineHandshake } from 'react-icons/md';
import { MdVolunteerActivism } from 'react-icons/md';

import HeroImage from '../../../../assets/images/pages/home/hero_image.jpg';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <Grid container className={styles.container}>
        <Grid item xs={12} md={6} className={styles.hero__contentA}>
          <Typography className={styles.hero__contentA__title}>
            Empower Your Passion, Change the World
          </Typography>
          <Typography className={styles.hero__contentA__description}>
            Discover volunteer opportunities that match your interests and
            skills. Join us in making a positive impact in communities around
            the globe.
          </Typography>
          <div className={styles.hero__contentA__buttonContainer}>
            <Button variant="contained" color="primary">
              Join Our Activity
            </Button>
          </div>
          <Grid container spacing={4} mt={2}>
            <Grid item xs={4}>
              <Typography className={styles.hero__contentA__caption}>
                15K
              </Typography>
              <Typography className={styles.hero__contentA__subtitle}>
                Incridible
                <br />
                Volunters
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.hero__contentA__caption}>
                100+
              </Typography>
              <Typography className={styles.hero__contentA__subtitle}>
                Successful
                <br />
                Campaigns
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.hero__contentA__caption}>
                600+
              </Typography>
              <Typography className={styles.hero__contentA__subtitle}>
                Montly
                <br />
                Donors
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={styles.hero__contentB}>
          <div className={styles.hero__contentB__imageContainer}>
            <Image src={HeroImage} alt="Hero Image" />
          </div>
          <div className={styles.hero__contentB__iconA}>
            <MdOutlineHandshake size={24} color="#FF7F3E" />
            <Typography className={styles.hero__contentB__iconA__caption}>
              Connect With People
            </Typography>
          </div>
          <div className={styles.hero__contentB__iconB}>
            <MdVolunteerActivism size={24} color="#06D001" />
            <Typography className={styles.hero__contentB__iconA__caption}>
              Become Volunteer
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
