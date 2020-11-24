import React from 'react';
import { FavoriteMoviesProvider } from './favorites';

const AppProvider: React.FC = ({ children }) => {
  return <FavoriteMoviesProvider>{children}</FavoriteMoviesProvider>;
};

export default AppProvider;
