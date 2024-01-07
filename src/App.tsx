import './App.css';

import { useState } from 'react';
import React from 'react';

import DisplayRow from './components/DisplayRow.tsx';
import SelectorSheet from './components/SelectorSheet.tsx';
import TopPicks from './components/TopPicks.tsx';
import pokedex from './data/pokedex';
import { OpponentType, PokemonType } from './types';

function App() {
	const [currentOpponent, setCurrentOpponent] = useState<OpponentType>({
		type: 'normal',
		icon: '',
		attackNotVeryEffectiveAgainst: ['rock', 'steel'],
		defenseNotVeryEffectiveAgainst: ['fighting'],
		imperviousToAttacksFrom: ['ghost'],
	});

	const handleSetOpponent = (pokemon: PokemonType) => {
		setCurrentOpponent(pokemon);
	};

	return (
		<body className='max-w-[960px] h-dvh m-auto bg-slate-500'>
			<h1 className='text-3xl underline'>Poke-choose</h1>
			<DisplayRow
				rowHeader='Defense Advantage'
				pokedex={pokedex}
				currentOpponent={currentOpponent}
				condition='attackNotVeryEffectiveAgainst'
			/>
			<DisplayRow
				rowHeader='Attack Advantage'
				pokedex={pokedex}
				currentOpponent={currentOpponent}
				condition='defenseNotVeryEffectiveAgainst'
			/>
			<TopPicks
				pokedex={pokedex}
				currentOpponent={currentOpponent}
				condition1={'defenseNotVeryEffectiveAgainst'}
				condition2={'attackNotVeryEffectiveAgainst'}
			/>
			<SelectorSheet array={pokedex} handleClick={handleSetOpponent} currentOpponent={currentOpponent}/>
		</body>
	);
}

export default App;
