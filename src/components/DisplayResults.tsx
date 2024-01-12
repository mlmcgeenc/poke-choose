import { DisplayResultsType } from '../types.ts';
import filteredArray from '../utils/filteredArray.ts';
import Entry from './ResultEntry.tsx';

const DisplayResults = ({
	pokedex,
	currentOpponent,
	condition,
}: DisplayResultsType) => {
	const workingArray = filteredArray(pokedex, currentOpponent, condition);

	return(	<div className='flex flex-row py-4 h-full overflow-x-auto'>
		{workingArray.map((item) => (
			<div key={`${item.type}-${condition}`} className='h-full relative'>
				<Entry pokemonType={item.type} immunity={item.imperviousToAttacksFrom} currentOpponent={currentOpponent}/>
			</div>
		))}
	</div>);
};

export default DisplayResults;
