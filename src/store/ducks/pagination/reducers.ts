import {Reducer} from 'typesafe-actions';
import {PaginationAction, PaginationState, PaginationTypes} from './types';

const INITIAL_STATE = {
  currentPage: 1,
  offset: 0,
  limit: 20,
};

const reducer: Reducer<PaginationState, PaginationAction> = (
  state: PaginationState = INITIAL_STATE,
  action: PaginationAction,
) => {
  switch (action.type) {
    case PaginationTypes.SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload.currentPage};
    case PaginationTypes.SET_OFFSET:
      return {...state, offset: action.payload.offset};
    case PaginationTypes.SET_LIMIT:
      return {...state, limit: action.payload.limit};
    default:
      return state;
  }
};

export default reducer;
