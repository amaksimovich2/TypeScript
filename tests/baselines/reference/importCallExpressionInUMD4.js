//// [tests/cases/conformance/es2018/dynamicImport/importCallExpressionInUMD4.ts] ////

//// [0.ts]
export class B {
    print() { return "I am B"}
}

export function foo() { return "foo" }

//// [1.ts]
export function backup() { return "backup"; }

//// [2.ts]
declare var console: any;
class C {
    private myModule = import("./0");
    method() {
        this.myModule.then(Zero => {
            console.log(Zero.foo());
        }, async err => {
            console.log(err);
            let one = await import("./1");
            console.log(one.backup());
        });
    }
}

//// [0.js]
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class B {
        print() { return "I am B"; }
    }
    exports.B = B;
    function foo() { return "foo"; }
    exports.foo = foo;
});
//// [1.js]
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function backup() { return "backup"; }
    exports.backup = backup;
});
//// [2.js]
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var __syncRequire = typeof module === "object" && typeof module.exports === "object";
    var __resolved = new Promise(function (resolve) { resolve(); });
    class C {
        constructor() {
            this.myModule = __syncRequire ? __resolved.then(function () { return require("./0"); }) : new Promise(function (_a, _b) { require(["./0"], _a, _b); });
        }
        method() {
            this.myModule.then(Zero => {
                console.log(Zero.foo());
            }, async (err) => {
                console.log(err);
                let one = await (__syncRequire ? __resolved.then(function () { return require("./1"); }) : new Promise(function (_a, _b) { require(["./1"], _a, _b); }));
                console.log(one.backup());
            });
        }
    }
});
