import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const DarkModeToggle: React.FC<{
	onToggleDarkMode: () => void;
	darkMode: boolean;
}> = (props) => {
	return (
		<div>
			<input type="checkbox" name="check" id="check" className="hidden" />
			<div
				className="relative rounded-full w-12 h-6 bg-gray-800 dark:bg-white cursor-pointer"
				onClick={props.onToggleDarkMode}
			>
				<div
					className={
						'absolute z-10 rounded-full w-6 h-6 bg-white dark:bg-gray-800 cursor-pointer border-4 border-gray-800 dark:border-white transition-all duration-300 ' +
						(props.darkMode ? 'transform translate-x-0' : 'transform translate-x-6')
					}
				/>
				<MoonIcon className="absolute z-0 left-0 w-6 h-6 p-1 text-white" />
				<SunIcon className="absolute right-0 w-6 h-6 p-1 text-gray-800" />
			</div>
		</div>
	);
};

export default DarkModeToggle;
