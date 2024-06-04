import React from 'react';
import Product from '../Product/Product';
import { ProductRowContainer, RowTitle } from './ProductRow.styles';

const ProductRow = ({ title, products }) => {
  return (
    <ProductRowContainer>
      <RowTitle>{title}</RowTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </ProductRowContainer>
  );
};

export default ProductRow;
