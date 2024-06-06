import React from 'react';
import styled from 'styled-components';

const CategoryCard = ({ title, icon, children }) => {
  return (
    <Card>
      <CardHeader>
        <Title>{icon} {title}</Title>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

export default CategoryCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
