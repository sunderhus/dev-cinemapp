import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-flow: row;
  flex-direction: row;
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
`;

export const SearchField = styled(TextInput)`
  background: red;
  padding: 20px;
  font-size: 16px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  flex: 2;
  height: 70px;
  color: #3a3a3a;
  background-color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 20px;
  background: #04d361;
  height: 70px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SearchButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
