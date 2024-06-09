import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CartItemPrice = styled.span`
  font-size: 1rem;
  color: #28a745;
`;

export const CartItemQuantity = styled.span`
  font-size: 1rem;
`;

export const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #c82333;
  }
`;

export const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: #218838;
  }
`;
