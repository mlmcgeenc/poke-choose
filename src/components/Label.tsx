import React from 'react';

const Label = ({ pokemonType }) => {
	return (
		<div className='flex mt-2 h-1/5 px-1 bg-white justify-center items-center rounded-lg capitalize'>
			<span>{pokemonType}</span>
		</div>
	);
};

export default Label;
