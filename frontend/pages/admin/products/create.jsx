import React from 'react';
import CreateProduct from '../../../components/Admin/Products/CreateProduct';
import withAuth from '../../../hoc/withAuth';
import Dashboard from '../../../components/Admin/Dashboard/Dashboard';


const CreateProductPage = () => {
  return (
    <Dashboard>
      <CreateProduct />
    </Dashboard>
  );
};


export default withAuth(CreateProductPage);
