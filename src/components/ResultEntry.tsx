import { ResultEntryType } from '../types.ts';
import Icon from './Icon.tsx.tsx';
import Label from './Label.tsx';

const Entry = ({ pokemonType, immunity, currentOpponent }: ResultEntryType) => {
	return (
		<div className='h-full px-2'>
			<Icon
				pokemonType={pokemonType}
				immunity={immunity}
				currentOpponent={currentOpponent}
			/>
			<Label pokemonType={pokemonType} />
		</div>
	);
};

export default Entry;
