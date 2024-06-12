import React from 'react';
import { FaLock, FaTruck, FaHeadset, FaUndo } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLock size={40} color="#007BFF" />,
    title: 'Compra Segura',
    description: 'Ambiente seguro para pagamentos online',
  },
  {
    icon: <FaTruck size={40} color="#007BFF" />,
    title: 'Frete Grátis',
    description: 'Envio rápido e acompanhado com código de rastreio',
  },
  {
    icon: <FaHeadset size={40} color="#007BFF" />,
    title: 'Suporte Profissional',
    description: 'Equipe de suporte de extrema qualidade a semana toda',
  },
  {
    icon: <FaUndo size={40} color="#007BFF" />,
    title: 'Satisfação ou Reembolso',
    description: 'Caso haja algo, devolvemos seu dinheiro com velocidade',
  },
];

const BenefitsSection = () => {
  return (
    <div className="flex justify-around items-center py-8 bg-gray-100 border-t-4 border-b-4 border-blue-500">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-xs">
          <div className="mb-4">{benefit.icon}</div>
          <h3 className="text-xl text-blue-500 mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
