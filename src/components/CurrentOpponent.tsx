import React from 'react';

import { PokemonTypesTuple } from '../types';

const CurrentOpponent = ({ opponentType }: CurrentOpponentComponentType) => {
	return (
		<div className='flex items-center h-16 w-full bg-blue-950 rounded-t-xl'>
			<h2 className='text-white font-extrabold text-lg p-4'>Current Opponent:</h2>
			<span className='text-lg text-white capitalize'>{opponentType}</span>
		</div>
	);
};

export default CurrentOpponent;
