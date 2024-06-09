import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  CartContainer,
  CartItem,
  CartItemInfo,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  RemoveButton,
  CheckoutButton
} from './Cart.styles';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${process.env.API_URL}/api/cart`, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        });
        setCart(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar carrinho:', error);
      }
    };

    fetchCart();
  }, []);

  const removeItem = async (productId) => {
    try {
      await axios.post(`${process.env.API_URL}/api/cart/remove`, { productId }, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      setCart(cart.filter(item => item.productId._id !== productId));
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
    }
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <CartContainer>
      {cart.map(item => (
        <CartItem key={item.productId._id}>
          <CartItemInfo>
            <CartItemName>{item.productId.name}</CartItemName>
            <CartItemPrice>R$ {item.productId.price.toFixed(2)}</CartItemPrice>
            <CartItemQuantity>Quantidade: {item.quantity}</CartItemQuantity>
            <RemoveButton onClick={() => removeItem(item.productId._id)}>Remover</RemoveButton>
          </CartItemInfo>
        </CartItem>
      ))}
      <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
    </CartContainer>
  );
};

export default Cart;
