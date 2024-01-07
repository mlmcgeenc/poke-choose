import React from 'react';

import { TopPicksType } from '../types.ts';
import filteredArray from '../utils/filteredArray.ts';
import shouldInclude from '../utils/shouldInclude.ts';
import Entry from './Entry.tsx';

const TopPicks = ({
	pokedex,
	currentOpponent,
	condition1,
	condition2,
}: TopPicksType) => (
	<>
		<h3>Top Pick:</h3>
		{filteredArray(pokedex, currentOpponent, condition1, condition2).map((item) =>
			filteredArray.length > 0 ? (
				<Entry key={`${item.type}-top-pick`} pokemonType={item.type} />
			) : null
		)}
	</>
);

export default TopPicks;
