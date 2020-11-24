import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 100%;
  margin: 20px;
`;

export const TotalCounter = styled.Text`
  width: 100%;
  color: #04d361;
  text-align: right;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const ImageView = styled.Image`
  width: 100%;
  height: 250px;
`;

export const LoadingView = styled.View`
  width: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  font-family: 'Roboto-Regular';
`;

export const ContainerListMovies = styled.View`
  margin-bottom: 120px;
`;
