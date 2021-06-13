import Search from './../ui/Search';

const Header: React.FC = () => {
	return (
		<header className="fixed h-16 flex items-center">
			<div className="logo">
				<h1>Arnaud Martin</h1>
			</div>
			<Search />
		</header>
	);
};

export default Header;
