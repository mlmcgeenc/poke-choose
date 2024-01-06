import PokeButton from "../components/PokeButton";
import { PokedexType, PokemonType } from "../types";
import filteredArray from "./filteredArray";

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

export default displayResults;
