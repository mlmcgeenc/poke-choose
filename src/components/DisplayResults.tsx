import { DisplayResultsType } from '../types.ts';
import filteredArray from '../utils/filteredArray.ts';
import Entry from './ResultEntry.tsx';

const DisplayResults = ({
	pokedex,
	currentOpponent,
	condition,
}: DisplayResultsType) => (
	<>
		{filteredArray(pokedex, currentOpponent, condition).map((item) => (
			<div key={`${item.type}-${condition}`} className='h-full'>
				<Entry pokemonType={item.type} />
			</div>
		))}
	</>
);

export default DisplayResults;
