import Sprite from "./classSprite";

export default class  AnimatedSprite extends Sprite {
    initFrame=0;
    timeOut;

    setAction(state){
        this.currentSprite= state;
        this._changeSprite();
        
        clearTimeout(this.timeOut);
        this._repeatSpriteMotion();
    };

    _repeatSpriteMotion(){
        document.querySelector(this.selector).style.left= this.initFrame * this.unit+"px";
        
        this.timeOut = setTimeout(() => {
            if( this.initFrame >= this.elements[this.currentSprite].length -1){
                this.initFrame = 0
            } else {
                this.initFrame++
            }

            this._repeatSpriteMotion();
        }, this.elements[this.currentSprite][this.initFrame]);
    }

    _changeSprite() {
        let spriteIndex=Object.keys(this.elements).indexOf(this.currentSprite)
        document.querySelector(this.selector).style.top=`${spriteIndex*this.unit}px`
    }
}
