import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #212631;
  color: #fff;
  height: 100vh;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  color: #a1a1a1;
  padding: 10px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #383942;
    color: #fff;
  }

  svg {
    margin-right: 10px;
  }
`;

export const SidebarTitle = styled.h3`
  color: #a1a1a1;
  padding: 10px;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  color: #a1a1a1;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: left;
  font-size: 14px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #383942;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownContent = styled.div`
  padding-left: 20px;
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

export const IconWrapper = styled.span`
  margin-right: 10px;
`;
