import React from 'react';

import Hero from '@/components/ui/pages/home/Hero';
import Navbar from '@/components/partials/Navbar';
import Footer from '@/components/partials/Footer';
import Event from '@/components/ui/pages/home/Event';
import Category from '@/components/ui/pages/home/Category';
import Volunteer from '@/components/ui/pages/home/Volunteer';
import Partner from '@/components/ui/pages/home/Partner';

const Home = () => {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <Category />
        <Event />
        <Volunteer />
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
