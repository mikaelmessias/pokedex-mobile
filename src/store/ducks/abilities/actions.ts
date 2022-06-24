import {action} from 'typesafe-actions';
import {PokemonAbility} from '../../../helpers/interfaces/PokemonAbility';
import {AbilitiesTypes} from './types';

export const setLoading = (isLoading: boolean) =>
  action(AbilitiesTypes.LOADING, {isLoading});

export const setError = (isError: boolean) =>
  action(AbilitiesTypes.ERROR, {isError});

export const fetchAbilities = (abilitiyNames: string[]) =>
  action(AbilitiesTypes.FETCH_ABILITIES, {abilitiyNames});

export const setAbilities = (abilities: PokemonAbility[]) =>
  action(AbilitiesTypes.SET_HABILITIES, {abilities});
