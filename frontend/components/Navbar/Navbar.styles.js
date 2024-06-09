import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  font-size: 0.875rem;
`;

export const TopBarItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;

  svg {
    margin-right: 0.5rem;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #333;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavbarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #800080;
`;

export const CenterMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItem = styled.div`
  position: relative;

  a, span {
    color: #333;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #007bff;
    }
  }

  span {
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;

  a {
    color: #333;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #007bff;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 0.5rem;
  gap: 0.5rem;

  input {
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem;
    font-size: 1rem;
  }

  svg {
    color: #007bff;
  }
`;

export const AuthContainer = styled.div`
  a {
    color: #007bff;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: #0056b3;
    }
  }

  &:hover {
    color: #0056b3;
  }
  cursor: pointer;

`;

export const CartContainer = styled.div`
  a {
    color: #007bff;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  padding: 1rem;
  border-top: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
  svg {
    color: #007bff;
  }
  a {
    color: #007bff;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #007bff;
    }
  }
`;
