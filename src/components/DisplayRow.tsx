import { DisplayRowType } from '../types';
import displayResults from '../utils/displayResults';

const DisplayRow = ({
	rowHeader,
	pokedex,
	currentOpponent,
	condition,
}: DisplayRowType) => {
	return (
		<div className='h-1/5'>
			<h3 className='text-white ml-4 font-bold text-left h-1/6'>{rowHeader}:</h3>
			<div className='flex items-center justify-center h-5/6 px-10'>
				{displayResults(pokedex, currentOpponent, condition)}
			</div>
		</div>
	);
};

export default DisplayRow;
