import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Ofertas = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <h1>Ofertas</h1>
        <p>Conteúdo da página de ofertas.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Ofertas;
