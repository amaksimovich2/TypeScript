//// [tests/cases/conformance/es2018/dynamicImport/importCallExpressionInCJS1.ts] ////

//// [0.ts]
export function foo() { return "foo"; }

//// [1.ts]
import("./0");
var p1 = import("./0");
p1.then(zero => {
    return zero.foo();
});

function foo() {
    const p2 = import("./0");
}

//// [0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo() { return "foo"; }
exports.foo = foo;
//// [1.js]
var __resolved = new Promise(function (resolve) { resolve(); });
__resolved.then(function () { return require("./0"); });
var p1 = __resolved.then(function () { return require("./0"); });
p1.then(zero => {
    return zero.foo();
});
function foo() {
    const p2 = __resolved.then(function () { return require("./0"); });
}
