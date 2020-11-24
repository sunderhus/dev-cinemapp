import React from 'react';
import { TextInputProps } from 'react-native';
import {
  Container,
  SearchButton,
  SearchButtonText,
  SearchField,
} from './styles';

interface ISearchBarProps extends TextInputProps {
  handleSearch(): void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ handleSearch, ...rest }) => {
  return (
    <Container>
      <SearchField {...rest} />
      <SearchButton onPress={() => handleSearch()}>
        <SearchButtonText>Buscar</SearchButtonText>
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
