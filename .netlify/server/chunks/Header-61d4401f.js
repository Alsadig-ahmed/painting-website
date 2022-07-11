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
	H: () => Header
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require('./index-cb93fe8d.js');
var Servce_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'a.svelte-14r4rp3{color:inherit;text-decoration:none}a.svelte-14r4rp3:hover{color:blue;text-decoration:underline}.service.svelte-14r4rp3{background-color:#d2e1e6;box-shadow:0 0.5rem 0.5rem 0 rgba(143, 158, 165, 0.664);margin:0.4rem;padding:0.4rem;border-radius:0.5rem}.flex.svelte-14r4rp3{display:flex;justify-content:space-between;align-items:center}.left.svelte-14r4rp3{margin-left:1rem}.right.svelte-14r4rp3{margin-right:1rem}.cricle.svelte-14r4rp3{padding:5px;width:10px;height:10px;background-color:#fff;border-radius:50%}')();
var NavMenu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
	'.topnav.svelte-1m5sewe.svelte-1m5sewe{overflow:hidden;background-color:#333;position:relative;box-shadow:0 0 1.4rem 0.2rem rgba(41, 40, 40, 0.822);border-radius:1rem;margin:0.4rem;margin-bottom:1.5rem}.topnav.svelte-1m5sewe #myLinks.svelte-1m5sewe{display:none}.topnav.svelte-1m5sewe a.svelte-1m5sewe{color:white;padding:14px 16px;text-decoration:none;font-size:17px;display:block}.topnav.svelte-1m5sewe a.icon.svelte-1m5sewe{background:linear-gradient(to right, rgb(65, 7, 119), rgb(0, 160, 70));display:block;position:absolute;right:0;top:0}.topnav.svelte-1m5sewe a.svelte-1m5sewe:hover{background-color:#ddd;color:black}.active.svelte-1m5sewe.svelte-1m5sewe{padding:0.9rem;background:linear-gradient(to right, hsl(146deg, 72%, 65%), hsl(332deg, 81%, 70%));color:white}.fs-2.fs-2.svelte-1m5sewe.svelte-1m5sewe{font-size:2rem}')();
const css = {
	code: '.topnav.svelte-1m5sewe.svelte-1m5sewe{overflow:hidden;background-color:#333;position:relative;box-shadow:0 0 1.4rem 0.2rem rgba(41, 40, 40, 0.822);border-radius:1rem;margin:0.4rem;margin-bottom:1.5rem}.topnav.svelte-1m5sewe #myLinks.svelte-1m5sewe{display:none}.topnav.svelte-1m5sewe a.svelte-1m5sewe{color:white;padding:14px 16px;text-decoration:none;font-size:17px;display:block}.topnav.svelte-1m5sewe a.icon.svelte-1m5sewe{background:linear-gradient(to right, rgb(65, 7, 119), rgb(0, 160, 70));display:block;position:absolute;right:0;top:0}.topnav.svelte-1m5sewe a.svelte-1m5sewe:hover{background-color:#ddd;color:black}.active.svelte-1m5sewe.svelte-1m5sewe{padding:0.9rem;background:linear-gradient(to right, hsl(146deg, 72%, 65%), hsl(332deg, 81%, 70%));color:white}.fs-2.fs-2.svelte-1m5sewe.svelte-1m5sewe{font-size:2rem}',
	map: null
};
const NavMenu = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
	let {
		title = '\u0627\u0644\u0635\u0627\u062F\u0642 \u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0646\u0642\u0627\u0634\u0629'
	} = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	$$result.css.add(css);
	return `
<div class="${'topnav svelte-1m5sewe'}"><a href="${'/'}" class="${'active fs-2 svelte-1m5sewe'}">${(0,
	import_index_cb93fe8d.e)(title)}</a>
  
  <div id="${'myLinks'}" class="${'svelte-1m5sewe'}"><a href="${'mailto:alsadq.ahmed@gmail.com'}" class="${'svelte-1m5sewe'}">\u0623\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629</a>
    <a href="${'about'}" class="${'svelte-1m5sewe'}">\u0645\u0646 \u0646\u062D\u0646 </a></div>
  <a href="${'#'}" class="${'icon svelte-1m5sewe'}">
    <svg viewBox="${'-5 0 10 8'}" width="${'40'}"><line y2="${'8'}" stroke="${'#000'}" stroke-width="${'10'}" stroke-dasharray="${'2 1'}"></line></svg></a>
</div>`;
});
const Header = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
	let {
		title = '\u0627\u0644\u0635\u0627\u062F\u0642 \u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0646\u0642\u0627\u0634\u0629'
	} = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	return `${(0, import_index_cb93fe8d.v)(NavMenu, 'NavMenu').$$render($$result, { title }, {}, {})}


<div class="${'fix'}"></div>`;
});
