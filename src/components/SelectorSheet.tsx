import React, { FC } from 'react';

import { SelectorSheetType } from '../types.ts';
import Icon from './Icon.tsx';
import Select from './Select.tsx';

const SelectorSheet: FC<SelectorSheetType> = ({ array, handleClick, currentOpponent }) => {
	return (
		<>
			<div className='flex items-center h-16 w-full bg-blue-950 rounded-t-xl'>
				<h2 className='text-white font-extrabold text-lg p-4'>Current Opponent:</h2>
				<span className='text-lg text-white capitalize'>{currentOpponent.type}</span>
			</div>
			<div className='bg-yellow-600'>
				<h3>Choose an opponent type</h3>
				<div>
					{array.map((pokemon) => (
						<Select
							key={`${pokemon.type}-opponent-pick`}
							handleClick={handleClick}
							pokemon={pokemon}
						>
							<Icon pokemonType={pokemon.type} />
						</Select>
					))}
				</div>
			</div>
		</>
	);
};

export default SelectorSheet;
