import { Article } from './../../models/article';

const ArticleDetail: React.FC<{ article: Article }> = (props) => {
	return <h1>{props.article.title}</h1>;
};

export default ArticleDetail;
