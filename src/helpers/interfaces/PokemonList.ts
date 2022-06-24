import {PokemonListResult} from './PokemonListResult';

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListResult[];
}
