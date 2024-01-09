import { TopPicksType } from '../types.ts';
import shouldInclude from '../utils/shouldInclude.ts';
import Entry from './Entry.tsx';

const TopPicks = ({
	pokedex,
	currentOpponent,
	condition1,
	condition2,
}: TopPicksType) => (
	<div className='h-1/2 pb-6'>
		<h3 className='text-3xl ml-4 text-left text-white h-1/5'>Top Pick:</h3>
		<div className='flex justify-around items-center p-4 h-4/5'>
			{pokedex.map((item) =>
				shouldInclude(item, currentOpponent, condition1) &&
				shouldInclude(item, currentOpponent, condition2) ? (
						<div className='h-full p-4' key={`${item.type}-top-pick`}>
							<Entry pokemonType={item.type} />
						</div>
					) : null
			)}
		</div>
	</div>
);

export default TopPicks;
