import './App.css';

import React from 'react';
import { useState } from 'react';

import ResultsSheet from './components/ResultsSheet.tsx';
import Selector from './components/Selector.tsx';
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
	const [showResults, setShowResults] = useState(false);

	const handleSetOpponent = (pokemon: PokemonType) => {
		setCurrentOpponent(pokemon);
		setShowResults(true);
	};

	const handleToggleShowResults = (showResults: boolean) => {
		setShowResults(!showResults);
	};

	return (
		<body className=' h-dvh m-auto bg-slate-500'>
			<h1 className='text-3xl underline'>Poke-choose</h1>
			<Selector
				array={pokedex}
				handleClick={handleSetOpponent}
				currentOpponent={currentOpponent}
			/>
			<ResultsSheet
				pokedex={pokedex}
				currentOpponent={currentOpponent}
				showResults={showResults}
				handleToggleShowResults={handleToggleShowResults}
			/>
		</body>
	);
}

export default App;
