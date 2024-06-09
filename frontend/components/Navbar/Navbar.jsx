import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaTruck, FaExchangeAlt, FaHeart, FaCaretDown } from 'react-icons/fa';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let timeoutId;

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
    clearTimeout(timeoutId);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // 300ms delay before hiding the dropdown
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
      <div className="bg-blue-600 text-white text-sm py-2 flex justify-center items-center space-x-4">
        <div className="flex items-center">
          <FaTruck className="mr-2" /> Frete Grátis para todo o Brasil
        </div>
        <div className="flex items-center">
          <FaExchangeAlt className="mr-2" /> Trocas e Devoluções em até 7 dias
        </div>
        <div className="flex items-center">
          <FaHeart className="mr-2" /> Satisfação Garantida ou Dinheiro de Volta
        </div>
      </div>
      <nav className="flex justify-between items-center p-4 bg-white text-gray-800 shadow-md relative z-20">
        <div className="text-2xl font-bold text-purple-700">
          <Link href="/">TechStore Luiza</Link>
        </div>
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`flex-col md:flex-row md:flex ${mobileMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-16 left-0 right-0 md:top-auto bg-white md:bg-transparent md:space-x-6`}>
          <div className="relative md:static" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="flex items-center cursor-pointer py-2 md:py-0">
              <span>Catálogo</span> <FaCaretDown className="ml-1" />
            </div>
            {showDropdown && (
              <div className="absolute bg-white border mt-1 z-20 shadow-lg md:shadow-none w-full md:w-auto">
                {categories.map((category) => (
                  <div key={category._id} className="px-4 py-2 hover:bg-gray-100">
                    <Link href={`/category/${category.name}`}>{category.name}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="py-2 md:py-0">
            <Link href="/rastrear-pedido">Rastreio</Link>
          </div>
          <div className="py-2 md:py-0">
            <Link href="/ofertas">Ofertas</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-gray-200 rounded-full px-3 py-1">
            <input type="text" placeholder="Buscar produtos..." className="bg-transparent outline-none" />
            <FaSearch className="ml-2 text-blue-600" />
          </div>
          <div className="cursor-pointer" onClick={openModal}>
            <p className="text-center">Entre ou<br />cadastrar-se</p>
          </div>
          <div>
            <Link href="/cart">
              <FaShoppingCart size={24} className="text-blue-600" />
            </Link>
          </div>
        </div>
      </nav>
      <AuthModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};

export default Navbar;
