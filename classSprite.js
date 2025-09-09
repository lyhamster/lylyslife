
export default class Sprite {
    frames;
    selector;
    unit = -230
    currentAction;
    initFrame=0;
    timeOut;
    divButton=".ButtonsBox"

    constructor(frames, selector){
        this.selector= selector;
        this.frames=frames;
    }

    addMotions(action){
        this.currentAction= action;
        this._changeSprite();
        
        clearTimeout(this.timeOut);
        this._repeatSpriteMotion();
    };

    addButtons(){
        const spriteBttn = document.querySelector(this.divButton);
        const addchildDiv = document.createElement("div")
        const spriteArr = Object.keys(this.frames)
        spriteArr.forEach((property) => {
            let bttn = document.createElement("button")
            bttn.textContent = property 
            bttn.addEventListener("click",()=>{
                this.addMotions(property) 
            })
            addchildDiv.appendChild(bttn)
        });
        spriteBttn.appendChild(addchildDiv);
    }

    _repeatSpriteMotion(){
        document.querySelector(this.selector).style.left= this.initFrame * this.unit+"px";
        
        this.timeOut = setTimeout(() => {
            if( this.initFrame >= this.frames[this.currentAction].length -1){
                this.initFrame = 0
            } else {
                this.initFrame++
            }

            this._repeatSpriteMotion();
        }, this.frames[this.currentAction][this.initFrame]);
    }

    _changeSprite() {
        let spriteIndex=Object.keys(this.frames).indexOf(this.currentAction)
        document.querySelector(this.selector).style.top=`${spriteIndex*this.unit}px`
    }
}

