import { Fragment } from 'react';
import classes from './Logo.module.scss';

const Logo: React.FC<{
	darkMode: boolean;
}> = (props) => {
	let backgroundContent = (
		<div className={classes.sun}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);

	if (props.darkMode) {
		backgroundContent = (
			<div className={classes.triangleContainer}>
				<div className={`${classes.triangle} ${classes.outerWhiteTriangle}`} />
				<div className={`${classes.triangle} ${classes.innerWhiteTriangle}`} />
				<div className={`${classes.triangle} ${classes.outerPinkTriangle}`} />
				<div className={`${classes.triangle} ${classes.innerPinkTriangle}`} />
			</div>
		);
	}

	return (
		<Fragment>
			{backgroundContent}
			<h1 className={classes.logoText + (props.darkMode ? ` animate-pulsate ${classes.neonText}` : '')}>
				<span className={props.darkMode ? 'animate-flicker' : ''}>Arnaud</span> Martin
			</h1>
		</Fragment>
	);
};

export default Logo;
