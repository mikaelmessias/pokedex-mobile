import {action} from 'typesafe-actions';
import {PaginationTypes} from './types';

export const setCurrentPage = (currentPage: number) =>
  action(PaginationTypes.SET_CURRENT_PAGE, {currentPage});

export const setOffset = (offset: number) =>
  action(PaginationTypes.SET_OFFSET, {offset});

export const setLimit = (limit: number) =>
  action(PaginationTypes.SET_LIMIT, {limit});
