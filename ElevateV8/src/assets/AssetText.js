/// <reference path="../interfaces/IPlayable.ts"/>
/// <reference path="../interfaces/IResetable.ts"/>
/// <reference path="../../libraries/createjs/createjs.d.ts"/>
/// <reference path="../../libraries/txtjs/txt.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Joe on 4/4/2016.
 */
var AssetText = (function (_super) {
    __extends(AssetText, _super);
    //--------------------------------------------------------------------------
    //
    //  Constructor
    //
    //--------------------------------------------------------------------------
    function AssetText(initText, size, width, height) {
        if (initText === void 0) { initText = ""; }
        if (size === void 0) { size = 128; }
        if (width === void 0) { width = 300; }
        if (height === void 0) { height = 130; }
        var defaultParams = {
            text: initText,
            font: "card-edu-reg",
            size: size,
            //align:txt.Align.TOP_CENTER,
            width: width,
            height: height,
            x: 0,
            y: 4,
            debug: false
        };
        _super.call(this, defaultParams);
        this.visible = false;
        this._init();
    }
    //--------------------------------------------------------------------------
    //
    //  Methods
    //
    //--------------------------------------------------------------------------
    //----------------------------------
    //  Private:
    //----------------------------------
    AssetText.prototype._init = function () {
        this.played = false;
    };
    //----------------------------------
    //  Public:
    //----------------------------------
    AssetText.prototype.play = function () {
        this.played = true;
        this.visible = true;
    };
    AssetText.prototype.reset = function () {
        this.visible = false;
        this.played = false;
    };
    AssetText.prototype.updateText = function () {
        this.text = "change";
        this.layout();
        this.render();
    };
    return AssetText;
}(txt.Text));
//# sourceMappingURL=AssetText.js.map