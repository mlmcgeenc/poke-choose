import Icon from "../components/Icon.tsx";
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
			<Icon key={`${item.type}-top-pick`} pokemonType={item.type} />
		) : null
	);

export default topPicks;
