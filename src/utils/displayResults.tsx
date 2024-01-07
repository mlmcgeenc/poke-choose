import Icon from "../components/Icon.tsx";
import { PokedexType, PokemonType } from "../types";
import filteredArray from "./filteredArray";

const displayResults = (
	array: PokedexType,
	opponent: PokemonType,
	property: keyof PokemonType
) => (
	<>
		{filteredArray(array, opponent, property).map((item) => (
			<Icon key={`${item.type}-${property}`} pokemonType={item.type} />
		))}
	</>
);

export default displayResults;
