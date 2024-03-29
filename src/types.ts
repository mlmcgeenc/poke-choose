import { ReactElement } from 'react';

type CurrentOpponentComponentType = {
	opponentType: PokemonTypesTuple;
	showResults: boolean;
	handleToggleShowResults: (showResults: boolean) => void;
};

type DisplayResultsType = {
	pokedex: PokedexType;
	currentOpponent: PokemonType;
	condition: keyof PokemonType;
};

type DisplayRowType = {
	header: string;
  icon: React.ReactNode;
	pokedex: PokedexType;
	currentOpponent: PokemonType;
	condition: keyof PokemonType;
};

type IconPropsType = {
	pokemonType: PokemonTypesTuple;
	immunity?: PokemonTypesTuple[];
  currentOpponent?: PokemonType; 
};

type IsImmuneType = {
	immunity?: PokemonTypesTuple[];
  currentOpponent?: PokemonType;
};

type LabelType = {
	pokemonType: PokemonTypesTuple;
};

type OpponentSelectorType = {
	array: PokedexType;
	handleClick: (pokemon: PokemonType) => void;
};

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

type ResultEntryType = {
	pokemonType: PokemonTypesTuple;
  immunity?: PokemonTypesTuple[];
  currentOpponent?: PokemonType;
};

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
	header: string;
	icon: React.ReactNode;
	pokedex: PokedexType;
	currentOpponent: PokemonType;
	condition1: keyof PokemonType;
	condition2: keyof PokemonType;
};

export type {
	CurrentOpponentComponentType,
	DisplayResultsType,
	DisplayRowType,
	IconPropsType,
	IsImmuneType,
	LabelType,
	OpponentSelectorType,
	PokedexType,
	PokemonType,
	PokemonTypesTuple,
	ResultEntryType,
	ResultsSheetType,
	SelectEntryType,
	SVGIconPropsType,
	TopPicksType,
};
