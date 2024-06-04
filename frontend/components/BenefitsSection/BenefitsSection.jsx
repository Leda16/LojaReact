import React from 'react';
import { BenefitsContainer, BenefitItem, BenefitIcon, BenefitTitle, BenefitDescription } from './BenefitsSection.styles';
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
    <BenefitsContainer>
      {benefits.map((benefit, index) => (
        <BenefitItem key={index}>
          <BenefitIcon>{benefit.icon}</BenefitIcon>
          <BenefitTitle>{benefit.title}</BenefitTitle>
          <BenefitDescription>{benefit.description}</BenefitDescription>
        </BenefitItem>
      ))}
    </BenefitsContainer>
  );
};

export default BenefitsSection;
