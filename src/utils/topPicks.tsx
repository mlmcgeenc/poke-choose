import PokeButton from "../components/PokeButton";
import { PokedexType, PokemonType } from "../types";
import shouldInclude from "./shouldInclude";

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

export default topPicks;
