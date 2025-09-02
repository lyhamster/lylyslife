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


/*
prochaine etape, c' est faire une fonction qui va accepter en argument une sceneData
cet argument sera toujours :
un array
ou chaque ligne du tableau sera un deuxieme array
ce deuxieme array, sera composer de 2 elements : les modifications a faire, le temps d'attente avant la prochaine ligne

laFonction([
   [changement de tete en sport + changement de limbs en sport, 2000],
   [changement de tete en happy + changement de limbs en fiesta, 3000],
   [changement de tete en neutral+ changement de limbs en neutral, 0],
])

*/

const testData = [
    ["sport", "sport",2000], 
    ["playful", "fiesta",3000],
    ["rest face", "fiesta",5000], 
    ["butterfly", "fuck",0], 
    ];

const cegrosDebiledeDydy =[
    ["sleeping","sit",3000],
    ["shocked","neutral",2000],
    ["rest face","walking",4000],
    ["mental effort", "typing",0],
]

async function spriteSceneDelay(sceneData,instructionNumber=0){
  
    const sceneInstruction= sceneData[instructionNumber]

    const [faceInstruction,limbsInstruction,timeInstruction] =  sceneInstruction;

    faceMotion(faceInstruction); 
    limbsMotion(limbsInstruction);

    await awaitDelay(timeInstruction);
    if(instructionNumber>= sceneData.length-1){
        return 
    }
    spriteSceneDelay(sceneData,instructionNumber+1); 
}

