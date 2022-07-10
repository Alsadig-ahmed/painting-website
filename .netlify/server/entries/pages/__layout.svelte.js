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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("../../chunks/index-cb93fe8d.js");
const Head = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"/style.css"}" data-svelte="svelte-2b3axq">${$$result.title = `<title> \u0627\u0644\u0635\u0627\u062F\u0642 \u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0646\u0642\u0627\u0634\u0629 </title>`, ""}`, ""}`;
});
const _layout = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_cb93fe8d.v)(Head, "Head").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
