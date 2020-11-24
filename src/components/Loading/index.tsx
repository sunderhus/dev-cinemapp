import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoadingView } from '../../pages/Home/styles';

const Loading: React.FC = () => {
  return (
    <LoadingView>
      <ActivityIndicator color="#04d361" size={50} />
    </LoadingView>
  );
};
export default Loading;
