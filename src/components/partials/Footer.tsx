import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import { Grid, Typography } from '@mui/material';

import styles from './Footer.module.scss';

import Logo from '../../assets/images/logo/logo_rectangle.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <div className={styles.footer__column}>
              <Image
                src={Logo}
                alt="Logo buahkita"
                className="max-w-40 -ml-2"
              />
              <Typography className={styles.footer__column__title}>
                Kontak Kami
              </Typography>
              <p>management@volunpath.co.id</p>
              <p>Malang, Indonesia</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={styles.footer__column}>
              <Typography className={styles.footer__column__title}>
                Pertanyaan
              </Typography>
              <ul>
                <li>
                  <Link href="#">Status Pendaftaran</Link>
                </li>
                <li>
                  <Link href="#">Pengajuan Kerjasama</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={styles.footer__column}>
              <Typography className={styles.footer__column__title}>
                Tautan Berguna
              </Typography>
              <ul className="text-dark">
                <li>
                  <Link href="#home">Penawaran Spesial</Link>
                </li>
                <li>
                  <Link href="#about">Kartu Hadiah</Link>
                </li>
                <li>
                  <Link href="#projects">Periklanan</Link>
                </li>
                <li>
                  <Link href="#services">Jangka Waktu Penggunaan</Link>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
