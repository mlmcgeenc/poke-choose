import { ClassNames } from '@emotion/react';

import Entry from '../components/ResultEntry.tsx';
import { PokedexType, PokemonType } from '../types';
import filteredArray from './filteredArray';

const displayResults = (
	array: PokedexType,
	opponent: PokemonType,
	condition: keyof PokemonType
) => (
	<>
		{filteredArray(array, opponent, condition).map((item) => (
			<div key={`${item.type}-${condition}`} className='h-full'>
				<Entry pokemonType={item.type} />
			</div>
		))}
	</>
);

export default displayResults;
