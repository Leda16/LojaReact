import styled from 'styled-components';

export const BenefitsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  background-color: #f9f9f9;
  border-top: 5px solid #007BFF; /* Fita azul superior */
  border-bottom: 5px solid #007BFF; /* Fita azul inferior */
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 200px;
`;

export const BenefitIcon = styled.div`
  margin-bottom: 1rem;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  color: #007BFF;
  margin-bottom: 0.5rem;
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;
