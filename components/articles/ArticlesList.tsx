import { Article } from './../../models/article';
import ArticleItem from './ArticleItem';

const ArticlesList: React.FC<{ articles: Article[] }> = (props) => {
	return (
		<div className="flex flex-wrap">
			{props.articles.map((article, i) => <ArticleItem key={i} article={article} />)}
		</div>
	);
};

export default ArticlesList;
