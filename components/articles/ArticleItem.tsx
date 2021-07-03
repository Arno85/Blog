import { Article } from '../../models/article';

const ArticleItem: React.FC<{ article: Article }> = (props) => {
	return (
		<article className="w-1/3 pr-24 pb-24">
			<img src={props.article.image} alt={props.article.title} className="w-full" />
			<h1 className="text-2xl font-title py-6">{props.article.title}</h1>
			<p className="font-text">
				<span>{props.article.date}</span>
			</p>
			<p className="font-text">{props.article.excerpt}</p>
		</article>
	);
};

export default ArticleItem;
