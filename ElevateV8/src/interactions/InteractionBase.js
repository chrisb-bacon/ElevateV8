/// <reference path="../interfaces/IDestroyable.ts"/>
/// <reference path="../interfaces/IPlayable.ts"/>
/// <reference path="../../libraries/createjs/createjs.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Container = createjs.Container;
/**
 * Created by Joe on 4/5/2016.
 */
var InteractionBase = (function (_super) {
    __extends(InteractionBase, _super);
    function InteractionBase() {
        _super.call(this);
    }
    InteractionBase.prototype.destroy = function () {
    };
    return InteractionBase;
}(Container));
//# sourceMappingURL=InteractionBase.js.map