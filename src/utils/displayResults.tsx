import Entry from '../components/Entry.tsx';
import { PokedexType, PokemonType } from '../types';
import filteredArray from './filteredArray';

const displayResults = (
	array: PokedexType,
	opponent: PokemonType,
	condition: keyof PokemonType
) => (
	<>
		{filteredArray(array, opponent, condition).map((item) => (
			<Entry key={`${item.type}-${condition}`} pokemonType={item.type} />
		))}
	</>
);

export default displayResults;
