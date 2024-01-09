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
			<div key={`${item.type}-${condition}`} className='w-1/4 p-2'>
				<Entry pokemonType={item.type} />
			</div>
		))}
	</>
);

export default displayResults;
