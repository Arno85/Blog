import DarkModeToggle from '../ui/DarkModeToggle';
import Logo from './Logo';

const Header: React.FC<{
	onToggleDarkMode: () => void;
	darkMode: boolean;
}> = (props) => {
	return (
		<header className="h-32 w-full bg-orangePastel dark:bg-purple">
			<div className="container flex items-center justify-center">
				<div className="flex-1 relative h-full">
					<Logo darkMode={props.darkMode} />
				</div>
				<div>
					<DarkModeToggle darkMode={props.darkMode} onToggleDarkMode={props.onToggleDarkMode} />
				</div>
			</div>
		</header>
	);
};

export default Header;
