import React from 'react';

import Icon from './Icon.tsx';
import Label from './Label.tsx';

const Entry = ({ pokemonType }) => {
	return (
		<div>
			<Icon pokemonType={pokemonType} />
			<Label pokemonType={pokemonType} />
		</div>
	);
};

export default Entry;
