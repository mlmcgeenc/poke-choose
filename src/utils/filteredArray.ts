import { PokedexType, PokemonType } from "../types";
import shouldInclude from "./shouldInclude";

const filteredArray = (
	array: PokedexType,
	opponent: PokemonType,
	property: keyof PokemonType
) => array.filter((item) => shouldInclude(item, opponent, property));

export default filteredArray;
