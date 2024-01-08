import React from 'react';

import { CurrentOpponentComponentType } from '../types';
import Icon from './Icon.tsx';

const CurrentOpponent = ({ opponentType, showResults, handleToggleShowResults }: CurrentOpponentComponentType) => {
	return (
		<div className='flex justify-between h-16 bg-blue-950 rounded-t-xl'>
			<div className='flex justify-start items-center'>
				<h2 className='text-white font-extrabold text-lg p-4'>Current Opponent:</h2>
				<Icon pokemonType={opponentType}/>
				<span className='ml-2 text-lg text-white capitalize'>{opponentType}</span>
			</div>
			<button
				className='text-black bg-white rounded-md -translate-x-10 ml-2 px-2'
				onClick={() => handleToggleShowResults(showResults)}
			>
				Choose A New Opponent
			</button>
		</div>
	);
};

export default CurrentOpponent;
