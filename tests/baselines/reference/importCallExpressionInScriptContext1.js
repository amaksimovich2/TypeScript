//// [tests/cases/conformance/es2018/dynamicImport/importCallExpressionInScriptContext1.ts] ////

//// [0.ts]
export function foo() { return "foo"; }

//// [1.ts]
var p1 = import("./0");
function arguments() { } // this is allow as the file doesn't have implicit "use strict"

//// [0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo() { return "foo"; }
exports.foo = foo;
//// [1.js]
var __resolved = new Promise(function (resolve) { resolve(); });
var p1 = __resolved.then(function () { return require("./0"); });
function arguments() { } // this is allow as the file doesn't have implicit "use strict"
