import { LabelType } from '../types';

const Label = ({ pokemonType }: LabelType) => {
	return (
		<div className='flex justify-center items-center bg-white rounded-lg capitalize text-sm  mt-2 min-h-1/6'>
			{pokemonType}
		</div>
	);
};

export default Label;
