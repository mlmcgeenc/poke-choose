import { FC } from "react";

import { PokeButtonPropsType } from "../types";

const PokeButton: FC<PokeButtonPropsType> = ({ pokemon, pokeType, handleClick }) => {
	return (
		<>
			<button onClick={()=>handleClick(pokemon)} className='max-w-1/4 min-w-16 min-h-16 bg-slate-200 m-2 rounded-full'>
				<p>{pokeType}</p>
			</button>
		</>
	);
};

export default PokeButton;
