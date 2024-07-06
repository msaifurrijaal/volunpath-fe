import React from 'react';

import Image from 'next/image';

import { Grid, Typography } from '@mui/material';

import Partner1 from '@assets/images/pages/home/partner1.png';
import Partner2 from '@assets/images/pages/home/partner2.png';
import Partner3 from '@assets/images/pages/home/partner3.png';
import Partner4 from '@assets/images/pages/home/partner4.png';

import styles from './Partner.module.scss';

const Partner = () => {
  return (
    <section id="partner" className={styles.partner}>
      <div className={styles.container}>
        <Typography className={styles.partner__subtitle}>Mitra Kami</Typography>
        <Typography className={styles.partner__title}>
          Kami Menjalin Kerjasama dengan Lembaga Terkait
        </Typography>
        <Typography className={styles.partner__description}>
          Mitra kami dalam kegiatan di seluruh Indonesia
        </Typography>
        <Grid
          container
          spacing={2}
          style={{ justifyContent: 'center', marginTop: 20 }}
        >
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={3} style={{ textAlign: 'center' }}>
                <Image src={Partner1} alt="Partner" width={100} height={100} />
              </Grid>
              <Grid item xs={6} sm={6} md={3} style={{ textAlign: 'center' }}>
                <Image src={Partner2} alt="Partner" width={100} height={100} />
              </Grid>
              <Grid item xs={6} sm={6} md={3} style={{ textAlign: 'center' }}>
                <Image src={Partner3} alt="Partner" width={100} height={100} />
              </Grid>
              <Grid item xs={6} sm={6} md={3} style={{ textAlign: 'center' }}>
                <Image src={Partner4} alt="Partner" width={100} height={100} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Partner;
