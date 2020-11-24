import React from 'react';
import { NotFoundContainer, NotFoundText } from './styles';

interface INotFoundProps {
  text: string;
}

const NotFound: React.FC<INotFoundProps> = ({ text }) => {
  return (
    <NotFoundContainer>
      <NotFoundText>{text}</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
