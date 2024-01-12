import { ResultsSheetType } from '../types';
import CurrentOpponent from './CurrentOpponent';
import ResultRow from './ResultRow';
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
			} bg-ui-blue-darker/80 fixed transform transition-all top-0 w-full duration-200 z-10 h-screen flex flex-col`}
		>
			<CurrentOpponent
				opponentType={currentOpponent.type}
				showResults={showResults}
				handleToggleShowResults={handleToggleShowResults}
			/>
			<div className='max-w-[960px] w-full m-auto flex flex-col p-4 overflow-y-auto grow'>
				<div className='h-1/2'>
					<TopPicks
						pokedex={pokedex}
						currentOpponent={currentOpponent}
						condition1={'defenseNotVeryEffectiveAgainst'}
						condition2={'attackNotVeryEffectiveAgainst'}
					/>
				</div>
				<div className='h-1/2'>
					<ResultRow
						rowHeader='Defense Advantage'
						pokedex={pokedex}
						currentOpponent={currentOpponent}
						condition='attackNotVeryEffectiveAgainst'
					/>
					<ResultRow
						rowHeader='Attack Advantage'
						pokedex={pokedex}
						currentOpponent={currentOpponent}
						condition='defenseNotVeryEffectiveAgainst'
					/>
				</div>
			</div>
		</div>
	);
};

export default ResultsSheet;
