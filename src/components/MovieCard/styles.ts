import styled from 'styled-components/native';

export const ContainerMovie = styled.View`
  width: 100%;
  margin: 16px 0;
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PosterContainer = styled.View`
  flex: 1;
  background-color: #3a3a3a;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;
export const Poster = styled.Image`
  height: 150px;
  width: 100%;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;

export const InfoContainer = styled.View`
  flex: 1.6;
  margin-left: 20px;
`;

export const InfoTitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Bold';
  margin: 10px 0;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  margin: 10px 0;
`;

export const ContainerIcon = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 140px;
`;
