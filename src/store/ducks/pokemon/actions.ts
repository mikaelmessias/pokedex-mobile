import {action} from 'typesafe-actions';
import {Pokemon} from '../../../helpers/interfaces/Pokemon';
import {PokemonTypes} from './types';

export const setLoading = (isLoading: boolean) =>
  action(PokemonTypes.LOADING, {isLoading});

export const setError = (isError: boolean) =>
  action(PokemonTypes.ERROR, {isError});

export const fetchPokemonListRequest = () =>
  action(PokemonTypes.FETCH_POKEMON_LIST);

export const setPokemonList = (pokemons: Pokemon[], count: number) =>
  action(PokemonTypes.SET_POKEMON_LIST, {pokemons, count});

export const fetchPokemon = (pokemonId: string) =>
  action(PokemonTypes.FETCH_POKEMON, {pokemonId});

export const setPokemon = (pokemon: Pokemon) =>
  action(PokemonTypes.SET_POKEMON, {pokemon});

export const setPokemons = (pokemons: Pokemon[]) =>
  action(PokemonTypes.SET_POKEMON, {pokemons});
