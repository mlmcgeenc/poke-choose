import { faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IsImmuneType } from '../types';

const immuneIcon = <FontAwesomeIcon icon={faShield} />;

const IsImmune = ({ immunity, currentOpponent }: IsImmuneType) => {
	return currentOpponent && immunity?.includes(currentOpponent.type) ? (
		<div className='border border-white bg-yellow-400 absolute p-0 -top-2 -right-2  h-6 w-6 flex items-center justify-center rounded-full'>
			<div className='text-sm text-white'>{immuneIcon}</div>
		</div>
	) : null;
};

export default IsImmune;
