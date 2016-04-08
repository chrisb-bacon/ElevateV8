/// <reference path="../interfaces/IDestroyable.ts"/>
/// <reference path="../interfaces/IPlayable.ts"/>
/// <reference path="../../libraries/createjs/createjs.d.ts"/>

import Container = createjs.Container;

/**
 * Created by Joe on 4/5/2016.
 */

class InteractionBase extends Container implements IDestroyable
{

    constructor()
    {
        super();
    }

    destroy()
    {

    }

}