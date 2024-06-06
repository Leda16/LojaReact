import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #5951da;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: #9c88ff;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #2f3640;
  border: 1px solid #414b57;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
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

export const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const ProfileMenuItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: #f5f6fa;
  text-decoration: none;

  &:hover {
    color: #9c88ff;
  }

  svg {
    margin-right: 10px;
  }
`;
