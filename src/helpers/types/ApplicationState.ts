import {AbilitiesState} from '../../store/ducks/abilities/types';
import {PaginationState} from '../../store/ducks/pagination/types';
import {PokemonState} from '../../store/ducks/pokemon/types';

export default interface ApplicationState {
  pokemon: PokemonState;
  abilities: AbilitiesState;
  pagination: PaginationState;
}
