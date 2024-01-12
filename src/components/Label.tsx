import { LabelType } from '../types';

const Label = ({ pokemonType }: LabelType) => {
	return (
		<div className='flex justify-center items-center text-white font-bold capitalize text-md mt-2 min-w-16 min-h-1/6'>
			{pokemonType}
		</div>
	);
};

export default Label;
