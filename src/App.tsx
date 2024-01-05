import { useState } from "react";
import "./App.css";

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

type OpponentType = PokemonType | undefined;

type PokedexType = PokemonType[];

const pokedex: PokedexType = [
	{
		type: "normal",
		icon: "",
		attackNotVeryEffectiveAgainst: ["rock", "steel"],
		defenseNotVeryEffectiveAgainst: ["fighting"],
		imperviousToAttacksFrom: ["ghost"],
	},
	{
		type: "fire",
		icon: "",
		attackNotVeryEffectiveAgainst: ["fire", "water", "rock", "dragon"],
		defenseNotVeryEffectiveAgainst: ["water", "ground", "rock"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "water",
		icon: "",
		attackNotVeryEffectiveAgainst: ["water", "grass", "dragon"],
		defenseNotVeryEffectiveAgainst: ["electric", "grass"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "electric",
		icon: "",
		attackNotVeryEffectiveAgainst: ["electric", "grass", "dragon"],
		defenseNotVeryEffectiveAgainst: ["ground"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "grass",
		icon: "",
		attackNotVeryEffectiveAgainst: [
			"fire",
			"grass",
			"poison",
			"flying",
			"bug",
			"dragon",
			"steel",
		],
		defenseNotVeryEffectiveAgainst: ["fire", "ice", "poison", "flying", "bug"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "ice",
		icon: "",
		attackNotVeryEffectiveAgainst: ["fire", "water", "ice", "steel"],
		defenseNotVeryEffectiveAgainst: ["fire", "fighting", "rock", "steel"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "fighting",
		icon: "",
		attackNotVeryEffectiveAgainst: ["poison", "flying", "psychic", "bug", "fairy"],
		defenseNotVeryEffectiveAgainst: ["flying", "psychic", "fairy"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "poison",
		icon: "",
		attackNotVeryEffectiveAgainst: ["poison", "ground", "rock", "ghost"],
		defenseNotVeryEffectiveAgainst: ["ground", "psychic"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "ground",
		icon: "",
		attackNotVeryEffectiveAgainst: ["grass", "bug"],
		defenseNotVeryEffectiveAgainst: ["water", "grass", "ice"],
		imperviousToAttacksFrom: ["electric"],
	},
	{
		type: "flying",
		icon: "",
		attackNotVeryEffectiveAgainst: ["electric", "rock", "steel"],
		defenseNotVeryEffectiveAgainst: ["electric", "ice", "rock"],
		imperviousToAttacksFrom: ["ground"],
	},
	{
		type: "psychic",
		icon: "",
		attackNotVeryEffectiveAgainst: ["psychic", "steel"],
		defenseNotVeryEffectiveAgainst: ["bug", "ghost", "dark"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "bug",
		icon: "",
		attackNotVeryEffectiveAgainst: [
			"fire",
			"fighting",
			"poison",
			"flying",
			"ghost",
			"steel",
			"fairy",
		],
		defenseNotVeryEffectiveAgainst: ["fire", "flying", "rock"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "rock",
		icon: "",
		attackNotVeryEffectiveAgainst: ["fighting", "ground", "steel"],
		defenseNotVeryEffectiveAgainst: [
			"water",
			"grass",
			"fighting",
			"ground",
			"steel",
		],
		imperviousToAttacksFrom: [],
	},
	{
		type: "ghost",
		icon: "",
		attackNotVeryEffectiveAgainst: ["dark"],
		defenseNotVeryEffectiveAgainst: ["ghost", "dark"],
		imperviousToAttacksFrom: ["normal", "fighting"],
	},
	{
		type: "dragon",
		icon: "",
		attackNotVeryEffectiveAgainst: ["steel"],
		defenseNotVeryEffectiveAgainst: ["ice", "dragon", "fairy"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "dark",
		icon: "",
		attackNotVeryEffectiveAgainst: ["dark", "fighting", "fairy"],
		defenseNotVeryEffectiveAgainst: ["fighting", "bug", "fairy"],
		imperviousToAttacksFrom: ["psychic"],
	},
	{
		type: "steel",
		icon: "",
		attackNotVeryEffectiveAgainst: ["fire", "water", "electric", "steel"],
		defenseNotVeryEffectiveAgainst: ["fire", "fighting", "ground"],
		imperviousToAttacksFrom: [],
	},
	{
		type: "fairy",
		icon: "",
		attackNotVeryEffectiveAgainst: ["fire", "poison", "steel"],
		defenseNotVeryEffectiveAgainst: ["poison", "steel"],
		imperviousToAttacksFrom: ["dragon"],
	},
];

function App() {
	const [currentOpponent, setCurrentOpponent] = useState<OpponentType>();

	return (
		<>
			<h1>Poke-choose</h1>
			<h3>Current opponent type:</h3>
			<p>{currentOpponent && currentOpponent.type}</p>
			<div>
				<h3>Defense Advantage:</h3>
				{pokedex
					.filter((item) =>
						currentOpponent.attackNotVeryEffectiveAgainst.includes(item.type)
					)
					.map((pokemon) => {
						return <button>{pokemon.type}</button>;
					})}
			</div>
			<div>
				<h3>Attack Advantage:</h3>
				{pokedex
					.filter((item) =>
						currentOpponent.defenseNotVeryEffectiveAgainst.includes(item.type)
					)
					.map((pokemon) => {
						return <button>{pokemon.type}</button>;
					})}
			</div>
			<br />
			<h3>Choose an opponent type</h3>
			<div>
				{pokedex.map((pokemon) => {
					return (
						<button onClick={() => setCurrentOpponent(pokemon)}>
							{pokemon.type}
						</button>
					);
				})}
			</div>
		</>
	);
}

export default App;
