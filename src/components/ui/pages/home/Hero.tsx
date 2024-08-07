import React from 'react';

import Image from 'next/image';

import { Button, Grid, Typography } from '@mui/material';

import { MdOutlineHandshake } from 'react-icons/md';
import { MdVolunteerActivism } from 'react-icons/md';
import { MdPersonalVideo } from 'react-icons/md';

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
            Temukan peluang menjadi sukarelawan yang sesuai dengan minat dan
            keterampilan Anda. Bergabunglah dengan kami dalam memberikan dampak
            positif pada komunitas di seluruh dunia.
          </Typography>
          <div className={styles.hero__contentA__buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: 'none' }}
            >
              Gabung Aktivitas Kami
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={styles.hero__contentA__buttonContainer__buttonOutline}
              startIcon={<MdPersonalVideo />}
            >
              Dokumentasi Kegiatan
            </Button>
          </div>
          <Grid container spacing={4} mt={2}>
            <Grid item xs={4}>
              <Typography className={styles.hero__contentA__caption}>
                15K
              </Typography>
              <Typography className={styles.hero__contentA__subtitle}>
                Relawan
                <br />
                Terbaik
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.hero__contentA__caption}>
                100+
              </Typography>
              <Typography className={styles.hero__contentA__subtitle}>
                Kegiatan
                <br />
                Terlaksana
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.hero__contentA__caption}>
                600+
              </Typography>
              <Typography className={styles.hero__contentA__subtitle}>
                Donatur
                <br />
                Bulanan
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
