import { PokemonType } from "../types";

const shouldInclude = (
	item: PokemonType,
	opponent: PokemonType,
	property: keyof PokemonType
) => opponent[property]?.includes(item.type) ?? false;

export default shouldInclude;
