import moment from 'moment';
import { useEffect, useRef } from 'react';
import { Article } from './../../models/article';
import Tag from './../ui/Tag';
import useTimeToRead from './../../hooks/use-timeToRead';

const ArticleDetail: React.FC<{ article: Article }> = (props) => {
	const plxContainer = useRef<HTMLDivElement>({} as HTMLDivElement);
	const plxImage = useRef<HTMLImageElement>({} as HTMLImageElement);
	const { timetoRead } = useTimeToRead(props.article.content);
	let lastScrollTop = 0;

	useEffect(() => {
		document.addEventListener('scroll', scrollEventHandler);

		return () => {
			document.removeEventListener('scroll', scrollEventHandler);
		};
	}, []);

	const scrollEventHandler = () => {
		const container = plxContainer.current;
		const image = plxImage.current;
		const imgH = image.height;
		const parentH = container.clientHeight;
		const delta = parentH - imgH;
		let imgTop = image.offsetTop;
		const st = document.documentElement.scrollTop;
		// console.log(st);

		if (st > lastScrollTop) {
			// console.log('scroll down');
			if (imgTop > delta) {
				image.style.top = `${--imgTop}px`;
			}

			// console.log(image.offsetTop);
		} else {
			// console.log('scroll up');

			if (imgTop < 0) {
				image.style.top = `${++imgTop}px`;
			}

			// console.log(imgTop);
		}

		lastScrollTop = st;
	};

	return (
		<article>
			<div className="relative overflow-hidden w-full h-96" ref={plxContainer}>
				<img ref={plxImage} className="-z-1 absolute" src={props.article.image} alt={props.article.title} />
			</div>
			<h1 className="text-4xl font-title mt-12">{props.article.title}</h1>
			<p className="font-text text-sm pt-3">
				<span>{props.article.author} • </span>
				<span>{moment(props.article.date).format('DD MMM YYYY')} • </span>
				<span>{timetoRead}</span>
			</p>
			<div className="pt-3">
				{props.article.categories.map((cat) => (
					<Tag key={cat.id} name={cat.title} bgColor={cat.bgColor} fgColor={cat.fgColor} />
				))}
			</div>
			<div className="mt-12 prose max-w-none" dangerouslySetInnerHTML={{ __html: props.article.content }} />
		</article>
	);
};

export default ArticleDetail;
