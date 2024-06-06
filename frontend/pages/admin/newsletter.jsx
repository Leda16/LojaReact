import React from 'react';
import Dashboard from '../../components/Admin/Dashboard/Dashboard';
import Newsletter from '../../components/Admin/Newsletter/Newsletter';
import withAuth from '../../hoc/withAuth';

const NewsletterPage = () => {
  return (
    <Dashboard>
      <Newsletter />
    </Dashboard>
  );
};

export default withAuth(NewsletterPage);
