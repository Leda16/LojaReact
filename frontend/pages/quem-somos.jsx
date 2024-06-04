import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const QuemSomos = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <h1>Quem Somos</h1>
        <p>Conteúdo da página quem somos.</p>
      </main>
      <Footer />
    </div>
  );
};

export default QuemSomos;
