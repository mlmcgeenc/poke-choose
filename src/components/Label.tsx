import { LabelType } from '../types';

const Label = ({ pokemonType }: LabelType) => {
	return (
		<div className='flex mt-2 h-1/5 px-1 bg-white justify-center items-center rounded-lg capitalize'>
			<span>{pokemonType}</span>
		</div>
	);
};

export default Label;
