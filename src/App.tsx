import { useState } from "react";
import pokedex from "./data/pokedex";
import { PokemonType, PokedexType, OpponentType } from "./types";
import "./App.css";
import PokeButton from "./components/PokeButton.tsx";

const shouldInclude = (item: PokemonType, opponent: PokemonType, property: keyof PokemonType) =>
	opponent[property]?.includes(item.type) ?? false;

const filteredArray = (
	array: PokedexType,
	opponent: PokemonType,
	property: keyof PokemonType
) => array.filter((item) => shouldInclude(item, opponent, property));

const displayResults = (
	array: PokedexType,
	opponent: PokemonType,
	property: keyof PokemonType
) => (
	<>
		{filteredArray(array, opponent, property).map((item) => (
			<PokeButton key={`${item.type}-${property}`} pokeType={item.type} />
		))}
	</>
);

const topPicks = (
	array: PokedexType,
	opponent: PokemonType,
	property1: keyof PokemonType,
	property2: keyof PokemonType
) =>
	array.map((item) =>
		shouldInclude(item, opponent, property1) &&
		shouldInclude(item, opponent, property2) ? (
			<PokeButton key={`${item.type}-top-pick`} pokeType={item.type} />
		) : null
	);

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
			{topPicks(
				pokedex,
				currentOpponent,
				"defenseNotVeryEffectiveAgainst",
				"attackNotVeryEffectiveAgainst"
			)}
			<h3>Choose an opponent type</h3>
			<div>
				{pokedex.map((pokemon) => {
					return (
						<button onClick={() => setCurrentOpponent(pokemon)}>
							<PokeButton key={`${pokemon.type}-opponent-pick`} pokeType={pokemon.type} />
						</button>
					);
				})}
			</div>
		</body>
	);
}

export default App;
