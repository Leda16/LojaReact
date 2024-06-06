import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ name, price, image, rating }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Details>
        <ProductName>{name}</ProductName>
        <Rating>
          {[...Array(5)].map((star, index) => (
            <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
          ))}
        </Rating>
        <Price>{price}</Price>
        <ButtonContainer>
          <AddToCartButton>Adicionar à Sacola</AddToCartButton>
          <BuyNowButton>Comprar Agora</BuyNowButton>
        </ButtonContainer>
      </Details>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const Details = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #2c7a7b;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AddToCartButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const BuyNowButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
