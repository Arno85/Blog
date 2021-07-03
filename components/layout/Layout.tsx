import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useEffect, useState } from 'react';

const Layout: React.FC = (props) => {
	const [ darkMode, setDarkMode ] = useState(false);
	const [ bgClasses, setBgClasses ] = useState('');
	const [ textClasses, setTextClasses ] = useState('');

	useEffect(() => {
		const isDarkMode = localStorage.getItem('darkMode');

		if (isDarkMode && JSON.parse(isDarkMode)) {
			setDarkMode(true);
			setBgClasses('w-full h-full');
		} else {
			setBgClasses('w-0 h-0');
		}
	}, []);

	const toggleDarkModeHandler = () => {
		setDarkMode(() => !darkMode);
		localStorage.setItem('darkMode', JSON.stringify(!darkMode));

		if (darkMode) {
			setBgClasses('animate-darkBgOut');
			setTextClasses('animate-darkTextOut');
		} else {
			setBgClasses('animate-darkBgIn');
			setTextClasses('animate-darkTextIn');
		}
	};

	return (
		<div className={'w-full h-full min-h-screen relative' + (darkMode ? ' dark' : '')}>
			<div className={`bg-darkPurple absolute -z-1 top-0 right-0 ${bgClasses}`} />
			<div className={`flex flex-col w-full h-full min-h-screen text-gray-800 dark:text-white ${textClasses}`}>
				<Header darkMode={darkMode} onToggleDarkMode={toggleDarkModeHandler} />
				<main className="container flex flex-1 my-32">
					<section>{props.children}</section>
					<Aside />
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
