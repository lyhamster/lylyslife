const EMOTIONS = {

    rest: [1000, 200],
    angry: [500, 500],
    cheerful : [1000, 200, 400, 400, 400],
    read: [1000, 200, 100, 900],
    sleep: [500, 500, 500, 500],
    bewildered: [700, 700, 700],
    bored: [1000, 700],
    butterfly:[1200, 300, 300, 300, 300, 4300],
    shock: [500, 500],
    sport:[800, 500, 300, 300, 800],
    cry: [1200, 300, 300, 300, 300, 300],
    "mental effort": [ 1200, 300, 300, 300, 300],

}

const LIMBS = {

    walk:[700, 700],
    sit: [100],
    "stand up": [100],
    typing: [800, 300, 500],
    sport: [600, 900, 600, 900],
    dance: [600, 900, 600, 1200],
    fuck: [600, 1500,],
    celebrate: [600, 500, 500, 600],
    "thumb down": [600, 500, 500, 600],

}

function changeBodypart(arr,feature,imgClass){
    
    let bodyIndex = Object.keys(arr).indexOf(feature);
    const unite = -230

    document.querySelector(imgClass).style.top = `${bodyIndex * unite}px`;
}

function changeFace(emotion){
    
  changeBodypart(EMOTIONS,emotion,".imgFace")

}

function changeLimbs(movement){
   changeBodypart(LIMBS,movement,".imgLimbs")
}

const CHEST =[
    "basic", 
    "puffer",
    "bra",
    "military",
    "sport",
    "pattern",
    "party",
    "classy",
    "butterfly",
]

function changeChest(outfit){
    let chestIndex = CHEST.indexOf(outfit);
    document.querySelector(".imgChest").style.left=`${chestIndex * -230 +"px"}`
}

/*
Maintenant, il faut que tu geres le cas ou quand tu rappeles le faceMotion, il faut que ca annule l'ancienne boucle

    il faut que ca annule l'ancienne boucle                                                                                                                                                                                                                                                                                                                                                                                        
    dans la fonction declencheur il faut mettre condition pour pouvoir 

*/ 

let initfaceFrame =0
let initlimbsFrame=0;
let facesetTimeout;
let limbsTimeout;

function repeatfaceMotion(arr,action,imgClass){
    
    document.querySelector(imgClass).style.left= initfaceFrame * -230 +"px"
    
    facesetTimeout = setTimeout(() => {
        
        if( initfaceFrame >= arr[action].length -1){
            initfaceFrame = 0
        } else {
            initfaceFrame++
        }

        repeatfaceMotion(arr,action,imgClass) 

    }, arr[action][initfaceFrame]);

}

function repeatlimbsMotion(arr,action,imgClass){
    
    document.querySelector(imgClass).style.left= initlimbsFrame * -230 +"px"
    
    limbsTimeout = setTimeout(() => {
        
        if( initlimbsFrame >= arr[action].length -1){
            initlimbsFrame = 0
        } else {
            initlimbsFrame++
        }

        repeatlimbsMotion(arr,action,imgClass) 

    }, arr[action][initlimbsFrame]);

}

function faceMotion(action){
    changeFace(action)
    clearTimeout(facesetTimeout);
    repeatfaceMotion(EMOTIONS,action,".imgFace");
}

function limbsMotion(action){
    changeLimbs(action);
    clearTimeout(limbsTimeout);
    repeatlimbsMotion(LIMBS,action,".imgLimbs");
}

//dans ton JS, je veux que tu creer des boutons automatiquement pour chaque emotion possible
/* entre autre pour chnaque emotion il va falloir creer un bouton (via js) qui a le nom de l'emotion*/

const faceBtn = document.querySelector(".faceButtons")
const p = document.createElement("button");
p.textContent= "prout"
faceBtn.appendChild(p)

