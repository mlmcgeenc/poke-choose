import { IconPropsType } from '../types';
import BugSVG from './icons/BugSVG';
import DarkSVG from './icons/DarkSVG';
import DragonSVG from './icons/DragonSVG';
import ElectricSVG from './icons/ElectricSVG';
import FairySVG from './icons/FairySVG';
import FightingSVG from './icons/FightingSVG';
import FireSVG from './icons/FireSVG';
import FlyingSVG from './icons/FlyingSVG';
import GhostSVG from './icons/GhostSVG';
import GrassSVG from './icons/GrassSVG';
import GroundSVG from './icons/GroundSVG';
import IceSVG from './icons/IceSVG';
import NormalSVG from './icons/NormalSVG';
import PoisonSVG from './icons/PoisonSVG';
import PokeBall from './icons/PokeBall';
import PsychicSVG from './icons/PsychicSVG';
import RockSVG from './icons/RockSVG';
import SteelSVG from './icons/SteelSVG';
import WaterSVG from './icons/WaterSVG';
import IsImmune from './IsImmune';

const iconMap = {
	bug: <BugSVG size={'60%'} />,
	dark: <DarkSVG size={'60%'} />,
	dragon: <DragonSVG size={'60%'} />,
	electric: <ElectricSVG size={'60%'} />,
	fairy: <FairySVG size={'60%'} />,
	fighting: <FightingSVG size={'60%'} />,
	fire: <FireSVG size={'60%'} />,
	flying: <FlyingSVG size={'60%'} />,
	ghost: <GhostSVG size={'60%'} />,
	grass: <GrassSVG size={'60%'} />,
	ground: <GroundSVG size={'60%'} />,
	ice: <IceSVG size={'60%'} />,
	normal: <NormalSVG size={'60%'} />,
	poison: <PoisonSVG size={'60%'} />,
	psychic: <PsychicSVG size={'60%'} />,
	rock: <RockSVG size={'60%'} />,
	steel: <SteelSVG size={'60%'} />,
	water: <WaterSVG size={'60%'} />,
};

const colorMap = {
	bug: 'bg-bug-green',
	dark: 'bg-dark-grey',
	dragon: 'bg-dragon-blue',
	electric: 'bg-electric-yellow',
	fairy: 'bg-fairy-pink',
	fighting: 'bg-fighting-orange',
	fire: 'bg-fire-red',
	flying: 'bg-flying-blue',
	ghost: 'bg-ghost-violet',
	grass: 'bg-grass-green',
	ground: 'bg-ground-brown',
	ice: 'bg-ice-blue',
	normal: 'bg-normal-grey',
	poison: 'bg-poison-violet',
	psychic: 'bg-psychic-pink',
	rock: 'bg-rock-grey',
	steel: 'bg-steel-blue',
	water: 'bg-water-blue',
};

const Icon = ({ pokemonType, immunity, currentOpponent }: IconPropsType) => {
	const selectedIcon = iconMap[pokemonType] || <PokeBall />;

	return (
		<div
			className={`mx-auto relative flex justify-center items-center aspect-square ${colorMap[pokemonType]} rounded-full border-2 border-white h-4/6`}
		>
			{selectedIcon}
			<IsImmune immunity={immunity} currentOpponent={currentOpponent} />
		</div>
	);
};

export default Icon;
