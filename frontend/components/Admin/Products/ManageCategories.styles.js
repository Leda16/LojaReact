import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  color: #fff;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #212631;
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #2a2b36;
  color: #fff;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CreateButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
  &:hover {
    background-color: #218838;
  }
`;

export const EditButton = styled(Button)`
  background-color: #ffc107;
  color: #212631;
  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
  &:hover {
    background-color: #c82333;
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #2a2b36;
  color: #fff;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
