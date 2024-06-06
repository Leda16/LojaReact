import React from 'react';
import Dashboard from '../../components/Admin/Dashboard/Dashboard';
import withAuth from '../../hoc/withAuth';

const DashboardPage = () => {
  return <Dashboard />;
};

export default withAuth(DashboardPage);
