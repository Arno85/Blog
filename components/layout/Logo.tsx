import { Fragment } from 'react';
import classes from './Logo.module.scss';
import Link from 'next/link';

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
		<Link href="/">
			<a className={classes.logoText + ` inline-block`}>
				<span className={classes.distortionText}>Console.blog</span>
			</a>
		</Link>
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
			<Link href="/">
				<a className={classes.logoText + ` inline-block animate-pulsate ${classes.neonText}`}>
					Console.<span className={'animate-flicker'}>blog</span>
				</a>
			</Link>
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
