import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { DashboardContainer, Content, MainContent } from './Dashboard.styles';

const Dashboard = ({ children }) => {
  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <Navbar />
        <MainContent>
          {children}
        </MainContent>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
