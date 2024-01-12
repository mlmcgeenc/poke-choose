import { ResultEntryType } from '../types.ts';
import Icon from './Icon.tsx.tsx';
import Label from './Label.tsx';

const Entry = ({ pokemonType }: ResultEntryType) => {
	return (
		<div className='h-full px-2'>
			<Icon pokemonType={pokemonType} />
			<Label pokemonType={pokemonType} />
		</div>
	);
};

export default Entry;
