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
  C: () => Card
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("./index-cb93fe8d.js");
const css = {
  code: "div.c.svelte-v2ra33.svelte-v2ra33{background-color:rgb(255, 247, 247);position:relative;margin:0.8rem 1rem;height:20rem;box-shadow:0 0 0.5rem 0.2rem rgba(36, 35, 35, 0.623);border-radius:1rem}div.c.svelte-v2ra33 h3.svelte-v2ra33{position:absolute;color:rgba(255, 255, 255, 0.863);bottom:0;left:0;right:0;z-index:4;font-size:2rem;text-align:right;height:20%;border-radius:0 0 1rem 1rem;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.089), rgba(8, 8, 8, 0.733), rgba(8, 8, 8, 0.226))}img.svelte-v2ra33.svelte-v2ra33{border-radius:1rem;height:20rem;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}a.svelte-v2ra33.svelte-v2ra33{text-decoration:none;color:unset}",
  map: null
};
const Card = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { url = "" } = $$props;
  let { img = "/home.jpg" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  $$result.css.add(css);
  return `<div class="${"c svelte-v2ra33"}"><a${(0, import_index_cb93fe8d.a)("href", url, 0)} class="${"svelte-v2ra33"}">
		<img${(0, import_index_cb93fe8d.a)("src", img, 0)}${(0, import_index_cb93fe8d.a)("alt", text, 0)} class="${"svelte-v2ra33"}">
		<h3 class="${"svelte-v2ra33"}">${(0, import_index_cb93fe8d.e)(text)}</h3></a>
</div>`;
});
