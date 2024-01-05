import { useState } from "react";
import pokedex from "./data/pokedex";
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
