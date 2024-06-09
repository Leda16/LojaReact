import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  LoginContainer,
  LoginFormContainer,
  Input,
  Button,
  Header,
  Logo,
  Background
} from './LoginPage.styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/csrf-token', { withCredentials: true });
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error('Erro ao buscar CSRF token:', error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.API_URL}/api/admin/login`,
        { username, password },
        {
          headers: { 'csrf-token': csrfToken },
          withCredentials: true, 
        }
      );
      localStorage.setItem('Admintoken', res.data.token);
      toast.success('Login realizado com sucesso!');
      router.push('/admin');
    } catch (err) {
      console.error(err);
      toast.error('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <Background>
      <LoginContainer>
        <Logo onClick={() => router.push('/')}>TechStore</Logo>
        <Header>Admin Login</Header>
        <LoginFormContainer onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </LoginFormContainer>
      </LoginContainer>
      <ToastContainer />
    </Background>
  );
};

export default LoginPage;
