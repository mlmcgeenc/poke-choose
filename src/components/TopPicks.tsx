import { TopPicksType } from '../types.ts';
import shouldInclude from '../utils/shouldInclude.ts';
import Entry from './ResultEntry.tsx';

const TopPicks = ({
	pokedex,
	currentOpponent,
	condition1,
	condition2,
}: TopPicksType) => (
	<div className='w-full flex flex-col justify-between h-full'>
		<h3 className='text-3xl text-left text-white w-full'>Top Pick:</h3>
		<div className='flex grow justify-around items-center h-auto w-full'>
			{pokedex.map((item) =>
				shouldInclude(item, currentOpponent, condition1) &&
				shouldInclude(item, currentOpponent, condition2) ? (
						<div className='max-h-full max-w-52 flex' key={`${item.type}-top-pick`}>
							<Entry pokemonType={item.type} />
						</div>
					) : null
			)}
		</div>
	</div>
);

export default TopPicks;
