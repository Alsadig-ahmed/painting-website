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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5c544924 = require("../../../immutable/chunks/index-5c544924.js");
var import_Header_105ce7dd = require("../../../immutable/chunks/Header-105ce7dd.js");
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".c.svelte-1pd15wp{width:100%;height:1000vh;padding:0.2rem}.container.svelte-1pd15wp{max-width:460px;margin:auto}")();
const css = {
  code: ".c.svelte-1pd15wp{width:100%;height:1000vh;padding:0.2rem}.container.svelte-1pd15wp{max-width:460px;margin:auto}",
  map: null
};
const About = (0, import_index_5c544924.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_5c544924.v)(import_Header_105ce7dd.H, "Header").$$render($$result, { title: "\u0645\u0646 \u0646\u062D\u0646" }, {}, {})}

<div class="${"container svelte-1pd15wp"}"><main class="${"c svelte-1pd15wp"}"><h2>\u0634\u0631\u062D \u0644\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u0646\u0642\u062F\u0645\u0647\u0627</h2></main>
</div>`;
});
