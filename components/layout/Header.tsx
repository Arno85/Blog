import DarkModeToggle from '../ui/DarkModeToggle';

const Header: React.FC<{
	onToggleDarkMode: () => void;
	darkMode: boolean;
}> = (props) => {
	return (
		<header className="fixed h-16 flex items-center justify-center w-full">
			<div className="logo flex-1 text-center">
				<h1>Arnaud Martin</h1>
			</div>
			<div className="mr-8">
				<DarkModeToggle darkMode={props.darkMode} onToggleDarkMode={props.onToggleDarkMode} />
			</div>
		</header>
	);
};

export default Header;
