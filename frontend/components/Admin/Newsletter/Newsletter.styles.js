import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: #212631;
  color: #fff;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const EmailCount = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
`;

export const SendButton = styled(Button)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e9ecef;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: ${(props) => props.progress}%;
    height: 100%;
    background-color: #007bff;
    transition: width 0.3s ease-in-out;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;
