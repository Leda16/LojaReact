import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  NewsletterContainer,
  InputGroup,
  TextArea,
  SendButton,
  LoadingBar,
  Title,
  Form,
  EmailCount
} from './Newsletter.styles';

const Newsletter = () => {
  const [emails, setEmails] = useState([]);
  const [message, setMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await axios.get(`${process.env.API_URL}/api/newsletterRoutes/emails`, { withCredentials: true });
        setEmails(res.data);
      } catch (err) {
        console.error('Erro ao buscar emails:', err);
      }
    };

    const fetchCsrfToken = async () => {
      try {
        const res = await axios.get(`${process.env.API_URL}/api/csrf-token`, { withCredentials: true });
        setCsrfToken(res.data.csrfToken);
      } catch (err) {
        console.error('Erro ao buscar CSRF token:', err);
      }
    };

    fetchEmails();
    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.API_URL}/api/newsletterRoutes/send`,
        { emails, message },
        {
          headers: {
            'csrf-token': csrfToken,
          },
          withCredentials: true,
        }
      );
      setProgress(100);
      toast.success('Todos os emails foram enviados com sucesso!');
    } catch (err) {
      toast.error('Erro ao enviar os emails. Tente novamente.');
    }
  };

  return (
    <NewsletterContainer>
      <Title>Enviar Promoçoes</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <TextArea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </InputGroup>
        <SendButton type="submit">Enviar</SendButton>
      </Form>
      <EmailCount>Total de emails: {emails.length}</EmailCount>
      <LoadingBar progress={progress} />
    </NewsletterContainer>
  );
};

export default Newsletter;
