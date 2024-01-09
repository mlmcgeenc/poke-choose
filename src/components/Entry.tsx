import React from 'react';

import { EntryType } from '../types.ts';
import Icon from './Icon.tsx';
import Label from './Label.tsx';

const Entry = ({ pokemonType }: EntryType) => {
	return (
		<div className='h-full max-w-32 p-2'>
			<Icon pokemonType={pokemonType} />
			<Label pokemonType={pokemonType} />
		</div>
	);
};

export default Entry;
