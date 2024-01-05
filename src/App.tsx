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

type OpponentType = PokemonType;

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
		attackNotVeryEffectiveAgainst: ["electric", "grass", "dragon", "ground"],
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

const PokeButton = ({ type }) => {
	console.log("Poketype: ", type);
	return (
		<>
			<button className='max-w-1/4 min-w-16 min-h-16 bg-slate-200 m-2 rounded-full'>
				<p>{type}</p>
			</button>
		</>
	);
};

const shouldInclude = (
	item: PokemonType,
	opponent: PokemonType,
	property: string
) => {
	if (opponent[property].includes(item.type)) {
		return true;
	} else {
		return false;
	}
};

const filteredArray = (
	array: PokedexType,
	opponent: PokemonType,
	property: string
) => {
	return array.filter((item) => shouldInclude(item, opponent, property));
};

const displayResults = (
	array: PokedexType,
	oppponent: PokemonType,
	property: string
) => {
	const newArray = filteredArray(array, oppponent, property);

	return (
		<>
			{newArray.map((item) => (
				<PokeButton type={item.type} />
			))}
		</>
	);
};

const primePick = (
	item: PokemonType,
	opponent: PokemonType,
	property1: string,
	property2: string
) => {
	if (
		shouldInclude(item, opponent, property1) &&
		shouldInclude(item, opponent, property2)
	) {
		return (
			<>
				<PokeButton type={item.type} />
			</>
		);
	} else {
		return null;
	}
};

function App() {
	const [currentOpponent, setCurrentOpponent] = useState<OpponentType>({
		type: "normal",
		icon: "",
		attackNotVeryEffectiveAgainst: ["rock", "steel"],
		defenseNotVeryEffectiveAgainst: ["fighting"],
		imperviousToAttacksFrom: ["ghost"],
	});

	return (
		<body className='max-w-[960px] m-auto bg-slate-500'>
			<h1 className='text-3xl underline'>Poke-choose</h1>
			<h3>Current opponent type:</h3>
			<p>{currentOpponent && currentOpponent.type}</p>
			<div>
				<h3>Defense Advantage:</h3>
				{displayResults(pokedex, currentOpponent, "attackNotVeryEffectiveAgainst")}
			</div>
			<div>
				<h3>Attack Advantage:</h3>
				{displayResults(pokedex, currentOpponent, "defenseNotVeryEffectiveAgainst")}
			</div>
			<br />
			<h3>Prime Pick:</h3>
			{pokedex.map((item) =>
				primePick(
					item,
					currentOpponent,
					"defenseNotVeryEffectiveAgainst",
					"attackNotVeryEffectiveAgainst"
				)
			)}
			<h3>Choose an opponent type</h3>
			<div>
				{pokedex.map((pokemon) => {
					return (
						<button onClick={() => setCurrentOpponent(pokemon)}>
							<PokeButton type={pokemon.type} />
						</button>
					);
				})}
			</div>
		</body>
	);
}

export default App;
