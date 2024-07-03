import React from 'react';

import LayoutAppsWrapper from '@/components/layout/apps/LayoutAppsWrapper';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutAppsWrapper>{children}</LayoutAppsWrapper>;
};

export default Layout;
