import React from 'react';

import { SelectorSheet } from '../types.ts';
import CurrentOpponent from './CurrentOpponent.tsx';
import Entry from './Entry.tsx';
import Select from './Select.tsx';

const Selector = ({
	array,
	handleClick,
	currentOpponent,
}: SelectorSheet) => {
	return (
		<>
			<div className=''>
				<h3>Choose an opponent type</h3>
				<div>
					{array.map((pokemon) => (
						<Select
							key={`${pokemon.type}-opponent-pick`}
							handleClick={handleClick}
							pokemon={pokemon}
						>
							<Entry pokemonType={pokemon.type} />
						</Select>
					))}
				</div>
			</div>
		</>
	);
};

export default Selector;
