import { SelectEntryType } from '../types';

const SelectEntry = ({ handleClick, pokemon, children }: SelectEntryType) => {
	return (
		<button
			className='transition-transform duration-100 hover:scale-110 w-20 m-4'
			onClick={() => handleClick(pokemon)}
		>
			{children}
		</button>
	);
};

export default SelectEntry;
