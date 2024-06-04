import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes, FaTruck, FaExchangeAlt, FaHeart, FaCaretDown } from 'react-icons/fa';
import { 
  NavbarContainer, 
  NavbarLink, 
  NavbarLogo, 
  NavbarMenu, 
  NavbarItem, 
  DropdownMenu, 
  DropdownItem, 
  SearchBar, 
  AuthContainer, 
  CartContainer, 
  MenuIcon, 
  MobileMenu,
  TopBar,
  TopBarItem,
  CenterMenu 
} from './Navbar.styles';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <TopBar>
        <TopBarItem><FaTruck /> Frete Grátis para todo o Brasil</TopBarItem>
        <TopBarItem><FaExchangeAlt /> Trocas e Devoluções em até 7 dias</TopBarItem>
        <TopBarItem><FaHeart /> Satisfação Garantida ou Dinheiro de Volta</TopBarItem>
      </TopBar>
      <NavbarContainer>
        <NavbarLogo>
          <Link href="/">TechStore Luiza</Link>
        </NavbarLogo>
        <MenuIcon onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <MobileMenu open={mobileMenuOpen}>
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span>Catálogo <FaCaretDown /></span>
            {showDropdown && (
              <DropdownMenu>
                <DropdownItem>
                  <Link href="/category/kids">Crianças</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/adults">Adultos</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/teens">+15</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/home">Casa</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/electronics">Eletrônicos</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/tools">Ferramentas</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/pets">Animais</Link>
                </DropdownItem>
              </DropdownMenu>
            )}
          </NavbarItem>
          <NavbarItem>
            <Link href="/products">Produtos</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">Contato</Link>
          </NavbarItem>
        </MobileMenu>
        <CenterMenu>
          <NavbarItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span>Catálogo <FaCaretDown /></span>
            {showDropdown && (
              <DropdownMenu>
                <DropdownItem>
                  <Link href="/category/kids">Crianças</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/adults">Adultos</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/teens">+15</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/home">Casa</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/electronics">Eletrônicos</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/tools">Ferramentas</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/category/pets">Animais</Link>
                </DropdownItem>
              </DropdownMenu>
            )}
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">Entrar em contato</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/collections">Coleções</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/tracking">Rastreio</Link>
          </NavbarItem>
        </CenterMenu>
        <NavbarMenu>
          <SearchBar>
            <input type="text" placeholder="Buscar produtos..." />
            <FaSearch />
          </SearchBar>
          <AuthContainer>
            <Link href="/login">
              <FaUser />
            </Link>
          </AuthContainer>
          <CartContainer>
            <Link href="/cart">
              <FaShoppingCart />
            </Link>
          </CartContainer>
        </NavbarMenu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
