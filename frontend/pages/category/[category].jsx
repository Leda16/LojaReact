import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CategoryCard from '../../components/userProducts/CategoryCard';
import ProductCard from '../../components/userProducts/ProductCard';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [categoryData, setCategoryData] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const fetchCategory = async () => {
        try {
          const res = await axios.get(`${process.env.API_URL}/api/categories/${category}`);
          setCategoryData(res.data.category);
          setProducts(res.data.products);
        } catch (err) {
          console.error('Erro ao buscar categoria:', err);
        }
      };

      fetchCategory();
    }
  }, [category]);

  return (
    <>
      <Navbar />
      <CategoryPageContainer>
        {categoryData ? (
          <StyledCategoryCard title={categoryData.name} icon={categoryData.icon}>
            <ProductsContainer>
              {products.length > 0 ? (
                products.map((product) => (
                  <StyledProductCard
                    key={product._id}
                    name={product.name}
                    price={`R$ ${product.price}`}
                    image={product.image}
                    rating={product.rating}
                  />
                ))
              ) : (
                <p>Nenhum produto disponível</p>
              )}
            </ProductsContainer>
          </StyledCategoryCard>
        ) : (
          <p>Carregando...</p>
        )}
      </CategoryPageContainer>
      <Footer />
    </>
  );
};

export default CategoryPage;

const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem auto;
  padding: 0 2rem;
  max-width: 1200px;
`;

const StyledCategoryCard = styled(CategoryCard)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const StyledProductCard = styled(ProductCard)`
  flex: 1 1 calc(20% - 1rem); /* Ajuste para 5 colunas */
  max-width: calc(20% - 1rem); /* Ajuste para 5 colunas */
  box-sizing: border-box;
`;
