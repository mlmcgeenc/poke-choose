import { DisplayResultsType } from '../types.ts';
import filteredArray from '../utils/filteredArray.ts';
import Entry from './ResultEntry.tsx';

const DisplayResults = ({
	pokedex,
	currentOpponent,
	condition,
}: DisplayResultsType) => (
	<div className='flex flex-row py-4 h-full overflow-x-auto'>
		{filteredArray(pokedex, currentOpponent, condition).map((item) => (
			<div key={`${item.type}-${condition}`} className='h-full'>
				<Entry pokemonType={item.type} />
			</div>
		))}
	</div>
);

export default DisplayResults;
