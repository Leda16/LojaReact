import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductInfo from '../../components/ProductPage/ProductInfo';
import ProductPrice from '../../components/ProductPage/ProductPrice';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { PageContainer, LeftContainer, RightContainer } from './ProductPage.styles';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`${process.env.API_URL}/api/user/products/${id}`);
          setProduct(res.data);
        } catch (err) {
          console.error('Erro ao buscar produto:', err);
        }
      };

      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <PageContainer>
        {product ? (
          <>
            <LeftContainer>
              <ProductInfo product={product} />
            </LeftContainer>
            <RightContainer>
              <ProductPrice product={product} />
            </RightContainer>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </PageContainer>
      <Footer />
    </div>
  );
};

export default ProductPage;
