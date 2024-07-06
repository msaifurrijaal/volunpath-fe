import React from 'react';

import { Box, Typography } from '@mui/material';

import styles from './CategoryCard.module.scss';

type CategoryCardProps = {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  description: string;
};

const CategoryCard = ({
  title,
  icon,
  bgColor,
  description,
}: CategoryCardProps) => {
  return (
    <div className={styles.card}>
      <Box bgcolor={bgColor} className={styles.card__wrapperIcon}>
        {icon}
      </Box>
      <Typography className={styles.card__title}>{title}</Typography>
      <Typography className={styles.card__description} color="GrayText">
        {description}
      </Typography>
    </div>
  );
};

export default CategoryCard;
