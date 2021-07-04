import { Fragment } from 'react';
import classes from './Logo.module.scss';

const Logo: React.FC<{
	darkMode: boolean;
}> = (props) => {
	let backgroundContent = (
		<div className={classes.sunContainer}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);

	let logoContent = (
		<h1 className={classes.logoText}>
			<span className={classes.distortionText}>Console.blog</span>
		</h1>
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

		logoContent = (
			<h1 className={classes.logoText + ` animate-pulsate ${classes.neonText}`}>
				Console.<span className={'animate-flicker'}>blog</span>
			</h1>
		);
	}

	return (
		<Fragment>
			{backgroundContent}
			{/* <h1 className={classes.logoText + (props.darkMode ? ` animate-pulsate ${classes.neonText}` : '')}>
				<span className={props.darkMode ? 'animate-flicker' : classes.distortionText}>Console.Blog</span>
			</h1> */}
			{logoContent}
		</Fragment>
	);
};

export default Logo;
