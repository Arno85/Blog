import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

const Layout: React.FC = (props) => {
	return (
		<Fragment>
			<Header />
			<main className="flex pt-16">
				<section className="w-3/4">{props.children}</section>
				<Aside />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
