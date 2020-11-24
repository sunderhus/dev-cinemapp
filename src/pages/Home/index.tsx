import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MovieCard from '../../components/MovieCard';
import NotFound from '../../components/NotFound';
import SearchBar from '../../components/SearchBar';
import { useFavoriteMovie } from '../../hooks/favorites';
import api from '../../services/api';
import { Container, ContainerListMovies, TotalCounter } from './styles';

export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  isFavorite?: boolean;
}

interface IResponseData {
  Search: Array<IMovie>;
  totalResults: string;
}

const ListMovies: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const [total, setTotal] = useState(0);
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  const { favoriteMovies, toggleFavoriteMovie } = useFavoriteMovie();

  useEffect(() => {
    updateFavorites();
  }, [favoriteMovies]);

  async function getListFilm() {
    if (!searchText) {
      return;
    }

    setLoading(true);
    const response = await api.get<IResponseData>(``, {
      params: {
        s: searchText,
      },
    });

    if (response.data.Search) {
      const newResults = response.data.Search.map((item: IMovie) => {
        const isFavorite = favoriteMovies.some(
          favorite => favorite.imdbID == item.imdbID,
        );
        return {
          ...item,
          isFavorite,
        };
      });
      setMovies(newResults);
    }

    if (response.data.totalResults) {
      setTotal(Number(response.data.totalResults));
    } else {
      setTotal(0);
    }

    setLoading(false);
  }

  function updateFavorites() {
    let newResults = movies.map((item: IMovie) => {
      const isFavorite = favoriteMovies.some(
        favorite => favorite.imdbID == item.imdbID,
      );
      return {
        ...item,
        isFavorite,
      };
    });

    setMovies([...newResults]);
  }

  const renderItem = (item: IMovie) => {
    return <MovieCard item={item} toggleFavorite={toggleFavoriteMovie} />;
  };

  return (
    <Container>
      <Header />
      <SearchBar
        handleSearch={getListFilm}
        placeholder="Título do filme"
        defaultValue={searchText}
        onChangeText={text => setSearchText(text)}
        autoCapitalize="none"
      />
      {loading ? (
        <Loading />
      ) : total === 0 ? (
        <NotFound text="Novos filmes te aguardam, utilize o buscar" />
      ) : (
        <ContainerListMovies>
          <TotalCounter>Encotrados: {total}</TotalCounter>
          <FlatList
            data={movies}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={item => String(item.imdbID)}
            ListFooterComponent={() => <View style={{ paddingBottom: 35 }} />}
          />
        </ContainerListMovies>
      )}
    </Container>
  );
};

export default ListMovies;
