import styled from 'styled-components';

export const Container = styled.div`
  width: 550px;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 10px;
`;

export const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

export const ProductCode = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

export const Divider = styled.hr`
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

export const ProductPriceSection = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const PriceLabel = styled.span`
  font-size: 1.2rem;
  color: #333;
`;

export const PriceValue = styled.span`
  font-size: 1.5rem;
  color: #28a745;
  font-weight: bold;
`;

export const Installments = styled.span`
  font-size: 0.9rem;
  color: #333;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    font-size: 1rem;
    color: #333;
  }

  button {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  input {
    width: 40px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;

export const ShippingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  img {
    width: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`;

export const FreeShipping = styled.span`
  font-size: 0.9rem;
  color: #28a745;
  font-weight: bold;
`;

export const GuaranteeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-top: 1rem;
`;

export const GuaranteeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #28a745;
  }
`;

export const GuaranteeTitle = styled.span`
  font-weight: bold;
  color: #28a745;
`;

export const GuaranteeText = styled.span`
  color: #333;
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: 38px;
    height: 24px;
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
`;

export const PopupButton = styled.button`
  padding: 0.5rem 1rem;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #218838;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
