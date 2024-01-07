import React from 'react';

import { IconPropsType } from '../types';

const Icon = ({ pokemonType }: IconPropsType) => {
	return (
		<div className='max-w-20 m-2'>
			<div className='w-16 h-16 relative m-auto bg-slate-200 rounded-full'>
				<div className='w-16 h-8 relative bg-red-700 rounded-t-full border-b-2 border-black'></div>
				<div className='w-16 h-8 relative  bg-white rounded-b-full border-t-2 border-black'></div>
				<div className='w-6 h-6 absolute bg-black left-5 top-5 rounded-full'></div>
				<div className='w-4 h-4 absolute bg-white hover:bg-green-500 left-6 top-6 rounded-full'></div>
			</div>
			<div className='m-2 px-1 bg-white rounded-sm'>{pokemonType}</div>
		</div>
	);
};

export default Icon;
