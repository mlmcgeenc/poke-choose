import React from 'react';

import Icon from './Icon.tsx';
import Label from './Label.tsx';

const Entry = ({ pokemonType }) => {
	return (
		<div className='h-full max-w-32 p-2'>
			<Icon pokemonType={pokemonType} />
			<Label pokemonType={pokemonType} />
		</div>
	);
};

export default Entry;
