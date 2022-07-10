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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("../../chunks/index-cb93fe8d.js");
var import_Header_61d4401f = require("../../chunks/Header-61d4401f.js");
const css$2 = {
  code: "a.svelte-14r4rp3{color:inherit;text-decoration:none}a.svelte-14r4rp3:hover{color:blue;text-decoration:underline}.service.svelte-14r4rp3{background-color:#d2e1e6;box-shadow:0 0.5rem 0.5rem 0 rgba(143, 158, 165, 0.664);margin:0.4rem;padding:0.4rem;border-radius:0.5rem}.flex.svelte-14r4rp3{display:flex;justify-content:space-between;align-items:center}.left.svelte-14r4rp3{margin-left:1rem}.right.svelte-14r4rp3{margin-right:1rem}.cricle.svelte-14r4rp3{padding:5px;width:10px;height:10px;background-color:#fff;border-radius:50%}",
  map: null
};
const Servce = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "servce name" } = $$props;
  let { url = "" } = $$props;
  let { bg = "#d2e6d2" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  $$result.css.add(css$2);
  return `<a${(0, import_index_cb93fe8d.a)("href", url, 0)} class="${"svelte-14r4rp3"}"><h3 style="${"background-color:" + (0, import_index_cb93fe8d.e)(bg) + ";"}" class="${"service flex svelte-14r4rp3"}"><div class="${"cricle left svelte-14r4rp3"}"></div>
		${(0, import_index_cb93fe8d.e)(title)}
		<div class="${"cricle right svelte-14r4rp3"}"></div></h3>
</a>`;
});
var LittleLoop_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'p.svelte-1gpfu86{margin-right:2.4rem;text-align:right;font-size:1.32rem}p.svelte-1gpfu86::after{content:" - "}')();
const css$1 = {
  code: 'p.svelte-1gpfu86{margin-right:2.4rem;text-align:right;font-size:1.32rem}p.svelte-1gpfu86::after{content:" - "}',
  map: null
};
const LittleLoop = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { i = [""] } = $$props;
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  $$result.css.add(css$1);
  return `${(0, import_index_cb93fe8d.b)(i, (item) => {
    return `<p class="${"svelte-1gpfu86"}">${(0, import_index_cb93fe8d.e)(item)}</p>`;
  })}`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".cta.svelte-82sicn.svelte-82sicn{text-align:right;font-size:2rem;margin-right:20%;padding:0.4rem 0}.cta.svelte-82sicn a.svelte-82sicn{color:rgb(255, 94, 30);text-decoration:none}.cta.svelte-82sicn a.svelte-82sicn:hover{color:rgba(255, 94, 30, 0.63);text-decoration:underline}.c.svelte-82sicn.svelte-82sicn{width:100%;padding:0.2rem}.c.svelte-82sicn div.svelte-82sicn{background-color:rgba(154, 177, 184, 0.589);border-radius:1rem;box-shadow:0 0 1.3rem 0.1rem rgba(165, 143, 143, 0.664);margin-bottom:0.7rem}.container.svelte-82sicn.svelte-82sicn{max-width:460px;margin:auto}")();
const css = {
  code: ".cta.svelte-82sicn.svelte-82sicn{text-align:right;font-size:2rem;margin-right:20%;padding:0.4rem 0}.cta.svelte-82sicn a.svelte-82sicn{color:rgb(255, 94, 30);text-decoration:none}.cta.svelte-82sicn a.svelte-82sicn:hover{color:rgba(255, 94, 30, 0.63);text-decoration:underline}.c.svelte-82sicn.svelte-82sicn{width:100%;padding:0.2rem}.c.svelte-82sicn div.svelte-82sicn{background-color:rgba(154, 177, 184, 0.589);border-radius:1rem;box-shadow:0 0 1.3rem 0.1rem rgba(165, 143, 143, 0.664);margin-bottom:0.7rem}.container.svelte-82sicn.svelte-82sicn{max-width:460px;margin:auto}",
  map: null
};
const Routes = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let Servces = [
    {
      url: "",
      title: "\u0639\u0645\u0644 \u062E\u0627\u0631\u062C\u064A",
      subWork: ["\u0628\u0648\u0645\u0627\u0633\u062A\u064A\u0643 \u0633\u0644\u0643", "\u0628\u0648\u0645\u0627\u0633\u062A\u0643 \u0645\u0637\u0641\u064A", "\u062A\u0643\u0634\u0631 \u0631\u0648\u0644\u0629 \u0648\u0631\u0634"],
      bg: ""
    },
    {
      url: "",
      title: "\u0639\u0645\u0644 \u062F\u0627\u062E\u0644\u064A",
      subWork: [
        "\u062A\u0631\u062E\u064A\u0645",
        "\u0645\u0627\u0631\u0628\u0644",
        "\u062A\u0639\u062A\u064A\u0642",
        "\u0637\u064A\u0646\u0629 \u064A\u0627\u0628\u0646\u064A\u0629",
        "\u0641\u0644\u0648\u0631\u0627",
        "3D",
        "\u0627\u0644\u0642\u0637\u064A\u0641\u0629",
        "\u062A\u062E\u0634\u064A\u0628",
        "\u0633\u062D\u0627\u0628 \u0645\u0637\u0627\u0637\u064A"
      ],
      bg: ""
    },
    {
      url: "\u0627\u0644\u0645\u0639\u0631\u0636",
      title: "\u0645\u0639\u0631\u0636 \u0623\u0644\u0627\u0639\u0645\u0627\u0644",
      bg: ""
    },
    {
      url: "tel:+249963003102",
      title: "\u0627\u0637\u0644\u0628 \u0641\u0646\u064A\u0646",
      bg: ""
    },
    {
      url: "\u0641\u0631\u064A\u0642-\u0627\u0644\u0639\u0645\u0644",
      title: "\u0641\u0631\u064A\u0641 \u0627\u0644\u0639\u0645\u0644",
      bg: ""
    }
  ];
  $$result.css.add(css);
  return `<h4 class="${"cta svelte-82sicn"}"><a href="${"tel:+249963003102"}" class="${"svelte-82sicn"}">0963003102 | \u0625\u062A\u0635\u0644 \u0627\u0644\u0623\u0646 </a></h4>
${(0, import_index_cb93fe8d.v)(import_Header_61d4401f.H, "Header").$$render($$result, {}, {}, {})}

<div class="${"container svelte-82sicn"}"><main class="${"c svelte-82sicn"}">${(0, import_index_cb93fe8d.b)(Servces, (s) => {
    return `<div class="${"svelte-82sicn"}">${(0, import_index_cb93fe8d.v)(Servce, "Servce").$$render($$result, { url: s.url, title: s.title, bg: s.bg }, {}, {})}
				${(0, import_index_cb93fe8d.v)(LittleLoop, "LittleLoop").$$render($$result, { i: s.subWork }, {}, {})}
			</div>`;
  })}</main>
</div>`;
});
