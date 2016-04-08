/// <reference path="../interfaces/IDestroyable.ts"/>
/// <reference path="../interfaces/IPlayable.ts"/>
/// <reference path="../../libraries/createjs/createjs.d.ts"/>
/// <reference path="../../libraries/greensock/greensock.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Joe on 4/6/2016.
 */
var TransformFade = (function (_super) {
    __extends(TransformFade, _super);
    //--------------------------------------------------------------------------
    //
    //  Constructor
    //
    //--------------------------------------------------------------------------
    function TransformFade(targets, alphaTo, duration, delay) {
        if (targets === void 0) { targets = []; }
        if (alphaTo === void 0) { alphaTo = 0; }
        if (duration === void 0) { duration = .5; }
        if (delay === void 0) { delay = 0; }
        _super.call(this);
        this.targets = targets;
        this.alphaTo = alphaTo;
        this.duration = duration;
        this.delay = delay;
    }
    //--------------------------------------------------------------------------
    //
    //  Methods
    //
    //--------------------------------------------------------------------------
    //----------------------------------
    //  Private:
    //----------------------------------
    TransformFade.prototype.fade = function (target) {
        TweenMax.to(target, this.duration, { alpha: this.alphaTo, onUpdate: target.getStage().update, onUpdateScope: target.getStage(), ease: Sine.easeOut });
    };
    //----------------------------------
    //  Public:
    //----------------------------------
    TransformFade.prototype.destroy = function () {
    };
    TransformFade.prototype.play = function () {
        this.origAlpha = [];
        this.origTargets = [];
        for (var _i = 0, _a = this.targets; _i < _a.length; _i++) {
            var target = _a[_i];
            this.origAlpha.push(target.alpha);
            this.origTargets.push(target);
            this.fade(target);
        }
    };
    return TransformFade;
}(createjs.Container));
//# sourceMappingURL=TransformFade.js.map