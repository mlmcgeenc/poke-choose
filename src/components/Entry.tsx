import React from 'react';

import Icon from './Icon.tsx';
import Label from './Label.tsx';

const Entry = ({ pokemonType }) => {
	return (
		<div className='w-20'>
			<Icon pokemonType={pokemonType} />
			<Label pokemonType={pokemonType} />
		</div>
	);
};

export default Entry;
