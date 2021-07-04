import { Article } from '../../models/article';

const DUMMY_ARTICLES: Article[] = [
	{
		id: 1,
		title: 'How to Setup Typescript in React',
		slug: 'how-to-setup-typescript-in-react',
		author: 'Arnaud Martin',
		categories: [
			{
				id: 1,
				title: 'React',
				bgColor: '#61DBFB',
				fgColor: '#000'
			},
			{
				id: 2,
				title: 'Typescript',
				bgColor: '#007acc',
				fgColor: '#fff'
			}
		],
		date: new Date().toISOString(),
		image: 'https://i.ytimg.com/vi/XccPsuqAz4E/maxresdefault.jpg',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae qui, architecto perspiciatis rerum odit dolor molestias nulla necessitatibus inventore nisi fuga distinctio bcaecati quos consequatur dolor, facilis aperiam!',
		excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae...'
	},
	{
		id: 2,
		title: 'Vue.js cheat sheet',
		slug: 'vue.js-cheat-sheet',
		author: 'Arnaud Martin',
		categories: [
			{
				id: 3,
				title: 'Vue.js',
				bgColor: '#42b883',
				fgColor: '#000'
			}
		],
		date: new Date().toISOString(),
		image: 'https://i.ytimg.com/vi/PWMTDRWJqu4/maxresdefault.jpg',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae qui, architecto perspiciatis rerum odit dolor molestias nulla necessitatibus inventore nisi fuga distinctio bcaecati quos consequatur dolor, facilis aperiam!',
		excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae...'
	},
	{
		id: 3,
		title: 'Get Started with Tailwind.css',
		slug: 'get-started-with-tailwind.css',
		author: 'Arnaud Martin',
		categories: [
			{
				id: 4,
				title: 'CSS',
				bgColor: '#264de4',
				fgColor: '#fff'
			}
		],
		date: new Date().toISOString(),
		image: 'https://i.ytimg.com/vi/sMLVzlRwvrM/maxresdefault.jpg',
		content:
			'<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae qui, architecto perspiciatis rerum odit dolor molestias nulla necessitatibus inventore nisi fuga distinctio bcaecati quos consequatur dolor, facilis aperiam!</p><h2>Test titre H2</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae qui, architecto perspiciatis rerum odit dolor molestias nulla necessitatibus inventore nisi fuga distinctio bcaecati quos consequatur dolor, facilis aperiam!</p><h3>Test titre H3</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae qui, architecto perspiciatis rerum odit dolor molestias nulla necessitatibus inventore nisi fuga distinctio bcaecati quos consequatur dolor, facilis aperiam!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae qui, architecto perspiciatis rerum odit dolor molestias nulla necessitatibus inventore nisi fuga distinctio bcaecati quos consequatur dolor, facilis aperiam!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae qui, architecto perspiciatis rerum odit dolor molestias nulla necessitatibus inventore nisi fuga distinctio bcaecati quos consequatur dolor, facilis aperiam!</p>',
		excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, sint repudiandae...'
	}
];

export default DUMMY_ARTICLES;
