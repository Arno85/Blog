import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import classes from './Layout.module.scss';
import { useEffect, useState } from 'react';

const Layout: React.FC = (props) => {
	const [ dartkMode, setDarkMode ] = useState(false);

	useEffect(() => {
		const isDarkMode = localStorage.getItem('darkMode');

		if (isDarkMode && JSON.parse(isDarkMode)) {
			setDarkMode(true);
		}
	}, []);

	const toggleDarkModeHandler = () => {
		setDarkMode(() => !dartkMode);
		localStorage.setItem('darkMode', JSON.stringify(!dartkMode));
	};

	return (
		<div className={'w-full h-screen' + (dartkMode ? ' dark' : '')}>
			<div className="w-full h-full bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
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
