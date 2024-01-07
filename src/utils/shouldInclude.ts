import { PokemonType } from '../types';

const shouldInclude = (
	item: PokemonType,
	opponent: PokemonType,
	condition: keyof PokemonType,
) => opponent[condition]?.includes(item.type) ?? false;

export default shouldInclude;
