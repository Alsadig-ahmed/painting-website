var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, 'default', { value: mod, enumerable: true })
			: target,
		mod
	)
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	css: () => css,
	entry: () => entry,
	index: () => index,
	js: () => js,
	module: () => module2
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(
	require('../entries/pages/\u0627\u0644\u0645\u0639\u0631\u0636/index.svelte.js')
);
const index = 4;
const entry = 'pages/\u0627\u0644\u0645\u0639\u0631\u0636/index.svelte-cb1d1180.js';
const js = [
	'pages/\u0627\u0644\u0645\u0639\u0631\u0636/index.svelte-cb1d1180.js',
	'chunks/index-4ce8e8fb.js',
	'chunks/Header-f6d60dfe.js',
	'chunks/Card-58239ccf.js'
];
const css = [
	'assets/pages/\u0627\u0644\u0645\u0639\u0631\u0636/index.svelte-eac74af3.css',
	'assets/Card.svelte_svelte_type_style_lang-9429d967.css',
	'assets/Header-76ebb15f.css'
];
