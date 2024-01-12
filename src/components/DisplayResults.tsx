import { DisplayResultsType } from '../types.ts';
import filteredArray from '../utils/filteredArray.ts';
import Entry from './ResultEntry.tsx';

const DisplayResults = ({
	pokedex,
	currentOpponent,
	condition,
}: DisplayResultsType) => (
	<div className='flex items-center py-4 max-h-full overflow-x-auto'>
		{filteredArray(pokedex, currentOpponent, condition).map((item) => (
			<div key={`${item.type}-${condition}`} className='h-full'>
				<Entry pokemonType={item.type} />
			</div>
		))}
	</div>
);

export default DisplayResults;
