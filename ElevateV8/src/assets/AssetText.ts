/// <reference path="../interfaces/IPlayable.ts"/>
/// <reference path="../interfaces/IResetable.ts"/>
/// <reference path="../../libraries/createjs/createjs.d.ts"/>
/// <reference path="../../libraries/txtjs/txt.d.ts"/>

/**
 * Created by Joe on 4/4/2016.
 */

class AssetText extends txt.Text implements IPlayable, IResetable
{
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //  Private:
    //----------------------------------

    private played:boolean;

    //--------------------------------------------------------------------------
    //
    //  Constructor
    //
    //--------------------------------------------------------------------------

    constructor(initText:string="", size:number=128, width:number=300, height:number=130)
    {
        var defaultParams = {
            text:initText,
            font:"card-edu-reg",
            size:size,
            //align:txt.Align.TOP_CENTER,
            width:width,
            height:height,
            x:0,
            y:4,
            debug:false
        };
        super(defaultParams);
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

    private _init()
    {
        this.played = false;
    }

    //----------------------------------
    //  Public:
    //----------------------------------

    play()
    {
        this.played = true;
        this.visible = true;
    }

    reset()
    {
        this.visible = false;
        this.played = false;
    }

    updateText()
    {
        this.text = "change";
        this.layout();
        this.render();
    }

}