import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #212631;
  color: #fff;
  border-radius: 10px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  &:hover {
    border-color: #007bff;
  }
  height: 40px;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  height: 100px;
  &:hover {
    border-color: #007bff;
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  height: 40px;
  &:hover {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
