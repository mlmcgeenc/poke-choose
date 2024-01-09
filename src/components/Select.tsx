import { SelectType } from '../types';

const Select = ({ handleClick, pokemon, children }: SelectType) => {
	return (
		<button
			className='transition-transform duration-100 hover:scale-110'
			onClick={() => handleClick(pokemon)}
		>
			{children}
		</button>
	);
};

export default Select;
