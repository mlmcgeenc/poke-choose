import { TopPicksType } from '../types.ts';
import shouldInclude from '../utils/shouldInclude.ts';
import Entry from './Entry.tsx';

const TopPicks = ({
	pokedex,
	currentOpponent,
	condition1,
	condition2,
}: TopPicksType) => (
	<div className='h-1/2 w-full'>
		<h3 className='text-3xl pl-4 text-left text-white h-1/5 w-full'>Top Pick:</h3>
		<div className='flex justify-around items-center p-4 h-4/5 w-full'>
			{pokedex.map((item) =>
				shouldInclude(item, currentOpponent, condition1) &&
				shouldInclude(item, currentOpponent, condition2) ? (
						<div className='max-h-full max-w-52 p-4' key={`${item.type}-top-pick`}>
							<Entry pokemonType={item.type} />
						</div>
					) : null
			)}
		</div>
	</div>
);

export default TopPicks;
