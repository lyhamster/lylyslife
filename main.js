const FACE_FRAMES = {

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

const LIMBS_FRAMES = {  
    
    "stand up": [100],
    walk:[700, 700],
    sit: [100],
    typing: [800, 300, 500],
    sport: [600, 900, 600, 900],
    dance: [600, 900, 600, 1200],
    fuck: [600, 1500,],
    celebrate: [600, 500, 500, 600],
    "thumb down": [600, 500, 500, 600],
}

function changeBodypart(arr,feature,imgClass){
    
    let bodyIndex = Object.keys(arr).indexOf(feature);
    const unite = -230;

    document.querySelector(imgClass).style.top = `${bodyIndex * unite}px`;
}

function changeFace(emotion){
  changeBodypart(FACE_FRAMES,emotion,".imgFace");

}

function changeLimbs(movement){
   changeBodypart(LIMBS_FRAMES,movement,".imgLimbs");
}

const CHEST_FRAME =[
    "basic", 
    "puffer",
    "bra",
    "military",
    "hoddie",
    "party",
    "swimming top",
    "crop top",
    "flanel",
]

function changeChest(outfit){
    let chestIndex = CHEST_FRAME.indexOf(outfit);
    document.querySelector(".imgChest").style.left=`${chestIndex * -230 +"px"}`;
}


let initfaceFrame =0;
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

        repeatfaceMotion(arr,action,imgClass);

    }, arr[action][initfaceFrame]);

}

function repeatlimbsMotion(arr,action,imgClass){
    
    document.querySelector(imgClass).style.left= initlimbsFrame * -230 +"px";
    
    limbsTimeout = setTimeout(() => {
        
        if( initlimbsFrame >= arr[action].length -1){
            initlimbsFrame = 0
        } else {
            initlimbsFrame++
        }

        repeatlimbsMotion(arr,action,imgClass);

    }, arr[action][initlimbsFrame]);

}

function faceMotion(action){
    changeFace(action);
    clearTimeout(facesetTimeout);
    repeatfaceMotion(FACE_FRAMES,action,".imgFace");
}

function limbsMotion(action){
    changeLimbs(action);
    clearTimeout(limbsTimeout);
    repeatlimbsMotion(LIMBS_FRAMES,action,".imgLimbs");
}

function faceButton (){
    
    const faceBttns = document.querySelector(".faceButtons") 
    
    const faceArr= Object.keys(FACE_FRAMES) 
    
    faceArr.forEach((property) => {
        let bttn = document.createElement("button")
        bttn.textContent = property 
        
        bttn.addEventListener("click",()=>{
           faceMotion(property) 
        })
        
        faceBttns.appendChild(bttn)

    })

}

faceButton()

function limbsButton(){
    const limbsBttn= document.querySelector(".limbButtons");

    const limbsArr = Object.keys(LIMBS_FRAMES)
    
    limbsArr.forEach((property) => {
        let bttn = document.createElement("button")
        bttn.textContent = property 
        
        bttn.addEventListener("click",()=>{
           limbsMotion(property) 
        })
        
        limbsBttn.appendChild(bttn)

    })
}

limbsButton();

function chestButtons(){
    const chestBttn= document.querySelector(".chestButtons");
    
    CHEST_FRAME.forEach((property) => {
        let bttn = document.createElement("button")
        bttn.textContent = property 
        
        bttn.addEventListener("click",()=>{
           changeChest(property)
        })
        
        chestBttn.appendChild(bttn)
    })
}

chestButtons()

/* 
faire une fonction qui permet d'attendre le temps donner, par exemple :
await delay(1000) // attends une seconde avant la prochaine ligne
tu vas devoir faire une "fausse" promise qui va permettre d'attendre selon le temps donner
une fois que ca c'ést fait on verra la suite
*/

function awaitDelay(time){
    return new Promise((resolve) => {
    setTimeout(() =>  resolve()
     ,time)})
}

async function scene () {
    faceMotion("");
    await awaitDelay()
    faceMotion("")
}

