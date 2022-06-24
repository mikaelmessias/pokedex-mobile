import {PokemonAbility} from '../../../helpers/interfaces/PokemonAbility';

export enum AbilitiesTypes {
  LOADING = '@abilities/LOADING',
  ERROR = '@abilities/ERROR',
  FETCH_ABILITIES = '@abilities/FETCH_ABILITIES',
  SET_HABILITIES = '@abilities/SET_HABILITIES',
}

export interface AbilitiesState {
  isLoading: boolean;
  isError: boolean;
  abilities: PokemonAbility[];
  abilitiyNames: string[];
}

export type AbilitiesAction = {
  type: AbilitiesTypes;
  payload: AbilitiesState;
};
