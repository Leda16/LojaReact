import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { 
  FooterContainer, 
  FooterContent, 
  FooterSection, 
  FooterTitle, 
  FooterLink, 
  FooterText, 
  FooterInput, 
  FooterButton, 
  FooterBottom, 
  FooterBottomText, 
  PaymentMethods 
} from './Footer.styles';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const res = await axios.get(`${process.env.API_URL}/api/csrf-token`, { withCredentials: true });
        setCsrfToken(res.data.csrfToken);
      } catch (err) {
        console.error('Erro ao buscar CSRF token:', err);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.API_URL}/api/newsletter`, 
        { email }, 
        {
          headers: {
            'csrf-token': csrfToken
          },
          withCredentials: true
        }
      );
      toast.success(res.data.msg);
    } catch (err) {
      toast.error('Erro ao registrar email. Tente novamente.');
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>LINKS RÁPIDOS</FooterTitle>
          <FooterLink href="/">Início</FooterLink>
          <FooterLink href="/pesquisar">Pesquisar</FooterLink>
          <FooterLink href="/ofertas">Ofertas</FooterLink>
          <FooterLink href="/quem-somos">Quem Somos</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>INFORMAÇÕES</FooterTitle>
          <FooterLink href="/rastrear-pedido">Rastrear Pedido</FooterLink>
          <FooterLink href="/compra-segura">Compra Segura</FooterLink>
          <FooterLink href="/politica-de-privacidade">Política de Privacidade</FooterLink>
          <FooterLink href="/politica-de-entrega">Política de Entrega</FooterLink>
          <FooterLink href="/trocas-e-devolucoes">Trocas e Devoluções</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>ATENDIMENTO AO CLIENTE</FooterTitle>
          <FooterLink>Email: suporte@techstore.com</FooterLink>
          <FooterLink>WhatsApp: (11) 99922-1100</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>NOTÍCIAS</FooterTitle>
          <FooterText>Assine nossas notícias e receba as melhores ofertas DE GRAÇA!</FooterText>
          <form onSubmit={handleSubmit}>
            <FooterInput 
              type="email" 
              placeholder="Seu e-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <FooterButton type="submit">Enviar</FooterButton>
          </form>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterBottomText>© TechStore - Com tecnologia própria</FooterBottomText>
        <PaymentMethods>
          <img src="/images/visa.svg" alt="Visa" />
          <img src="/images/mastercard.svg" alt="Mastercard" />
          <img src="/images/amex.svg" alt="Amex" />
          <img src="/images/paypal.svg" alt="PayPal" />
          <img src="/images/pix.svg" alt="Pix" />
        </PaymentMethods>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
