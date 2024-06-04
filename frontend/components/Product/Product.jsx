import React from 'react';
import { ProductContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice } from './Product.styles';

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;
