import connector from 'axios';

export const api = connector.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
