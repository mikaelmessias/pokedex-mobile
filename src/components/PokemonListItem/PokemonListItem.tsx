import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {background} from '../../helpers/colors';
import {Pokemon} from '../../helpers/interfaces/Pokemon';
import styles from './styles';

interface iPokemonListItemProps {
  pokemon: Pokemon;
  index: number;
}

export const PokemonListItem = (props: iPokemonListItemProps) => {
  const {pokemon, index} = props;

  const nav = useNavigation();

  const handlePress = () => {
    nav.navigate('PokemonPage', {pokemonId: pokemon.id});
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles.getSeparatorStyle(
          index,
          background[pokemon.backgroundColor || ''],
        ),
      ]}
      onPress={handlePress}>
      <View style={styles.pokemonCardImageContainer}>
        <Image
          style={styles.pokemonCardImage}
          source={{uri: pokemon.cardImage}}
        />
      </View>

      <View style={styles.pokemonBasicData}>
        <Text style={styles.pokemonName}>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
