import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '../screens/Home/HomePage';
import {PokemonPage} from '../screens/Pokemon/PokemonPage';
import {GiuvanePage} from '../screens/Giuvane/GiuvanePage';

export type RootStackParamList = {
  HomePage: undefined;
  PokemonPage: {pokemonId: string};
  GiuvanePage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="PokemonPage" component={PokemonPage} />
        <Stack.Screen name="GiuvanePage" component={GiuvanePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
