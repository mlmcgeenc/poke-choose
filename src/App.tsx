import './App.css';

import { useState } from 'react';

import Header from './components/Header.tsx';
import OpponentSelector from './components/OpponentSelector.tsx';
import ResultsSheet from './components/ResultsSheet.tsx';
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
		<div className='h-dvh bg-gradient-to-tr from-ui-blue-light to-ui-blue-dark'>
			<Header />
			<body className='max-w-[960px] px-4 m-auto'>
				<OpponentSelector array={pokedex} handleClick={handleSetOpponent} />
				<ResultsSheet
					pokedex={pokedex}
					currentOpponent={currentOpponent}
					showResults={showResults}
					handleToggleShowResults={handleToggleShowResults}
				/>
			</body>
		</div>
	);
}

export default App;
