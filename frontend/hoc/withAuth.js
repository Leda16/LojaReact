import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { decodeToken } from '../utils/decodeToken';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('Admintoken');
      if (!token) {
        router.push('/admin/login');
      } else {
        const decodedToken = decodeToken(token);
        if (decodedToken && decodedToken.role === 'admin') {
          setIsAuthenticated(true);
        } else {
          router.push('/admin/login');
        }
      }
    }, [router]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
