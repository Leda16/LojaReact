import React, { useEffect, useState } from 'react';
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
    <div className="flex flex-col gap-8 my-8 px-8">
      {rows && rows.length > 0 ? (
        rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-gray-800 flex items-center gap-2">
                {row.title} <span>{row.icon}</span>
              </h2>
              <button className="text-teal-700 text-sm underline" onClick={() => handleShowMore(row.category)}>
                Mostrar mais
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {row.products.map((product, productIndex) => (
                <div key={productIndex} className="flex-none w-56 bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105" onClick={() => router.push(`/product/${product._id}`)}>
                  <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="text-lg text-gray-800">{product.name}</span>
                    <span className="text-xl text-teal-700 font-bold">R$ {product.price}</span>
                    <span className="text-sm text-gray-700">ou <strong>12x</strong> de <strong>R$ {(product.price / 12).toFixed(2)}</strong></span>
                    <span className="text-sm font-bold text-green-600 flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-600' : 'bg-red-600'}`}></span>
                      Disponível
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
