import { Article } from '../../models/article';
import moment from 'moment';
import Tag from '../ui/Tag';
import Link from 'next/link';
import useTimeToRead from './../../hooks/use-timeToRead';

const ArticleItem: React.FC<{ article: Article }> = (props) => {
	const { timetoRead } = useTimeToRead(props.article.content);

	return (
		<article className="w-1/3 pr-24 pb-24">
			<Link href={`/${props.article.slug}`}>
				<a className="block transform hover:scale-105 transition duration-400 linear">
					<img src={props.article.image} alt={props.article.title} className="w-full" />
					<h1 className="text-2xl font-title pt-6">{props.article.title}</h1>
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
					<p className="font-text pt-8">{props.article.excerpt}</p>
				</a>
			</Link>
		</article>
	);
};

export default ArticleItem;
