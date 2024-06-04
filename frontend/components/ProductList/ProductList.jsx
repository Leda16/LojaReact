import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ProductList = ({ rows }) => {
  const router = useRouter();

  const handleShowMore = (category) => {
    router.push(`/category/${category}`);
  };

  return (
    <ProductListContainer>
      {rows && rows.length > 0 ? (
        rows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            <RowHeader>
              <RowTitle>
                {row.title} <span>{row.icon}</span>
              </RowTitle>
              <ShowMoreButton onClick={() => handleShowMore(row.category)}>
                Mostrar mais
              </ShowMoreButton>
            </RowHeader>
            <ProductsContainer>
              {row.products.map((product, productIndex) => (
                <ProductCard key={productIndex}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductDetails>
                </ProductCard>
              ))}
            </ProductsContainer>
          </Row>
        ))
      ) : (
        <p>No products available</p>
      )}
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  padding: 0 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RowTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: #2c7a7b;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
`;

const ProductsContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

const ProductCard = styled.div`
  flex: 0 0 200px;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ProductName = styled.span`
  font-size: 1rem;
  color: #333;
`;

const ProductPrice = styled.span`
  font-size: 1.2rem;
  color: #2c7a7b;
  font-weight: bold;
`;
