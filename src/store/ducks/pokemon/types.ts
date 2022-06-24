import {Pokemon} from '../../../helpers/interfaces/Pokemon';

export enum PokemonTypes {
  LOADING = '@pokemons/LOADING',
  ERROR = '@pokemons/ERROR',
  SET_POKEMONS = '@pokemons/SET_POKEMONS',
  SET_POKEMON_LIST = '@pokemons/SET_POKEMON_LIST',
  SET_POKEMON = '@pokemons/SET_POKEMON',
  FETCH_POKEMON_LIST = '@pokemons/FETCH_POKEMON_LIST',
  FETCH_POKEMON = '@pokemons/FETCH_POKEMON',
}

export interface PokemonState {
  isLoading: boolean;
  isError: boolean;
  pokemon: Pokemon;
  pokemons: Pokemon[];
  count: number;
  pokemonId: string;
}

export type PokemonAction = {
  type: PokemonTypes;
  payload: PokemonState;
};
