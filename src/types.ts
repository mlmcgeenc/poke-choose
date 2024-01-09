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
	showResults: boolean;
	handleToggleShowResults: (showResults: boolean) => void;
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

type OpponentSelectorType = {
	array: PokedexType;
	handleClick: (pokemon: PokemonType) => void;
};

type DisplayRowType = {
	rowHeader: string;
	pokedex: PokedexType;
	currentOpponent: OpponentType;
	condition: keyof PokemonType;
};

type ResultsSheetType = {
	pokedex: PokedexType;
	currentOpponent: PokemonType;
	showResults: boolean;
	handleToggleShowResults: (showResults: boolean) => void;
};

type TopPicksType = {
	pokedex: PokedexType;
	currentOpponent: PokemonType;
	condition1: keyof PokemonType;
	condition2: keyof PokemonType;
};

type SVGIconPropsType = {
	size: string | number;
};

type EntryType = {
  pokemonType: PokemonTypesTuple;
}

export type {
	CurrentOpponentComponentType,
	DisplayRowType,
	EntryType,
	IconPropsType,
	OpponentSelectorType,
	OpponentType,
	PokedexType,
	PokemonType,
	PokemonTypesTuple,
	ResultsSheetType,
	SelectType,
	SVGIconPropsType,
	TopPicksType};
