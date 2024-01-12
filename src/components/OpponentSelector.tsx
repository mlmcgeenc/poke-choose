import { OpponentSelectorType } from '../types.ts';
import Icon from './Icon.tsx.tsx';
import Label from './Label.tsx';
import SelectEntry from './SelectEntry.tsx';

const OpponentSelector = ({ array, handleClick }: OpponentSelectorType) => {
	return (
		<>
			{/* <div className='max-w-[960px] m-auto'> */}
			<div className='max-w-[960px] m-auto flex flex-wrap justify-center p-4'>
				{array.map((pokemon) => (
					<SelectEntry
						key={`${pokemon.type}-opponent-pick`}
						handleClick={handleClick}
						pokemon={pokemon}
					>
						<Icon pokemonType={pokemon.type} />
						<Label pokemonType={pokemon.type} />
					</SelectEntry>
				))}
			</div>
			{/* </div> */}
		</>
	);
};

export default OpponentSelector;
