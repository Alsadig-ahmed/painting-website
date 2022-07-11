var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => UD9u81uD8uB1uD9u8AuD9u82_uD8uA7uD9u84uD8uB9uD9u85uD9u84
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require('../../../chunks/index-cb93fe8d.js');
var import_Header_61d4401f = require('../../../chunks/Header-61d4401f.js');
var import_Card_32f008ff = require('../../../chunks/Card-32f008ff.js');
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'.c.svelte-1pd15wp{width:100%;height:1000vh;padding:0.2rem}.container.svelte-1pd15wp{max-width:460px;margin:auto}')();
const css = {
	code: '.c.svelte-1pd15wp{width:100%;height:1000vh;padding:0.2rem}.container.svelte-1pd15wp{max-width:460px;margin:auto}',
	map: null
};
let img = '/home.jpg';
const UD9u81uD8uB1uD9u8AuD9u82_uD8uA7uD9u84uD8uB9uD9u85uD9u84 = (0, import_index_cb93fe8d.c)(
	($$result, $$props, $$bindings, slots) => {
		let supervisors = [
			{
				name: '\u0627\u0644\u0635\u0627\u062F\u0642 \u0623\u062D\u0645\u062F',
				number: 'tel:+249963003102'
			},
			{ name: '\u0627\u062D\u0645\u062F', number: 'tel:+24991000000' }
		];
		$$result.css.add(css);
		return `${(0, import_index_cb93fe8d.v)(import_Header_61d4401f.H, 'Header').$$render(
			$$result,
			{ title: '\u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644' },
			{},
			{}
		)}

<div class="${'container svelte-1pd15wp'}"><main class="${'c svelte-1pd15wp'}">${(0,
		import_index_cb93fe8d.b)(supervisors, (supervisor) => {
			return `${(0, import_index_cb93fe8d.v)(import_Card_32f008ff.C, 'Card').$$render(
				$$result,
				{
					img,
					text: supervisor.name,
					url: supervisor.number
				},
				{},
				{}
			)}`;
		})}
		</main>
</div>`;
	}
);
