type PokemonTypes =
	| "normal"
	| "fire"
	| "water"
	| "electric"
	| "grass"
	| "ice"
	| "fighting"
	| "poison"
	| "ground"
	| "flying"
	| "psychic"
	| "bug"
	| "rock"
	| "ghost"
	| "dragon"
	| "dark"
	| "steel"
	| "fairy";

type PokemonType = {
	type: PokemonTypes;
	icon: string;
	attackNotVeryEffectiveAgainst?: PokemonTypes[];
	defenseNotVeryEffectiveAgainst?: PokemonTypes[];
	imperviousToAttacksFrom?: PokemonTypes[];
};

type OpponentType = PokemonType;

type PokedexType = PokemonType[];

export type { PokemonTypes, PokemonType, OpponentType, PokedexType };