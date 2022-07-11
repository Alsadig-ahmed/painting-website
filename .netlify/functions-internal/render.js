const { init } = require('../serverless.js');

exports.handler = init({
	appDir: '_app',
	assets: new Set(['favicon.png', 'home.jpg', 'style.css']),
	mimeTypes: { '.png': 'image/png', '.jpg': 'image/jpeg', '.css': 'text/css' },
	_: {
		entry: {
			file: 'start-fb154ade.js',
			js: ['start-fb154ade.js', 'chunks/index-4ce8e8fb.js'],
			css: []
		},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				id: '',
				pattern: /^\/$/,
				names: [],
				types: [],
				path: '/',
				shadow: null,
				a: [0, 2],
				b: [1]
			},
			{
				type: 'page',
				id: 'about',
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: '/about',
				shadow: null,
				a: [0, 3],
				b: [1]
			},
			{
				type: 'page',
				id: 'المعرض',
				pattern: /^\/المعرض\/?$/,
				names: [],
				types: [],
				path: '/المعرض',
				shadow: null,
				a: [0, 4],
				b: [1]
			},
			{
				type: 'page',
				id: 'فريق-العمل',
				pattern: /^\/فريق-العمل\/?$/,
				names: [],
				types: [],
				path: '/فريق-العمل',
				shadow: null,
				a: [0, 5],
				b: [1]
			}
		],
		matchers: async () => {
			return {};
		}
	}
});
