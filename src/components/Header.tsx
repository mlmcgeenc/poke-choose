import Logo from '../assets/logo.png';
const Header = () => {
	return (
		<div className='bg-ui-blue-darker w-full p-2 border-b border-ui-blue-lighter'>
			<img className='m-auto px-8' src={Logo} />
			<h3 className='text-white mt-2'>Choose an opponent type</h3>
		</div>
	);
};

export default Header;
