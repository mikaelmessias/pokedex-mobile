import React, {useEffect} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';
import {PokemonListItem} from '../../components/PokemonListItem/PokemonListItem';
import {Pokemon} from '../../helpers/interfaces/Pokemon';
import ApplicationState from '../../helpers/types/ApplicationState';
import {setLimit} from '../../store/ducks/pagination';
import {fetchPokemonListRequest} from '../../store/ducks/pokemon';
import {styles} from './styles';

export const HomePage = () => {
  const dispatch = useDispatch();

  const {pokemons} = useSelector((state: ApplicationState) => state.pokemon);

  const {limit} = useSelector((state: ApplicationState) => state.pagination);

  useEffect(() => {
    dispatch(fetchPokemonListRequest());
  }, [dispatch]);

  const handleRenderPokemonListItem: ListRenderItem<Pokemon> = ({
    item,
    index,
  }) => {
    return <PokemonListItem index={index} pokemon={item} />;
  };

  const handleEndReached = () => {
    dispatch(setLimit(limit + 10));
    dispatch(fetchPokemonListRequest());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.pokemonContainer}>
        <FlatList
          data={pokemons}
          renderItem={handleRenderPokemonListItem}
          keyExtractor={item => item.id}
          numColumns={2}
          onEndReached={handleEndReached}
        />
      </View>
    </SafeAreaView>
  );
};
