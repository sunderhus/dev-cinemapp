import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IMovie } from '../pages/Home';

interface IFavoriteMovieContext {
  favoriteMovies: Array<IMovie>;
  toggleFavoriteMovie(movie: IMovie): Promise<void>;
}

const FavoriteMovieContext = createContext<IFavoriteMovieContext>(
  {} as IFavoriteMovieContext,
);

const FavoriteMoviesProvider: React.FC = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

  const addFavoriteMovie = useCallback(
    async (movie: IMovie) => {
      setFavoriteMovies([...favoriteMovies, { ...movie, isFavorite: true }]);

      await AsyncStorage.setItem(
        '@FavoriteMovies:CinamApp',
        JSON.stringify(favoriteMovies),
      );
    },
    [favoriteMovies],
  );

  const removeFavoriteMovie = useCallback(
    async imdbID => {
      setFavoriteMovies(
        favoriteMovies.filter(movie => movie.imdbID !== imdbID),
      );

      await AsyncStorage.setItem(
        '@FavoriteMovies:CinamaApp',
        JSON.stringify(favoriteMovies),
      );
    },
    [favoriteMovies],
  );

  const toggleFavoriteMovie = useCallback(
    async (movie: IMovie) => {
      if (
        favoriteMovies.find(cachedMovie => cachedMovie.imdbID === movie.imdbID)
      ) {
        await removeFavoriteMovie(movie.imdbID);
      } else {
        await addFavoriteMovie(movie);
      }
    },
    [addFavoriteMovie, favoriteMovies, removeFavoriteMovie],
  );

  useEffect(() => {
    async function loadFavoritedMovies(): Promise<void> {
      const cachedFavoriteMovies = await AsyncStorage.getItem(
        '@FavoriteMovies:CinamaApp',
      );

      if (cachedFavoriteMovies) {
        setFavoriteMovies(JSON.parse(cachedFavoriteMovies));
      }
    }

    loadFavoritedMovies();
  }, []);

  return (
    <FavoriteMovieContext.Provider
      value={{ favoriteMovies, toggleFavoriteMovie }}
    >
      {children}
    </FavoriteMovieContext.Provider>
  );
};

function useFavoriteMovie(): IFavoriteMovieContext {
  const context = useContext(FavoriteMovieContext);

  if (!context) {
    throw Error('useFavoriteMovie must be within a FavoriteMoviesProvider.');
  }
  return context;
}

export { FavoriteMoviesProvider, useFavoriteMovie };
