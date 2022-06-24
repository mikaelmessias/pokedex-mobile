import {takeLatest, all, AllEffect, ForkEffect} from 'redux-saga/effects';
import * as AbilitiesSagas from './ducks/abilities/sagas';
import {AbilitiesTypes} from './ducks/abilities/types';
import * as PokemonSagas from './ducks/pokemon/sagas';
import {PokemonTypes} from './ducks/pokemon/types';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  any,
  unknown
> {
  return yield all([
    takeLatest(PokemonTypes.FETCH_POKEMON_LIST, PokemonSagas.fetchPokemons),
    takeLatest(PokemonTypes.FETCH_POKEMON, PokemonSagas.fetchPokemon),
    takeLatest(AbilitiesTypes.FETCH_ABILITIES, AbilitiesSagas.fetchAbilities),
  ]);
}
