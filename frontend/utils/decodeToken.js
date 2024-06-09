import jwt from 'jsonwebtoken';

export const decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    console.error('Token inválido', error);
    return null;
  }
};
