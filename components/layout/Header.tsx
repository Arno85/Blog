const Header: React.FC<{
	onToggleDarkMode: () => void;
}> = (props) => {
	return (
		<header className="fixed h-16 flex items-center justify-center w-full">
			<div className="logo flex-1 text-center">
				<h1>Arnaud Martin</h1>
			</div>
			<button className="mr-8" onClick={props.onToggleDarkMode}>
				Dark Mode
			</button>
		</header>
	);
};

export default Header;
