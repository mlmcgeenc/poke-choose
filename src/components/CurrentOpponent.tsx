import { CurrentOpponentComponentType } from '../types';
import Icon from './Icon.tsx';

const CurrentOpponent = ({
	opponentType,
	showResults,
	handleToggleShowResults,
}: CurrentOpponentComponentType) => {
	return (
		<div className='bg-ui-violet w-full flex items-center justify-between px-4 py-2'>
			<div className='flex items-center'>
				<h2 className='text-white font-bold'>Current Opponent:</h2>
				<div className='w-1/12 mx-2'>
					<Icon pokemonType={opponentType} />
				</div>
				<span className='text-white capitalize'>{opponentType}</span>
			</div>
			<button className='bg-ui-gold px-2 rounded-sm' onClick={() => handleToggleShowResults(showResults)}>New</button>
		</div>
	);
};

export default CurrentOpponent;
