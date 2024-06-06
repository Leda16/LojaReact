import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PoliticaDeEntrega = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h1>Política de Entrega</h1>
        <p>
          Na TechStore Luiza, trabalhamos para garantir que seus pedidos cheguem até você de forma rápida e segura. Oferecemos frete grátis para todo o Brasil em pedidos selecionados.
        </p>
        <p>
          Nossas entregas podem levar até 7 dias úteis, dependendo da localização. Você receberá um código de rastreamento assim que seu pedido for enviado, para que possa acompanhar a entrega em tempo real.
        </p>
        <p>
          Se houver qualquer atraso ou problema com a entrega, nossa equipe de atendimento ao cliente estará disponível para ajudar a resolver a situação o mais rápido possível.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaDeEntrega;
