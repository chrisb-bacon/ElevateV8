/// <reference path="../interfaces/IDestroyable.ts"/>
/// <reference path="../interfaces/IPlayable.ts"/>
/// <reference path="../../libraries/createjs/createjs.d.ts"/>
/// <reference path="../../libraries/greensock/greensock.d.ts"/>

/**
 * Created by Joe on 4/6/2016.
 */

class TransformFade extends createjs.Container implements IDestroyable, IPlayable
{
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //  Public:
    //----------------------------------

    alphaTo:number;
    duration:number;
    delay:number;
    targets:any[];

    //----------------------------------
    //  Private:
    //----------------------------------

    private origAlpha:any[];
    private origTargets:any[];

    //--------------------------------------------------------------------------
    //
    //  Constructor
    //
    //--------------------------------------------------------------------------

    constructor(targets:any[]=[], alphaTo:number=0, duration:number=.5, delay:number=0)
    {
        super();
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

    private fade(target:any)
    {
        TweenMax.to(target, this.duration, {alpha:this.alphaTo, onUpdate:target.getStage().update, onUpdateScope:target.getStage(), ease:Sine.easeOut});
    }

    //----------------------------------
    //  Public:
    //----------------------------------

    destroy()
    {

    }

    play()
    {
        this.origAlpha = [];
        this.origTargets = [];
        for(var target of this.targets)
        {
            this.origAlpha.push(target.alpha);
            this.origTargets.push(target);
            this.fade(target);
        }
    }

}