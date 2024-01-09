import { SelectType } from '../types';

const Select = ({ handleClick, pokemon, children }: SelectType) => {
	return (
		<button
			className='transition-transform duration-100 hover:scale-110 w-1/4 p-2 lg:w-1/5 lg:p-8'
			onClick={() => handleClick(pokemon)}
		>
			{children}
		</button>
	);
};

export default Select;
