import React from 'react';

import { TopPicksType } from '../types.ts';
import shouldInclude from '../utils/shouldInclude.ts';
import Icon from './Icon.tsx.tsx';

const TopPicks = ({
	pokedex,
	currentOpponent,
	condition1,
	condition2,
}: TopPicksType) => (
	<>
		<h3>Top Pick:</h3>
		{pokedex.map((item) =>
			shouldInclude(item, currentOpponent, condition1) &&
			shouldInclude(item, currentOpponent, condition2) ? (
					<Icon key={`${item.type}-top-pick`} pokemonType={item.type} />
				) : null
		)}
	</>
);

export default TopPicks;
