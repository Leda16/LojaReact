import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
