import React from 'react';

import { Grid, Skeleton } from '@mui/material';

type SkeletonGridProps = {
  listSkeleton: unknown[];
  height: number;
};

const SkeletonGrid = ({ listSkeleton, height }: SkeletonGridProps) => {
  return (
    <>
      {listSkeleton.map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant="rounded" width="100%" height={height} />
        </Grid>
      ))}
    </>
  );
};

export default SkeletonGrid;
