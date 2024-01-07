import React from 'react';

import Icon from '../components/Icon.tsx';
import { PokedexType, PokemonType } from '../types';
import filteredArray from './filteredArray';

const displayResults = (
	array: PokedexType,
	opponent: PokemonType,
	condition: keyof PokemonType
) => (
	<>
		{filteredArray(array, opponent, condition).map((item) => (
			<Icon key={`${item.type}-${condition}`} pokemonType={item.type} />
		))}
	</>
);

export default displayResults;
