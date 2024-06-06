import React from 'react';
import ManageCategories from '../../../components/Admin/Products/ManageCategories';
import withAuth from '../../../hoc/withAuth';
import Dashboard from '../../../components/Admin/Dashboard/Dashboard';

const ManageCategoriesPage = () => {
  return (
    <Dashboard>
      <ManageCategories />
    </Dashboard>
  );
};

export default withAuth(ManageCategoriesPage);
