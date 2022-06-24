import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';
import {background, statsbg} from '../../helpers/colors';
import {
  decimeterToCentimeter,
  hectogramToKilogram,
} from '../../helpers/general';
import {PokemonType} from '../../helpers/interfaces/PokemonType';
import {PokemonStat} from '../../helpers/interfaces/PokemonStat';
import ApplicationState from '../../helpers/types/ApplicationState';
import {fetchPokemon} from '../../store/ducks/pokemon';
import {iPokemonPageProps} from './interfaces/iPokemonPageProps';
import styles from './styles';
import {fetchAbilities} from '../../store/ducks/abilities';
import {PokemonAbility} from '../../helpers/interfaces/PokemonAbility';

export const PokemonPage = ({route}: iPokemonPageProps) => {
  const {pokemonId} = route.params;

  const nav = useNavigation();
  const dispatch = useDispatch();
  const {pokemon} = useSelector((state: ApplicationState) => state.pokemon);
  const {abilities} = useSelector((state: ApplicationState) => state.abilities);

  useEffect(() => {
    dispatch(fetchPokemon(pokemonId));
  }, [dispatch, pokemonId]);

  // useEffect(() => {
  //   dispatch(fetchAbilities(pokemon.abilities.map(p => p.ability.name)));
  // }, [dispatch, pokemon]);

  // useEffect(() => {
  //   console.log(abilities);
  // }, [abilities]);

  const handleBackPress = () => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton onBack={handleBackPress} />

      <ScrollView style={styles.pokemonDetails} nestedScrollEnabled>
        <View
          style={styles.getPokemonImageContainer(
            background[pokemon.backgroundColor || ''],
          )}>
          {pokemon && (
            <Image
              style={styles.pokemonCardImage}
              source={{uri: pokemon.cardImage}}
            />
          )}
        </View>

        <View style={styles.nameSection}>
          <Text style={styles.sectionTitle}>Name</Text>
          <Text style={styles.nameSectionContent}>{pokemon.name}</Text>
        </View>

        <View style={styles.measuresSection}>
          <View style={styles.heightSection}>
            <Text style={styles.sectionTitle}>Height</Text>
            <Text style={styles.measuresSectionContent}>
              {decimeterToCentimeter(pokemon.height)} cm
            </Text>
          </View>

          <View style={styles.weightSection}>
            <Text style={styles.sectionTitle}>Weight</Text>
            <Text style={styles.measuresSectionContent}>
              {hectogramToKilogram(pokemon.weight)} kg
            </Text>
          </View>
        </View>

        <View style={styles.typesSection}>
          <Text style={styles.sectionTitle}>Type</Text>

          <View style={styles.typesListSection}>
            <FlatList
              data={pokemon.types}
              renderItem={({item}) => (
                <View style={styles.getTypeStyle(background[item.type.name])}>
                  <Text style={styles.typeCardTitle}>{item.type.name}</Text>
                </View>
              )}
              keyExtractor={(item: PokemonType) => item.type.name}
              horizontal
            />
          </View>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Stats</Text>

          <View style={styles.statCardsContainer}>
            <FlatList
              data={pokemon.stats}
              horizontal
              renderItem={({item, index}) => (
                <View style={styles.getStatCardStyles(index)}>
                  <Text
                    style={styles.getStatCardTitleStyle(
                      statsbg[item.stat.name.replace('-', '')],
                    )}
                    ellipsizeMode={'head'}>
                    {item.stat.name}
                  </Text>
                  <Text
                    style={styles.getStatCardContent(
                      statsbg[item.stat.name.replace('-', '')],
                    )}
                    ellipsizeMode={'tail'}>
                    {item.base_stat}
                  </Text>
                </View>
              )}
              keyExtractor={(item: PokemonStat) => item.stat.name}
            />
          </View>
        </View>

        {/* <View style={styles.abilitiesContainer}>
          <Text style={styles.sectionTitle}>Abilities</Text>

          <FlatList
            data={abilities}
            horizontal
            renderItem={({item, index}) => {
              console.log(item);
              return (
                <View style={styles.getStatCardStyles(index)}>
                  <Text style={styles.abilitiyTitle} ellipsizeMode={'head'}>
                    {item.ability.name}
                  </Text>

                  {item.effectEntries.map(ee => (
                    <View>
                      <View>
                        <Text style={styles.effectTitle} ellipsizeMode={'tail'}>
                          Effect
                        </Text>
                        <Text
                          style={styles.effectContent}
                          ellipsizeMode={'tail'}>
                          {ee.effect}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.effectTitle} ellipsizeMode={'tail'}>
                          Short Effect
                        </Text>
                        <Text
                          style={styles.effectContent}
                          ellipsizeMode={'tail'}>
                          {ee.shortEffect}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              );
            }}
            keyExtractor={(item: PokemonAbility) => item.name}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
