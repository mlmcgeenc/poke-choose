import { DisplayRowType } from '../types';
import DisplayResults from './DisplayResults';

const ResultRow = ({
	header,
	icon,
	pokedex,
	currentOpponent,
	condition,
}: DisplayRowType) => {
	console.log(typeof icon);
	return (
		<div className='h-1/2 m-auto w-full flex flex-col my-1 p-2 rounded-md border-2 border-ui-blue-darker bg-ui-blue-darker/90'>
			<h3 className='text-white font-bold text-left'>
				<span className='mr-2 text-ui-gold'>{icon}</span>
				{header} :
			</h3>
			<DisplayResults
				pokedex={pokedex}
				currentOpponent={currentOpponent}
				condition={condition}
			/>
		</div>
	);
};

export default ResultRow;
