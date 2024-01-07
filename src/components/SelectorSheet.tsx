import React, { FC } from 'react';

import { SelectorSheetType } from '../types.ts';
import Icon from './Icon.tsx';
import Select from './Select.tsx';

const SelectorSheet: FC<SelectorSheetType> = ({ array, handleClick }) => {
	return (
		<div className='bg-yellow-600 rounded-t-xl'>
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
	);
};

export default SelectorSheet;
