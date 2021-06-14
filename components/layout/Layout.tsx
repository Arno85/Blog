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
		<div className={'w-full h-screen' + (darkMode ? ' dark' : '')}>
			<div className={`bg-gray-800 absolute -z-1 top-0 right-0 ${bgClasses}`} />
			<div className={`w-full h-full text-gray-800 dark:text-white ${textClasses}`}>
				<Header onToggleDarkMode={toggleDarkModeHandler} />
				<main className="flex pt-16">
					<section className="w-3/4">{props.children}</section>
					<Aside />
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
