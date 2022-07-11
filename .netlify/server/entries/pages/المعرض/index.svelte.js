var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => UD8uA7uD9u84uD9u85uD8uB9uD8uB1uD8uB6
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5c544924 = require("../../../immutable/chunks/index-5c544924.js");
var import_Header_105ce7dd = require("../../../immutable/chunks/Header-105ce7dd.js");
var import_Card_0491d320 = require("../../../immutable/chunks/Card-0491d320.js");
var Gallery_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-ntca2n{display:grid;grid-template-columns:auto auto auto auto}")();
const css$1 = {
  code: "main.svelte-ntca2n{display:grid;grid-template-columns:auto auto auto auto}",
  map: null
};
const Gallery = (0, import_index_5c544924.c)(($$result, $$props, $$bindings, slots) => {
  let { img = "/home.jpg" } = $$props;
  let { work = "" } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  $$result.css.add(css$1);
  return `<h1>${(0, import_index_5c544924.e)(work)}</h1>
<main class="${"svelte-ntca2n"}">${(0, import_index_5c544924.v)(import_Card_0491d320.C, "Card").$$render($$result, { img }, {}, {})}
	${(0, import_index_5c544924.v)(import_Card_0491d320.C, "Card").$$render($$result, { img }, {}, {})}
	${(0, import_index_5c544924.v)(import_Card_0491d320.C, "Card").$$render($$result, { img }, {}, {})}
	${(0, import_index_5c544924.v)(import_Card_0491d320.C, "Card").$$render($$result, { img }, {}, {})}
</main>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".c.svelte-14ve806{width:100%;height:1000vh;padding:0.2rem}.container.svelte-14ve806{padding:0 15%;margin:auto}")();
const css = {
  code: ".c.svelte-14ve806{width:100%;height:1000vh;padding:0.2rem}.container.svelte-14ve806{padding:0 15%;margin:auto}",
  map: null
};
const UD8uA7uD9u84uD9u85uD8uB9uD8uB1uD8uB6 = (0, import_index_5c544924.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_5c544924.v)(import_Header_105ce7dd.H, "Header").$$render($$result, { title: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644" }, {}, {})}

<div class="${"container svelte-14ve806"}"><main class="${"c svelte-14ve806"}">${(0, import_index_5c544924.v)(Gallery, "Gallery").$$render($$result, { work: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0639\u062A\u064A\u0642" }, {}, {})}
		${(0, import_index_5c544924.v)(Gallery, "Gallery").$$render($$result, { work: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0641\u0644\u0648\u0631 " }, {}, {})}
		${(0, import_index_5c544924.v)(Gallery, "Gallery").$$render($$result, { work: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0634\u0627\u0634\u0627\u062A" }, {}, {})}</main>
</div>`;
});
