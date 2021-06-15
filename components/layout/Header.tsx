import DarkModeToggle from '../ui/DarkModeToggle';
import Logo from './Logo';

const Header: React.FC<{
	onToggleDarkMode: () => void;
	darkMode: boolean;
}> = (props) => {
	return (
		<header className="fixed h-32 flex items-center justify-center w-full bg-orangePastel dark:bg-purple">
			<div className="flex-1 text-center relative h-full">
				<Logo darkMode={props.darkMode} />
			</div>
			<div className="mr-8">
				<DarkModeToggle darkMode={props.darkMode} onToggleDarkMode={props.onToggleDarkMode} />
			</div>
		</header>
	);
};

export default Header;
