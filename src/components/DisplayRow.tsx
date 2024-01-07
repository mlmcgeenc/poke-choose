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
			<div className='flex flex-wrap justify-center'>
				{displayResults(pokedex, currentOpponent, condition)}
			</div>
		</>
	);
};

export default DisplayRow;
