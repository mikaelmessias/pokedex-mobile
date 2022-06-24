export enum PaginationTypes {
  SET_CURRENT_PAGE = '@pagination/SET_CURRENT_PAGE',
  SET_OFFSET = '@pagination/SET_OFFSET',
  SET_LIMIT = '@pagination/SET_LIMIT',
}

export interface PaginationState {
  currentPage: number;
  offset: number;
  limit: number;
}

export type PaginationAction = {
  type: PaginationTypes;
  payload: PaginationState;
};
