import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PoliticaDePrivacidade = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h1>Política de Privacidade</h1>
        <p>
          A TechStore Luiza valoriza sua privacidade e se compromete a proteger suas informações pessoais. Esta política de privacidade explica como coletamos, usamos, e protegemos seus dados.
        </p>
        <p>
          Coletamos informações pessoais apenas quando você faz um pedido, se cadastra em nosso site, ou interage conosco. Essas informações são usadas para processar suas compras, melhorar nossos serviços, e personalizar sua experiência de compra.
        </p>
        <p>
          Não compartilhamos suas informações com terceiros, exceto quando necessário para completar sua transação ou conforme exigido por lei. Seus dados são armazenados em servidores seguros e acessíveis apenas por funcionários autorizados.
        </p>
        <p>
          Ao usar nosso site, você concorda com esta política de privacidade. Quaisquer alterações serão publicadas nesta página.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
