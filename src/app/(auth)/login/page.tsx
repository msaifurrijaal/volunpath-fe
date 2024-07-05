import React from 'react';

import Login from '@/views/login';

const LoginPage = ({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) => {
  return <Login searchParams={searchParams} />;
};

export default LoginPage;
