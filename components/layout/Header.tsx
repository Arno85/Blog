const Header: React.FC<{
	onToggleDarkMode: () => void;
}> = (props) => {
	return (
		<header className="fixed h-16 flex items-center justify-center w-full">
			<div className="logo">
				<h1 className="text-purple dark:text-pink">Arnaud Martin</h1>
			</div>
			<button onClick={props.onToggleDarkMode}>Dark mode</button>
		</header>
	);
};

export default Header;
