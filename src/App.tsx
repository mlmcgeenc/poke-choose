import { useState } from "react";
import pokedex from "./data/pokedex";
import { PokemonType, PokedexType, OpponentType } from "./types";
import "./App.css";

const PokeButton = ({ type }) => {
	return (
		<>
			<button className='max-w-1/4 min-w-16 min-h-16 bg-slate-200 m-2 rounded-full'>
				<p>{type}</p>
			</button>
		</>
	);
};

const shouldInclude = (item: PokemonType, opponent: PokemonType, property: string) =>
	opponent[property].includes(item.type);

const filteredArray = (
	array: PokedexType,
	opponent: PokemonType,
	property: string
) => array.filter((item) => shouldInclude(item, opponent, property));

const displayResults = (
	array: PokedexType,
	opponent: PokemonType,
	property: string
) => (
	<>
		{filteredArray(array, opponent, property).map((item) => (
			<PokeButton key={item.type} type={item.type} />
		))}
	</>
);

const primePick = (
	item: PokemonType,
	opponent: PokemonType,
	property1: string,
	property2: string
) => {
	shouldInclude(item, opponent, property1) &&
	shouldInclude(item, opponent, property2) ? (
		<>
			<PokeButton type={item.type} />
		</>
	) : null;
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
