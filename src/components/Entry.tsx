import { EntryType } from '../types.ts';
import Icon from './Icon.tsx';
import Label from './Label.tsx';

const Entry = ({ pokemonType }: EntryType) => {
	return (
		<div className=''>
			<Icon pokemonType={pokemonType} />
			<Label pokemonType={pokemonType} />
		</div>
	);
};

export default Entry;
