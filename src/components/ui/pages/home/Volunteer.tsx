import React from 'react';

import Image from 'next/image';

import { Button, Grid, Typography } from '@mui/material';

import Volunteer1 from '@assets/images/pages/home/volunteer_1.jpg';
import Volunteer2 from '@assets/images/pages/home/volunteer_2.jpg';

import styles from './Volunteer.module.scss';

const Volunteer = () => {
  return (
    <section id="volunteer" className={styles.volunteer}>
      <Grid container className={styles.container}>
        <Grid item xs={12} md={6} className={styles.volunteer__contentLeft}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} display={{ xs: 'none', md: 'block' }}>
              <Image
                src={Volunteer1}
                alt="Volunteer"
                className={styles.volunteer__contentLeft__image}
                width={1000}
                height={400}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src={Volunteer2}
                alt="Volunteer"
                className={styles.volunteer__contentLeft__image}
                width={1000}
                height={400}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={styles.volunteer__contentRight}>
          <Typography className={styles.volunteer__contentRight__subtitle}>
            VOLUNTEER
          </Typography>
          <Typography className={styles.volunteer__contentRight__title}>
            Berpartisipasilah dalam kegiatan di seluruh Indonesia
          </Typography>
          <Typography
            className={styles.volunteer__contentRight__description}
            color="GrayText"
          >
            Bergabunglah dengan kami dalam memberikan dampak positif pada
            komunitas di seluruh Indonesia.
          </Typography>
          <div className={styles.volunteer__contentRight__buttonContainer}>
            <Button variant="contained" style={{ textTransform: 'none' }}>
              Gabung Sekarang
            </Button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Volunteer;
