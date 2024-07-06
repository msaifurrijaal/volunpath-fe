'use client';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import { Grid, Typography } from '@mui/material';

import styles from './Event.module.scss';
import { getEvents } from '@/services/event/getEvents';
import EventCard from './elements/EventCard';
import type { EventType } from '@/types/eventTypes';
import SkeletonGrid from '../../commond/skeleton/SkeletonGrid';

const skeletonArray = Array.from({ length: 4 });

const Event = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await getEvents();

        setIsLoading(false);

        setEvents(response.data.data);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
            {events && !isLoading ? (
              events.map((event) => (
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
              ))
            ) : (
              <SkeletonGrid listSkeleton={skeletonArray} height={400} />
            )}
          </Grid>
          <Link href="/event" className={styles.event__wrapper__link}>
            Lihat Semua
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Event;
