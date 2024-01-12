import './App.css';

import { useState } from 'react';

import Header from './components/Header.tsx';
import OpponentSelector from './components/OpponentSelector.tsx';
import ResultsSheet from './components/ResultsSheet.tsx';
import pokedex from './data/pokedex';
import { PokemonType } from './types';

function App() {
	const [currentOpponent, setCurrentOpponent] = useState<PokemonType>({
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
		<div className='min-h-full bg-gradient-to-tr from-ui-blue-light to-ui-blue-dark z-0'>
			<div className={`transition-all duration-150 ${showResults ? 'blur' : ''}`}>
				<Header />
				<div className='max-w-[960px] m-auto'>
					<OpponentSelector array={pokedex} handleClick={handleSetOpponent} />
				</div>
			</div>
			<ResultsSheet
				pokedex={pokedex}
				currentOpponent={currentOpponent}
				showResults={showResults}
				handleToggleShowResults={handleToggleShowResults}
			/>
		</div>
	);
}

export default App;
