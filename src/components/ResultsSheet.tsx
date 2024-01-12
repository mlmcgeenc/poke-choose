import { faAward, faBoltLightning, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ResultsSheetType } from '../types';
import CurrentOpponent from './CurrentOpponent';
import ResultRow from './ResultRow';
import TopPicks from './TopPicks';

const lightning = <FontAwesomeIcon icon={faBoltLightning} />;
const shield = <FontAwesomeIcon icon={faShield} />;
const ribbon = <FontAwesomeIcon icon={faAward} />;

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
			} bg-ui-blue-darker/80 fixed transform transition-all top-0 left-0 w-full duration-200 z-10 h-screen flex flex-col`}
		>
			<CurrentOpponent
				opponentType={currentOpponent.type}
				showResults={showResults}
				handleToggleShowResults={handleToggleShowResults}
			/>
			<div className='max-w-[960px] m-auto w-full flex flex-col p-4 overflow-y-auto grow'>
				<div className='h-1/2'>
					<TopPicks
						header='Top Pick'
						icon={ribbon}
						pokedex={pokedex}
						currentOpponent={currentOpponent}
						condition1={'defenseNotVeryEffectiveAgainst'}
						condition2={'attackNotVeryEffectiveAgainst'}
					/>
				</div>
				<div className='h-1/2'>
					<ResultRow
						header='Defense Advantage'
						icon={shield}
						pokedex={pokedex}
						currentOpponent={currentOpponent}
						condition='attackNotVeryEffectiveAgainst'
					/>
					<ResultRow
						header='Attack Advantage'
						icon={lightning}
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
