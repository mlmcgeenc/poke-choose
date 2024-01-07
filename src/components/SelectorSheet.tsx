import React from 'react';

import { SelectorSheetType } from '../types.ts';
import CurrentOpponent from './CurrentOpponent.tsx';
import Entry from './Entry.tsx';
import Select from './Select.tsx';

const SelectorSheet = ({
	array,
	handleClick,
	currentOpponent,
}: SelectorSheetType) => {
	return (
		<>
			<CurrentOpponent opponentType={currentOpponent.type} />
			<div className='bg-yellow-600'>
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

export default SelectorSheet;
