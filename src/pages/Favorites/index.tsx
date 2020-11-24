import React from 'react';
import { FlatList, View } from 'react-native';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';
import NotFound from '../../components/NotFound';
import { useFavoriteMovie } from '../../hooks/favorites';
import { Container, ContainerListMovies } from './styles';

interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  isFavorite?: boolean;
}

const ListFavorites: React.FC = () => {
  const { favoriteMovies, toggleFavoriteMovie } = useFavoriteMovie();

  const renderItem = (item: IMovie) => {
    return <MovieCard item={item} toggleFavorite={toggleFavoriteMovie} />;
  };

  return (
    <Container>
      <Header pageName="Favoritos" />
      {favoriteMovies.length > 0 ? (
        <ContainerListMovies>
          <FlatList
            data={favoriteMovies}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={item => item.imdbID}
            ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
          />
        </ContainerListMovies>
      ) : (
        <NotFound text="Ops, nenhum favorito cadastrado" />
      )}
    </Container>
  );
};

export default ListFavorites;
