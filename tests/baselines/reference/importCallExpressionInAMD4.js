//// [tests/cases/conformance/es2018/dynamicImport/importCallExpressionInAMD4.ts] ////

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
define(["require", "exports"], function (require, exports) {
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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function backup() { return "backup"; }
    exports.backup = backup;
});
//// [2.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    class C {
        constructor() {
            this.myModule = new Promise(function (_a, _b) { require(["./0"], _a, _b); });
        }
        method() {
            this.myModule.then(Zero => {
                console.log(Zero.foo());
            }, async (err) => {
                console.log(err);
                let one = await new Promise(function (_a, _b) { require(["./1"], _a, _b); });
                console.log(one.backup());
            });
        }
    }
});
