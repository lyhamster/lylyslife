class Limbs{
    LIMBS = {
        walking: [700, 700],
        sit: [100],
        neutral: [100],
        typing: [800, 300, 500],
        sport: [600, 900, 600, 900],
        dance: [600, 900, 600, 1200],
        fuck: [600, 1500,],
        fiesta: [600, 500, 500, 600],
        kill: [600, 500, 500, 600],
    }
    imgLimbs=".imgLimbs";
    unit = -230;
    currentAction;
    initlimbsFrame = 0;
    limbsTimeout;

    changeLimbs(){
        let bodyIndex= Object.keys(this.LIMBS).indexOf(this.currentAction);
        document.querySelector(this.imgLimbs).style.top = `${bodyIndex * this.unit}px`;
    };

    limbsMotion(action){
        this.currentAction=action
        this.changeLimbs();

        clearTimeout(limbsTimeout);
        this._repeatlimbsMotion();
    };

    limbsButton(){
        const limbsBttn= document.querySelector(this.imgLimbs);
        const limbsArr = Object.keys(this.LIMBS)
        limbsArr.forEach((property) => {
            let bttn = document.createElement("button")
            bttn.textContent = property 
            bttn.addEventListener("click",()=>{
            limbsMotion(property) 
            })
            limbsBttn.appendChild(bttn)
        });
    };   

    _repeatlimbsMotion(){
        document.querySelector(this.imgLimbs).style.left= this.initlimbsFrame * this.unit+"px";
        
        this.limbsTimeout = setTimeout(() => {
            if( this.initlimbsFrame >= this.Limbs[this.currentAction].length -1){
                this.initlimbsFrame = 0
            } else {
                this.initlimbsFrame++
            }

            this._repeatlimbsMotion();
        }, this.Limbs[this.currentAction][this.initlimbsFrame]);
    };
};

class Face {
    FRAME = {
        "rest face": [1000, 200],
        angry: [500, 500],
        playful : [1000, 200, 400, 400, 400],
        reading: [1000, 200, 100, 900],
        sleeping: [500, 500, 500, 500],
        bewildered: [700, 700, 700],
        bored: [1000, 700],
        butterfly:[1200, 300, 300, 300, 300, 4300],
        shocked: [500, 500],
        sport:[800, 500, 300, 300, 800],
        crying: [1200, 300, 300, 300, 300, 300],
        "mental effort": [ 1200, 300, 300, 300, 300],
    }

    imgFace=".imgFace";
    unit=-230;
    currentFeature;
    initfaceFrame =0;
    facesetTimeout;

    changeFace(){
        let bodyIndex = Object.keys(this.FRAME).indexOf(this.currentFeature);
        document.querySelector(this.imgFace).style.top = `${bodyIndex * this.unit}px`;
    }

    faceMotion(action){
        currentFeature=action
        this.changeFace();

        clearTimeout(facesetTimeout);
        this._repeatfaceMotion();
    };

    faceButton (){
        const faceBttns = document.querySelector(this.imgFace) 
        const faceArr= Object.keys(this.FRAME) 
        
        faceArr.forEach((property) => {
            let bttn = document.createElement("button")
            bttn.textContent = property 
            
            bttn.addEventListener("click",()=>{
                faceMotion(property) 
            })
            faceBttns.appendChild(bttn)
        })
    };

    _repeatfaceMotion(){
        document.querySelector(this.imgFace).style.left= this.initfaceFrame * this.unit +"px"
        
        this.facesetTimeout = setTimeout(() => {
            if( this.initfaceFrame >= this.FRAME[this.currentFeature].length -1){
                this.initfaceFrame = 0
            } else {
                this.initfaceFrame++
            }
            this._repeatfaceMotion();
        }, this.FRAME[this.currentFeature][this.initfaceFrame]);
    };
};

class Sprite {
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

