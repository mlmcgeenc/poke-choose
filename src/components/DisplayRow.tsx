import React from 'react';

import { DisplayRowType } from '../types';
import displayResults from '../utils/displayResults';

const DisplayRow = ({
	rowHeader,
	pokedex,
	currentOpponent,
	condition,
}: DisplayRowType) => {
	return (
		<>
			<h3>{rowHeader}:</h3>
			<div className='flex flex-wrap items-center justify-center max-h-1/3'>
				{displayResults(pokedex, currentOpponent, condition)}
			</div>
		</>
	);
};

export default DisplayRow;
