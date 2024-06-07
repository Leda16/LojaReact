import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import axios from 'axios';

const ProductList = () => {
  const [rows, setRows] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesRes = await axios.get(`${process.env.API_URL}/api/user/categories`);
        const productsRes = await axios.get(`${process.env.API_URL}/api/user/products`);
        const categories = categoriesRes.data;
        const products = productsRes.data;

        const formattedRows = categories.map(category => {
          const categoryProducts = products.filter(product => product.category === category.name);
          return {
            title: category.name,
            icon: category.icon,
            category: category.name,
            products: categoryProducts
          };
        });

        setRows(formattedRows);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
      }
    };

    fetchData();
  }, []);

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
                <ProductCard key={productIndex} onClick={() => router.push(`/product/${product._id}`)}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>R$ {product.price}</ProductPrice>
                    <ProductInstallment>
                      ou <strong>12x</strong> de <strong>R$ {(product.price / 12).toFixed(2)}</strong>
                    </ProductInstallment>
                    <ProductAvailability available={product.stock > 0}>
                      <span className="dot" /> Disponível
                    </ProductAvailability>
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
  padding: 14px;
`;

const ProductCard = styled.div`
  flex: 0 0 220px; /* Increased the width */
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* Slightly increased scale */
  }
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

const ProductInstallment = styled.span`
  font-size: 0.9rem;
  color: #333;
`;

const ProductAvailability = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${props => (props.available ? '#28a745' : '#dc3545')};

  .dot {
    height: 8px;
    width: 8px;
    background-color: ${props => (props.available ? '#28a745' : '#dc3545')};
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }
`;
