/// <reference path="../assets/AssetText.ts"/>
/// <reference path="../transforms/TransformFade.ts"/>
/// <reference path="InteractionBase.ts"/>
/// <reference path="../../libraries/txtjs/txt.d.ts"/>

import Shape = createjs.Shape;
import Character = txt.Character;
import Line = txt.Line;
import Word = txt.Word;

/**
 * Created by Joe on 4/4/2016.
 */

class InteractionTyping extends InteractionBase implements IDestroyable, IPlayable
{

    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //  Public:
    //----------------------------------

    answer:string = "";
    displayUnderlines:boolean = false;
    textColor:string = "#000000";
    word:string = "";

    //----------------------------------
    //  Private:
    //----------------------------------

    private CURSOR_ALPHA:number = .1;
    private CURSOR_ROUNDNESS:number = 6;
    private CURSOR_SPEED:number = 500;

    private attemptNum:number;
    private curLineIndex:number;
    private curWordIndex:number;
    private flashingCursor:Shape;
    private flashingIntervalID:number;
    private focusBtn:Shape;
    private input;
    private inputAssetText:AssetText;

    //--------------------------------------------------------------------------
    //
    //  Constructor
    //
    //--------------------------------------------------------------------------

    constructor()
    {
        super();

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

    private _init()
    {
        this.attemptNum = 0;
        this.curLineIndex = 0;
        this.curWordIndex = 0;
    }

    private applyFocus = () =>
    {
        this.input.focus();
    }

    private createCursor()
    {
        this.flashingCursor = new Shape();
        this.flashingCursor.graphics.beginFill(this.textColor);
        this.flashingCursor.graphics.drawRoundRect(0, 0, 64, this.inputAssetText.height, this.CURSOR_ROUNDNESS);
        this.flashingCursor.graphics.endFill();
        this.flashingCursor.alpha = this.CURSOR_ALPHA;
        this.flashingCursor.y = this.inputAssetText.y-4;
        //this.flashingCursor.addEventListener("click", this.handleClick);
        this.addChild(this.flashingCursor);
    }

    private createDOMTextInput()
    {
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
    }

    private createFocusBtn()
    {
        this.focusBtn = new Shape();
        this.focusBtn.graphics.beginFill("#FFF");
        this.focusBtn.graphics.drawRect(this.inputAssetText.x, this.inputAssetText.y, this.inputAssetText.width, this.inputAssetText.height);
        this.focusBtn.graphics.endFill();
        this.focusBtn.alpha = .01;
        this.focusBtn.addEventListener("click", this.handleClick);
        this.addChild(this.focusBtn);
    }

    private createInputAssetText()
    {
        this.inputAssetText = new AssetText();
        this.inputAssetText.play();
        //this.inputAssetText.addEventListener("click", this.handleClick);
        this.addChild(this.inputAssetText);
    }

    private flashCursor = () =>
    {
        this.flashingCursor.visible = !this.flashingCursor.visible;
        this.stage.update();
    }

    private handleClick = () =>
    {
        this.setFocus();
    }

    private handleInput = () =>
    {
        this.stopFlashing();
        this.inputAssetText.text = this.input.value;
        this.inputAssetText.layout();
        this.positionCursor();
        this.startFlashing();
    }

    private positionCursor = () =>
    {
        if(this.inputAssetText.lines.length > 0)
        {
            var curLine:Line = this.inputAssetText.lines[this.curLineIndex];
            var curWord:Word = <Word>curLine.children[this.curWordIndex];
            var curChar:Character = <Character>curWord.children[curWord.children.length-1];
            this.flashingCursor.x = curChar.x+curChar.measuredWidth;
        }
        else
        {
            this.flashingCursor.x = 0;
        }
    }

    private setFocus()
    {
        setTimeout(this.applyFocus, 100);
    }

    private startFlashing()
    {
        this.flashingCursor.visible = false;
        if(this.stage)
        {
            this.stage.update();
        }
        this.flashingIntervalID = setInterval(this.flashCursor, this.CURSOR_SPEED);
    }

    private stopFlashing()
    {
        clearInterval(this.flashingIntervalID);
        this.flashingCursor.visible = false;
        if(this.stage)
        {
            this.stage.update();
        }
    }

    //----------------------------------
    //  Public:
    //----------------------------------

    destroy()
    {
        super.destroy();
    }

    play()
    {

    }

}
