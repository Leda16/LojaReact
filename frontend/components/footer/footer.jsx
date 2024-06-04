import React from 'react';
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
  FooterBottomText
} from './Footer.styles';

const Footer = () => {
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
          <FooterLink href="mailto:suporte@cliquebom.com">E-mail: suporte@cliquebom.com</FooterLink>
          <FooterLink href="tel:+5592992967444">WhatsApp: (092) 99296-7444 / (046) 99105-5481</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>NEWSLETTER</FooterTitle>
          <FooterText>Assine nossa newsletter e receba as melhores ofertas DE GRAÇA!</FooterText>
          <FooterInput type="email" placeholder="Seu e-mail" />
          <FooterButton>Enviar</FooterButton>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterBottomText>© TechStore - Com tecnologia própria</FooterBottomText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
