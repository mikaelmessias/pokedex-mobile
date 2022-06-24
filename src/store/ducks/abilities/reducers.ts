import {Reducer} from 'typesafe-actions';
import {AbilitiesAction, AbilitiesState, AbilitiesTypes} from './types';

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  abilities: [],
  abilitiyNames: [],
};

const reducer: Reducer<AbilitiesState, AbilitiesAction> = (
  state: AbilitiesState = INITIAL_STATE,
  action: AbilitiesAction,
) => {
  switch (action.type) {
    case AbilitiesTypes.LOADING:
      return {...state, isLoading: action.payload.isLoading};
    case AbilitiesTypes.ERROR:
      return {...state, isError: action.payload.isError};
    case AbilitiesTypes.FETCH_ABILITIES:
      return {...state, abilitiyNames: action.payload.abilitiyNames};
    case AbilitiesTypes.SET_HABILITIES:
      return {...state, abilities: action.payload.abilities};
    default:
      return state;
  }
};

export default reducer;
