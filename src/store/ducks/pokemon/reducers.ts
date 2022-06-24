import {Reducer} from 'typesafe-actions';
import {PokemonAction, PokemonState, PokemonTypes} from './types';

const INITIAL_STATE: PokemonState = {
  isLoading: false,
  isError: false,
  pokemon: {
    id: '',
    name: '',
    abilities: [],
    moves: [],
    stats: [],
    types: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    sprites: {
      back_default: '',
      front_default: '',
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    backgroundColor: '',
    cardImage: '',
    backImage: '',
    frontImage: '',
  },
  pokemons: [],
  count: 0,
  pokemonId: '',
};

const reducer: Reducer<PokemonState, PokemonAction> = (
  state: PokemonState = INITIAL_STATE,
  action: PokemonAction,
) => {
  switch (action.type) {
    case PokemonTypes.LOADING:
      return {...state, isLoading: action.payload.isLoading};
    case PokemonTypes.ERROR:
      return {...state, isError: action.payload.isError};
    case PokemonTypes.FETCH_POKEMON_LIST:
      return state;
    case PokemonTypes.SET_POKEMON_LIST:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        count: action.payload.count,
      };
    case PokemonTypes.FETCH_POKEMON:
      return {...state, pokemonId: action.payload.pokemonId};
    case PokemonTypes.SET_POKEMON:
      return {...state, pokemon: action.payload.pokemon};
    default:
      return state;
  }
};

export default reducer;
