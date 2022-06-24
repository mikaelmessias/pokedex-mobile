import {call, put, all} from 'redux-saga/effects';
import {PokemonAbilityApi} from '../../../helpers/interfaces/PokemonAbility';
import {SagaGenerator} from '../../../helpers/types/SagasGenerator';
import {api} from '../../../services/axios';

import {setLoading, setError, setAbilities} from './actions';
import {AbilitiesAction} from './types';

export function* fetchAbilities(
  action: AbilitiesAction,
): SagaGenerator<PokemonAbilityApi[]> {
  yield put(setLoading(true));

  try {
    const names = action.payload.abilitiyNames;

    const responses = yield all(
      names.map(name => call(api.get, `/ability/${name}`)),
    );

    const abilities = responses.data.map(data => {
      const effectEntries = data.effect_entries
        .filter(entry => entry.language.name === 'en')
        .map(({effect, short_effect}) => ({effect, shortEffect: short_effect}));

      return {
        id: data.id,
        name: data.name,
        effectEntries: effectEntries,
      };
    });

    yield put(setAbilities(abilities));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}
