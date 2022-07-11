const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["DSC_0614.JPG","favicon.png","home.jpg","style.css"]),
	mimeTypes: {".JPG":"image/jpeg",".png":"image/png",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		entry: {"file":"immutable/start-ddd3ada0.js","imports":["immutable/start-ddd3ada0.js","immutable/chunks/index-887f0734.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "try",
				pattern: /^\/try\/?$/,
				names: [],
				types: [],
				path: "/try",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "المدونة",
				pattern: /^\/المدونة\/?$/,
				names: [],
				types: [],
				path: "/المدونة",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "المعرض",
				pattern: /^\/المعرض\/?$/,
				names: [],
				types: [],
				path: "/المعرض",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "فريق-العمل",
				pattern: /^\/فريق-العمل\/?$/,
				names: [],
				types: [],
				path: "/فريق-العمل",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "المدونة/good",
				pattern: /^\/المدونة\/good\/?$/,
				names: [],
				types: [],
				path: "/المدونة/good",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
