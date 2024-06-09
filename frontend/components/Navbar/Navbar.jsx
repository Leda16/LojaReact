import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
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
import AuthModal from './AuthModal';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.API_URL}/api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
                {categories.map((category) => (
                  <DropdownItem key={category._id}>
                    <Link href={`/category/${category.name}`}>{category.name}</Link>
                  </DropdownItem>
                ))}
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
                {categories.map((category) => (
                  <DropdownItem key={category._id}>
                    <Link href={`/category/${category.name}`}>{category.name}</Link>
                  </DropdownItem>
                ))}
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
        <CartContainer>
            <Link href="/cart">
              <FaShoppingCart />
            </Link>
          </CartContainer>
          <SearchBar>
            <input type="text" placeholder="Buscar produtos..." />
            <FaSearch />
          </SearchBar>
          <AuthContainer onClick={openModal}>
            <p>Entre ou <br /> cadastrar-se</p>
          </AuthContainer>

        </NavbarMenu>
      </NavbarContainer>
      <AuthModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};

export default Navbar;
