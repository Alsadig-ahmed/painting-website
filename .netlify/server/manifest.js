var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["DSC_0614.JPG", "favicon.png", "home.jpg", "style.css"]),
  mimeTypes: { ".JPG": "image/jpeg", ".png": "image/png", ".jpg": "image/jpeg", ".css": "text/css" },
  _: {
    entry: { "file": "immutable/start-ddd3ada0.js", "imports": ["immutable/start-ddd3ada0.js", "immutable/chunks/index-887f0734.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "try",
        pattern: /^\/try\/?$/,
        names: [],
        types: [],
        path: "/try",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
        pattern: /^\/??????????????\/?$/,
        names: [],
        types: [],
        path: "/\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "\u0627\u0644\u0645\u0639\u0631\u0636",
        pattern: /^\/????????????\/?$/,
        names: [],
        types: [],
        path: "/\u0627\u0644\u0645\u0639\u0631\u0636",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "\u0641\u0631\u064A\u0642-\u0627\u0644\u0639\u0645\u0644",
        pattern: /^\/????????-??????????\/?$/,
        names: [],
        types: [],
        path: "/\u0641\u0631\u064A\u0642-\u0627\u0644\u0639\u0645\u0644",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629/good",
        pattern: /^\/??????????????\/good\/?$/,
        names: [],
        types: [],
        path: "/\u0627\u0644\u0645\u062F\u0648\u0646\u0629/good",
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
