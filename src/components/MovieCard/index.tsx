import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ContainerIcon,
  ContainerMovie,
  InfoContainer,
  InfoText,
  InfoTitle,
  Poster,
  PosterContainer,
} from './styles';

interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  isFavorite?: boolean;
}

interface IMovieCardProps {
  item: IMovie;
  toggleFavorite(movie: IMovie): void;
}

const MovieCard: React.FC<IMovieCardProps> = ({
  item,
  toggleFavorite,
}: IMovieCardProps) => {
  return (
    <ContainerMovie key={item.imdbID}>
      <PosterContainer>
        <Poster source={{ uri: item.Poster }} />
      </PosterContainer>
      <InfoContainer>
        <InfoTitle>{item.Title}</InfoTitle>
        <InfoText>
          {item.Type} - {item.Year}
        </InfoText>
      </InfoContainer>
      <ContainerIcon onPress={() => toggleFavorite(item)}>
        <Ionicons
          name={item.isFavorite ? 'star' : 'star-outline'}
          color={item.isFavorite ? '#04d361' : '#3a3a3a'}
          size={24}
        />
      </ContainerIcon>
    </ContainerMovie>
  );
};

export default MovieCard;
