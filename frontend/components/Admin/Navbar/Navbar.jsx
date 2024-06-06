import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt, FaEnvelope, FaTasks, FaCog, FaMoneyBill } from 'react-icons/fa';
import { useRouter } from 'next/router';
import {
  NavbarContainer,
  NavbarContent,
  IconWrapper,
  ProfileMenu,
  ProfileMenuItem,
  Dropdown,
} from './Navbar.styles';

const Navbar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <IconWrapper onClick={toggleProfileDropdown}>
          <FaUserCircle size={30} />
          {profileDropdownOpen && (
            <Dropdown>
              <ProfileMenu>
                <ProfileMenuItem href="/admin/updates">
                  <FaEnvelope /> Messages
                </ProfileMenuItem>
                <ProfileMenuItem href="/admin/tasks">
                  <FaTasks /> Tasks
                </ProfileMenuItem>
                <ProfileMenuItem href="/admin/settings">
                  <FaCog /> Settings
                </ProfileMenuItem>
                <ProfileMenuItem href="/admin/payments">
                  <FaMoneyBill /> Payments
                </ProfileMenuItem>
                <ProfileMenuItem onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </ProfileMenuItem>
              </ProfileMenu>
            </Dropdown>
          )}
        </IconWrapper>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
