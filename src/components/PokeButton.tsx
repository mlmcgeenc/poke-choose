import { FC } from "react";

const PokeButton: FC<{ pokeType: string }> = ({ pokeType }) => {
	console.log("Pokebutton props: ", pokeType);
	return (
		<>
			<button className='max-w-1/4 min-w-16 min-h-16 bg-slate-200 m-2 rounded-full'>
				<p>{pokeType}</p>
			</button>
		</>
	);
};

export default PokeButton;
