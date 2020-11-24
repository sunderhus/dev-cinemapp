import React from 'react';
import { Greetings, HeaderContainer, PageTitle } from './styles';

interface IHeaderProps {
  pageName?: string;
}
const Header: React.FC<IHeaderProps> = ({ pageName }) => {
  return (
    <HeaderContainer>
      <PageTitle>Cinema APP {pageName}</PageTitle>
      <Greetings>Bem-vindx ao mundo espetacular do cinema</Greetings>
    </HeaderContainer>
  );
};

export default Header;
