import {PokemonAbility} from './PokemonAbility';
import {PokemonMove} from './PokemonMove';
import {PokemonStat} from './PokemonStat';
import {PokemonType} from './PokemonType';

export interface Pokemon {
  id: string;
  name: string;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  stats: PokemonStat[];
  types: PokemonType[];
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  backgroundColor?: string;
  cardImage: string;
  backImage: string;
  frontImage: string;
}
