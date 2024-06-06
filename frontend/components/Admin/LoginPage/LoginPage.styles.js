import styled, { keyframes } from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1f1f1f;
`;
export const LoginContainer = styled.div`
  background-color: rgba(46, 46, 46, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #fff;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const Header = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
`;

export const LoginFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #3a3a3a;
  color: #fff;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:hover {
    background-color: #444;
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
