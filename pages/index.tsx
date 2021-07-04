import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';
import ArticlesList from '../components/articles/ArticlesList';
import { Article } from './../models/article';
import DUMMY_ARTICLES from './api/dummy_articles';

const Home: React.FC<{ articles: Article[] }> = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Arnaud Martin</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ArticlesList articles={props.articles} />
		</Fragment>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const articles: Article[] = DUMMY_ARTICLES;

	return {
		props: {
			articles: articles.flatMap((i) => [ i, i, i ]).sort((a, b) => 0.5 - Math.random())
		}
	};
};
