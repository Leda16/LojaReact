import React from 'react';
import { useRouter } from 'next/router';
import { productRows } from '../../data/products';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryData = productRows.find((row) => row.category === category);

  if (!categoryData) {
    return <p>Category not found</p>;
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '2rem' }}>
      <h1>{categoryData.title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {categoryData.products.map((product, index) => (
          <div key={index} style={{ flex: '0 0 200px', padding: '1rem', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
            <div style={{ marginTop: '1rem' }}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
