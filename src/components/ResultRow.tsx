import { DisplayRowType } from '../types';
import displayResults from '../utils/displayResults';

const ResultRow = ({
	rowHeader,
	pokedex,
	currentOpponent,
	condition,
}: DisplayRowType) => {
	return (
		<div className='h-1/2 m-auto w-full flex flex-col my-1 p-2 rounded-md border-2 border-ui-blue-darker bg-ui-blue-darker/90'>
			<h3 className='text-white font-bold text-left'>{rowHeader}:</h3>
			<div className='flex items-center py-4 max-h-full overflow-x-auto'>
				{displayResults(pokedex, currentOpponent, condition)}
			</div>
		</div>
	);
};

export default ResultRow;
