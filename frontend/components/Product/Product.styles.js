import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  flex: 0 0 200px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const ProductInfo = styled.div`
  margin-top: 10px;
`;

export const ProductTitle = styled.h4`
  font-size: 1rem;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007BFF;
`;
