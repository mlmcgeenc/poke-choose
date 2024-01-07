import { PokedexType, PokemonType } from '../types';
import shouldInclude from './shouldInclude';

const filteredArray = (
	array: PokedexType,
	opponent: PokemonType,
	condition: keyof PokemonType
) => array.filter((item) => shouldInclude(item, opponent, condition));

export default filteredArray;
