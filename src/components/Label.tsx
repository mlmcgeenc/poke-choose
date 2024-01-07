import React from 'react';

const Label = ({ pokemonType }) => {
	return (
		<div className='m-2 px-1 bg-white rounded-sm capitalize'>{pokemonType}</div>
	);
};

export default Label;
