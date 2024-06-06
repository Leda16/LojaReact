import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaTachometerAlt, FaBox, FaTags, FaEnvelope, FaChartLine, FaTrafficLight, FaTruck, FaUsers, FaUserFriends } from 'react-icons/fa';
import { SidebarContainer, SidebarLink, SidebarTitle, DropdownButton, DropdownContent, IconWrapper } from './Sidebar.styles';

const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({
    products: false,
    promotions: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <SidebarContainer>
      <SidebarLink href="/admin/">
        <IconWrapper><FaTachometerAlt /></IconWrapper>
        Inicio
      </SidebarLink>
      <SidebarTitle>Gerenciar</SidebarTitle>
      <DropdownButton onClick={() => toggleDropdown('products')}>
        <IconWrapper><FaBox /></IconWrapper>
        Produtos
        {dropdowns.products ? <FaChevronDown /> : <FaChevronRight />}
      </DropdownButton>
      {dropdowns.products && (
        <DropdownContent>
          <SidebarLink href="/admin/products/create">Criar Produto</SidebarLink>
          <SidebarLink href="/admin/products/update">Atualizar Produto</SidebarLink>
          <SidebarLink href="/admin/products/delete">Deletar Produto</SidebarLink>
          <SidebarLink href="/admin/products/manage">Gerenciar Categorias</SidebarLink>
        </DropdownContent>
      )}
      <DropdownButton onClick={() => toggleDropdown('promotions')}>
        <IconWrapper><FaTags /></IconWrapper>
        Promoções
        {dropdowns.promotions ? <FaChevronDown /> : <FaChevronRight />}
      </DropdownButton>
      {dropdowns.promotions && (
        <DropdownContent>
          <SidebarLink href="/admin/promotions/create">Criar Promoção</SidebarLink>
          <SidebarLink href="/admin/promotions/update">Atualizar Promoção</SidebarLink>
          <SidebarLink href="/admin/promotions/delete">Deletar Promoção</SidebarLink>
        </DropdownContent>
      )}
      <SidebarLink href="/admin/newsletter">
        <IconWrapper><FaEnvelope /></IconWrapper>
        Enviar Newsletter
      </SidebarLink>
      <SidebarLink href="/admin/financial">
        <IconWrapper><FaChartLine /></IconWrapper>
        Ver Financeiro
      </SidebarLink>
      <SidebarLink href="/admin/traffic">
        <IconWrapper><FaTrafficLight /></IconWrapper>
        Ver Tráfego
      </SidebarLink>
      <SidebarLink href="/admin/orders">
        <IconWrapper><FaTruck /></IconWrapper>
        Gerenciar Pedidos
      </SidebarLink>
      <SidebarLink href="/admin/users">
        <IconWrapper><FaUsers /></IconWrapper>
        Gerenciar Usuários
      </SidebarLink>
      <SidebarLink href="/admin/referrals">
        <IconWrapper><FaUserFriends /></IconWrapper>
        Gerenciar Indicações
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
