import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ListMovies from './pages/Home';
import ListFavorites from './pages/Favorites';
import { useFavoriteMovie } from './hooks/favorites';

const { Navigator, Screen } = createBottomTabNavigator();
const Routes = () => {
  const { favoriteMovies } = useFavoriteMovie();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#04d361',
          inactiveTintColor: 'gray',
        }}
      >
        <Screen
          name="Home"
          component={ListMovies}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="film" size={22} style={{ color: color }} />
            ),
            title: 'Buscar',
          }}
        />
        <Screen
          name="Favorites"
          component={ListFavorites}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="star"
                size={22}
                style={{ color: color, opacity: 0.7 }}
              />
            ),
            title: 'Favoritos',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
