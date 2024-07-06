import React from 'react';

import { Grid, Typography } from '@mui/material';

import {
  MdFoodBank,
  MdHealthAndSafety,
  MdMenuBook,
  MdOutlineHandshake,
} from 'react-icons/md';

import styles from './Category.module.scss';
import CategoryCard from './elements/CategoryCard';

const listCategory = [
  {
    title: 'Healthy Food',
    icon: <MdFoodBank color="green" />,
    bgColor: '#BFF6C3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Medical Help',
    icon: <MdHealthAndSafety color="blue" />,
    bgColor: '#C6F0FF',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Social Service',
    icon: <MdOutlineHandshake color="orange" />,
    bgColor: '#FFE9C6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Education',
    icon: <MdMenuBook color="red" />,
    bgColor: '#FFC6C6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Category = () => {
  return (
    <section id="category" className={styles.category}>
      <div className={styles.container}>
        <div className={styles.category__wrapper}>
          <Typography className={styles.category__wrapper__subtitle}>
            Kategori
          </Typography>
          <Typography className={styles.category__wrapper__title}>
            Kegiatan Kami
          </Typography>
          <Grid container spacing={6} mt={2}>
            {listCategory.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CategoryCard
                  title={item.title}
                  icon={item.icon}
                  bgColor={item.bgColor}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Category;
