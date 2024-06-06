import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const TrocasEDevolucoes = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h1>Trocas e Devoluções</h1>
        <p>
          Na TechStore Luiza, queremos garantir sua total satisfação com suas compras. Se, por qualquer motivo, você não estiver satisfeito com um produto, aceitamos trocas e devoluções dentro de 30 dias após a compra.
        </p>
        <p>
          Para iniciar uma troca ou devolução, entre em contato com nosso atendimento ao cliente com seu número de pedido e o motivo da devolução. Forneceremos instruções detalhadas sobre como proceder.
        </p>
        <p>
          O produto deve estar em sua condição original, com todas as etiquetas e embalagens intactas. Após recebermos e inspecionarmos o produto devolvido, processaremos seu reembolso ou troca.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TrocasEDevolucoes;
