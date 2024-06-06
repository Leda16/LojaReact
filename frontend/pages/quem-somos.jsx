import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const QuemSomos = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h1>Quem Somos</h1>
        <p>
          Bem-vindo à TechStore Luiza! Somos uma loja online dedicada a oferecer uma ampla variedade de produtos de alta qualidade. Nossa missão é proporcionar uma experiência de compra excepcional, com preços competitivos e um atendimento ao cliente de excelência.
        </p>
        <p>
          Fundada em 2023, a TechStore Luiza tem se destacado no mercado por sua confiabilidade e inovação. Trabalhamos com os melhores fornecedores para garantir que nossos clientes recebam produtos de ponta, desde eletrônicos até itens de uso diário.
        </p>
        <p>
          Obrigado por escolher a TechStore Luiza. Estamos aqui para atendê-lo e tornar sua experiência de compra a melhor possível.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default QuemSomos;
