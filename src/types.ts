import { ReactElement } from 'react';

type PokemonTypesTuple =
	| 'normal'
	| 'fire'
	| 'water'
	| 'electric'
	| 'grass'
	| 'ice'
	| 'fighting'
	| 'poison'
	| 'ground'
	| 'flying'
	| 'psychic'
	| 'bug'
	| 'rock'
	| 'ghost'
	| 'dragon'
	| 'dark'
	| 'steel'
	| 'fairy';

type PokemonType = {
	type: PokemonTypesTuple;
	icon: string;
	attackNotVeryEffectiveAgainst?: PokemonTypesTuple[];
	defenseNotVeryEffectiveAgainst?: PokemonTypesTuple[];
	imperviousToAttacksFrom?: PokemonTypesTuple[];
};

type OpponentType = PokemonType;

type CurrentOpponentComponentType = {
	opponentType: PokemonTypesTuple;
};

type PokedexType = PokemonType[];

type IconPropsType = {
	pokemonType: PokemonTypesTuple;
};

type SelectType = {
	handleClick: (pokemon: PokemonType) => void;
	pokemon: PokemonType;
	children: ReactElement;
};

type SelectorSheetType = {
	array: PokedexType;
	handleClick: (pokemon: PokemonType) => void;
	currentOpponent: PokemonType;
};

type DisplayRowType = {
	rowHeader: string;
	pokedex: PokedexType;
	currentOpponent: OpponentType;
	condition: keyof PokemonType;
};

export type {
	CurrentOpponentComponentType,
	DisplayRowType,
	IconPropsType,
	OpponentType,
	PokedexType,
	PokemonType,
	PokemonTypesTuple,
	SelectorSheetType,
	SelectType,
};
