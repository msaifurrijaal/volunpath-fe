'use client';
import React from 'react';

import Link from 'next/link';

import { Grid, Typography } from '@mui/material';

import { useQuery } from '@tanstack/react-query';

import styles from './Event.module.scss';
import { getEvents } from '@/services/event/getEvents';
import EventCard from './elements/EventCard';
import type { EventType } from '@/types/eventTypes';
import SkeletonGrid from '../../commond/skeleton/SkeletonGrid';

const skeletonArray = Array.from({ length: 4 });

const Event = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: query,
  } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });

  console.log(error, isError);

  return (
    <section className={styles.event}>
      <div className={styles.container}>
        <div className={styles.event__wrapper}>
          <Typography className={styles.event__wrapper__title}>
            Rekomendasi Kegiatan Kami
          </Typography>
          <Typography
            className={styles.event__wrapper__description}
            color="GrayText"
          >
            Waktu adalah hal yang sangat penting! Bergabunglah dengan misi kami
            SEKARANG untuk memberikan dampak langsung, Setiap detik berarti!
          </Typography>
          <Grid container spacing={3} mt={2}>
            {!isLoading &&
              isSuccess &&
              query &&
              query.data.data.slice(0, 4).map((event: EventType) => (
                <Grid key={event.id} item xs={12} sm={6} md={4} lg={3}>
                  <EventCard
                    category={event.category.name}
                    date={event.date}
                    location={event.location}
                    image={event.image}
                    desc={event.description}
                    title={event.title}
                  />
                </Grid>
              ))}
            {isLoading && (
              <SkeletonGrid listSkeleton={skeletonArray} height={400} />
            )}
          </Grid>
          {isError && <Typography>{error.message}</Typography>}
          <Link href="/event" className={styles.event__wrapper__link}>
            Lihat Semua
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Event;
