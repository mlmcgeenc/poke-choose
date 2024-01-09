import { OpponentSelectorType } from '../types.ts';
import Entry from './Entry.tsx';
import Select from './Select.tsx';

const OpponentSelector = ({ array, handleClick }: OpponentSelectorType) => {
	return (
		<>
			<div className=''>
				<div className='flex flex-wrap justify-center'>
					{array.map((pokemon) => (
						<Select
							key={`${pokemon.type}-opponent-pick`}
							handleClick={handleClick}
							pokemon={pokemon}
						>
							<Entry pokemonType={pokemon.type} />
						</Select>
					))}
				</div>
			</div>
		</>
	);
};

export default OpponentSelector;
