import React from 'react';

import { TopPicksType } from '../types.ts';
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
		<div className='flex flex-wrap justify-center'>
			{pokedex.map((item) =>
				shouldInclude(item, currentOpponent, condition1) &&
				shouldInclude(item, currentOpponent, condition2) ? (
						<Entry key={`${item.type}-top-pick`} pokemonType={item.type} />
					) : null
			)}
		</div>
	</>
);

export default TopPicks;
