import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Pesquisar = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <h1>Pesquisar</h1>
        <p>Conteúdo da página de pesquisa.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Pesquisar;
