export interface PokemonAbilityEffectEntry {
  effect: string;
  shortEffect: string;
}

export interface PokemonAbility {
  ability: {
    name: string;
    effectEntries: PokemonAbilityEffectEntry[];
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonAbilityApi {
  id: number;
  name: string;
  effect_entries: {
    language: {
      name: string;
    };
    effect: string;
    short_effect: string;
  }[];
}
