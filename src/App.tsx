import './App.css';

import { useState } from 'react';
import React from 'react';

import DisplayRow from './components/DisplayRow.tsx';
import SelectorSheet from './components/SelectorSheet.tsx';
import pokedex from './data/pokedex';
import { OpponentType, PokemonType } from './types';
import topPicks from './utils/topPicks.tsx';

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
		<body className='max-w-[960px] m-auto bg-slate-500'>
			<h1 className='text-3xl underline'>Poke-choose</h1>
			<h3>Current opponent type:</h3>
			<p>{currentOpponent && currentOpponent.type}</p>
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
			<br />
			<h3>Prime Pick:</h3>
			{topPicks(
				pokedex,
				currentOpponent,
				'defenseNotVeryEffectiveAgainst',
				'attackNotVeryEffectiveAgainst'
			)}
			<SelectorSheet array={pokedex} handleClick={handleSetOpponent} />
		</body>
	);
}

export default App;
