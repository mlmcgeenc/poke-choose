import { ReactElement } from 'react';

type CurrentOpponentComponentType = {
	opponentType: PokemonTypesTuple;
	showResults: boolean;
	handleToggleShowResults: (showResults: boolean) => void;
};

type DisplayRowType = {
	rowHeader: string;
	pokedex: PokedexType;
	currentOpponent: OpponentType;
	condition: keyof PokemonType;
};

type EntryType = {
	pokemonType: PokemonTypesTuple;
};

type IconPropsType = {
	pokemonType: PokemonTypesTuple;
};

type LabelType = {
  pokemonType: PokemonTypesTuple;
}

type OpponentSelectorType = {
	array: PokedexType;
	handleClick: (pokemon: PokemonType) => void;
};

type OpponentType = PokemonType;

type PokedexType = PokemonType[];

type PokemonType = {
	type: PokemonTypesTuple;
	icon: string;
	attackNotVeryEffectiveAgainst?: PokemonTypesTuple[];
	defenseNotVeryEffectiveAgainst?: PokemonTypesTuple[];
	imperviousToAttacksFrom?: PokemonTypesTuple[];
};

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

type ResultsSheetType = {
	pokedex: PokedexType;
	currentOpponent: PokemonType;
	showResults: boolean;
	handleToggleShowResults: (showResults: boolean) => void;
};

type SelectEntryType = {
	handleClick: (pokemon: PokemonType) => void;
	pokemon: PokemonType;
	children: ReactElement[];
};

type SVGIconPropsType = {
	size: string | number;
};

type TopPicksType = {
	pokedex: PokedexType;
	currentOpponent: PokemonType;
	condition1: keyof PokemonType;
	condition2: keyof PokemonType;
};

export type {
	CurrentOpponentComponentType,
	DisplayRowType,
	EntryType,
	IconPropsType,
	LabelType,
	OpponentSelectorType,
	OpponentType,
	PokedexType,
	PokemonType,
	PokemonTypesTuple,
	ResultsSheetType,
	SelectEntryType,
	SVGIconPropsType,
	TopPicksType,
};
