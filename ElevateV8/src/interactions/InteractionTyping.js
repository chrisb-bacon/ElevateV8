/// <reference path="../assets/AssetText.ts"/>
/// <reference path="../transforms/TransformFade.ts"/>
/// <reference path="InteractionBase.ts"/>
/// <reference path="../../libraries/txtjs/txt.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = createjs.Shape;
var Character = txt.Character;
var Line = txt.Line;
var Word = txt.Word;
/**
 * Created by Joe on 4/4/2016.
 */
var InteractionTyping = (function (_super) {
    __extends(InteractionTyping, _super);
    //--------------------------------------------------------------------------
    //
    //  Constructor
    //
    //--------------------------------------------------------------------------
    function InteractionTyping() {
        var _this = this;
        _super.call(this);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        //----------------------------------
        //  Public:
        //----------------------------------
        this.answer = "";
        this.displayUnderlines = false;
        this.textColor = "#000000";
        this.word = "";
        //----------------------------------
        //  Private:
        //----------------------------------
        this.CURSOR_ALPHA = .1;
        this.CURSOR_ROUNDNESS = 6;
        this.CURSOR_SPEED = 500;
        this.applyFocus = function () {
            _this.input.focus();
        };
        this.flashCursor = function () {
            _this.flashingCursor.visible = !_this.flashingCursor.visible;
            _this.stage.update();
        };
        this.handleClick = function () {
            _this.setFocus();
        };
        this.handleInput = function () {
            _this.stopFlashing();
            _this.inputAssetText.text = _this.input.value;
            _this.inputAssetText.layout();
            _this.positionCursor();
            _this.startFlashing();
        };
        this.positionCursor = function () {
            if (_this.inputAssetText.lines.length > 0) {
                var curLine = _this.inputAssetText.lines[_this.curLineIndex];
                var curWord = curLine.children[_this.curWordIndex];
                var curChar = curWord.children[curWord.children.length - 1];
                _this.flashingCursor.x = curChar.x + curChar.measuredWidth;
            }
            else {
                _this.flashingCursor.x = 0;
            }
        };
        this._init();
        this.createDOMTextInput();
        this.createInputAssetText();
        this.createCursor();
        this.createFocusBtn();
        this.startFlashing();
    }
    //--------------------------------------------------------------------------
    //
    //  Methods
    //
    //--------------------------------------------------------------------------
    //----------------------------------
    //  Private:
    //----------------------------------
    InteractionTyping.prototype._init = function () {
        this.attemptNum = 0;
        this.curLineIndex = 0;
        this.curWordIndex = 0;
    };
    InteractionTyping.prototype.createCursor = function () {
        this.flashingCursor = new Shape();
        this.flashingCursor.graphics.beginFill(this.textColor);
        this.flashingCursor.graphics.drawRoundRect(0, 0, 64, this.inputAssetText.height, this.CURSOR_ROUNDNESS);
        this.flashingCursor.graphics.endFill();
        this.flashingCursor.alpha = this.CURSOR_ALPHA;
        this.flashingCursor.y = this.inputAssetText.y - 4;
        //this.flashingCursor.addEventListener("click", this.handleClick);
        this.addChild(this.flashingCursor);
    };
    InteractionTyping.prototype.createDOMTextInput = function () {
        this.input = document.createElement("input");
        this.input.type = "text";
        this.input.autocomplete = "off";
        this.input.autocorrect = "off";
        this.input.autocapitalize = "off";
        this.input.spellcheck = false;
        this.input.className = "assetText";
        document.body.appendChild(this.input);
        this.input.addEventListener("input", this.handleInput);
        this.setFocus();
    };
    InteractionTyping.prototype.createFocusBtn = function () {
        this.focusBtn = new Shape();
        this.focusBtn.graphics.beginFill("#FFF");
        this.focusBtn.graphics.drawRect(this.inputAssetText.x, this.inputAssetText.y, this.inputAssetText.width, this.inputAssetText.height);
        this.focusBtn.graphics.endFill();
        this.focusBtn.alpha = .01;
        this.focusBtn.addEventListener("click", this.handleClick);
        this.addChild(this.focusBtn);
    };
    InteractionTyping.prototype.createInputAssetText = function () {
        this.inputAssetText = new AssetText();
        this.inputAssetText.play();
        //this.inputAssetText.addEventListener("click", this.handleClick);
        this.addChild(this.inputAssetText);
    };
    InteractionTyping.prototype.setFocus = function () {
        setTimeout(this.applyFocus, 100);
    };
    InteractionTyping.prototype.startFlashing = function () {
        this.flashingCursor.visible = false;
        if (this.stage) {
            this.stage.update();
        }
        this.flashingIntervalID = setInterval(this.flashCursor, this.CURSOR_SPEED);
    };
    InteractionTyping.prototype.stopFlashing = function () {
        clearInterval(this.flashingIntervalID);
        this.flashingCursor.visible = false;
        if (this.stage) {
            this.stage.update();
        }
    };
    //----------------------------------
    //  Public:
    //----------------------------------
    InteractionTyping.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    InteractionTyping.prototype.play = function () {
    };
    return InteractionTyping;
}(InteractionBase));
//# sourceMappingURL=InteractionTyping.js.map