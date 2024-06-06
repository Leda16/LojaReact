import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const CompraSegura = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h1>Compra Segura</h1>
        <p>
          Na TechStore Luiza, a segurança das suas compras é nossa prioridade. Utilizamos as mais avançadas tecnologias de criptografia para garantir que suas informações pessoais e financeiras estejam protegidas.
        </p>
        <p>
          Todos os pagamentos são processados por gateways de pagamento confiáveis, garantindo que seus dados estejam seguros em todas as etapas da transação. Além disso, nossos servidores são monitorados 24/7 para prevenir qualquer atividade suspeita.
        </p>
        <p>
          Compre com confiança na TechStore Luiza, sabendo que estamos comprometidos com sua segurança e privacidade.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CompraSegura;
