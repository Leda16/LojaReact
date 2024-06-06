import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  padding: 2rem 0;
  border-top: 1px solid #e0e0e0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const FooterSection = styled.div`
  margin: 1rem;
  flex: 1;
  min-width: 200px;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

export const FooterLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 1rem;
  color: #666;
`;

export const FooterInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FooterButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`;

export const FooterBottomText = styled.p`
  color: #666;
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;

  img {
    height: 48px;
  }
`;
