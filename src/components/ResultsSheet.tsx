import React from 'react';

import { ResultsSheetType } from '../types';
import CurrentOpponent from './CurrentOpponent';
import DisplayRow from './DisplayRow';
import TopPicks from './TopPicks';

const ResultsSheet = ({
	pokedex,
	currentOpponent,
	showResults,
	handleToggleShowResults,
}: ResultsSheetType) => {
	return (
		<div
			className={`${
				showResults ? '' : 'translate-y-full ease-in'
			} bg-slate-700 fixed transform transition-all top-0 w-full h-full duration-200`}
		>
			<CurrentOpponent
				opponentType={currentOpponent.type}
				showResults={showResults}
				handleToggleShowResults={handleToggleShowResults}
			/>
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
		</div>
	);
};

export default ResultsSheet;
