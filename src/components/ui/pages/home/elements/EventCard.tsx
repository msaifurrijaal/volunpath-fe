import React from 'react';

import Image from 'next/image';

import { Button, Chip, Typography } from '@mui/material';
import { MdLocationOn } from 'react-icons/md';

import styles from './EventCard.module.scss';
import { formatDateToIndonesian } from '@/utils/formatter/formatDateToText';

type EventCardProps = {
  title: string;
  location: string;
  desc: string;
  category: string;
  date: string;
  image: string;
};

const EventCard = ({
  image,
  title,
  location,
  desc,
  category,
  date,
}: EventCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={200}
        height={180}
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <div className={styles.card__date}>
          <Chip
            label={category}
            color={
              category === 'Education'
                ? 'error'
                : category === 'Medical Help'
                  ? 'info'
                  : category === 'Social Service'
                    ? 'warning'
                    : 'success'
            }
            variant="outlined"
            size="small"
          />
          <Typography fontSize={12}>{formatDateToIndonesian(date)}</Typography>
        </div>
        <Typography className={styles.card__title}>{title}</Typography>
        <div className={styles.card__location}>
          <MdLocationOn size={12} color="gray" />
          <Typography className={styles.card__location__text}>
            {location}
          </Typography>
        </div>
        <Typography className={styles.card__description}>{desc}</Typography>
      </div>
      <Button variant="contained" className={styles.card__button}>
        Daftar
      </Button>
    </div>
  );
};

export default EventCard;
