import React from 'react';

import Navbar from '../../partials/Navbar';
import Footer from '@/components/partials/Footer';

const LayoutAppsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutAppsWrapper;
