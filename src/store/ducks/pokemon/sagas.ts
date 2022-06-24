import {AxiosResponse} from 'axios';
import {call, put, all, select} from 'redux-saga/effects';
import {Pokemon} from '../../../helpers/interfaces/Pokemon';
import {PokemonList} from '../../../helpers/interfaces/PokemonList';
import ApplicationState from '../../../helpers/types/ApplicationState';
import {api} from '../../../services/axios';
import {PaginationState} from '../pagination/types';
import {setLoading, setError, setPokemonList, setPokemon} from './actions';
import {PokemonAction} from './types';

export function* fetchPokemons() {
  yield put(setLoading(true));

  try {
    const {offset, limit}: PaginationState = yield select(
      (state: ApplicationState) => state.pagination,
    );

    const query = `/pokemon/?limit=${limit}&offset=${offset}`;

    const {data: pokemonList}: AxiosResponse<PokemonList> = yield call(
      api.get,
      query,
    );
    const {count, results} = pokemonList;

    const responses: AxiosResponse<Pokemon>[] = yield all(
      results.map(({name}) => call(api.get, `/pokemon/${name}`)),
    );

    const pokemons: Pokemon[] = responses.map(({data: pokemon}, index) => {
      const {types, sprites} = pokemon;

      let backgroundColor = types[0].type.name;

      if (backgroundColor === 'normal' && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      return {
        ...pokemon,
        name: results[index].name,
        backgroundColor: backgroundColor,
        cardImage: sprites.other['official-artwork'].front_default,
        backImage: sprites.back_default,
        frontImage: sprites.front_default,
      };
    });

    yield put(setPokemonList(pokemons, count));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}

export function* fetchPokemon(action: PokemonAction) {
  yield put(setLoading(true));

  try {
    const pokemonId = action.payload.pokemonId;

    const {data}: AxiosResponse<Pokemon> = yield call(
      api.get,
      `/pokemon/${pokemonId}`,
    );

    const {types, sprites} = data;

    let backgroundColor = types[0].type.name;

    if (backgroundColor === 'normal' && types.length > 1) {
      backgroundColor = types[1].type.name;
    }

    const pokemon = {
      ...data,
      backgroundColor: backgroundColor,
      cardImage: sprites.other['official-artwork'].front_default,
      backImage: sprites.back_default,
      frontImage: sprites.front_default,
    };

    yield put(setPokemon(pokemon));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}
