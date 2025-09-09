import Sprite from "./classSprite";

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

const testData = [
    ["sport", "sport",null,2000], 
    ["playful", "fiesta","living-room",3000],
    ["rest face", "fiesta",null,5000], 
    ["butterfly", "fuck",null,0], 
    ];

async function spriteSceneDelay(sceneData,instructionNumber=0,){
  
    const sceneInstruction= sceneData[instructionNumber]

    const [faceInstruction,limbsInstruction,backgroundInstruction,timeInstruction] =  sceneInstruction;

    faceMotion(faceInstruction); 
    limbsMotion(limbsInstruction);
    if(backgroundInstruction) {
        movetoRoom(backgroundInstruction)
    } 
   
    await awaitDelay(timeInstruction);
    if(instructionNumber>= sceneData.length-1){
        return 
    }

    spriteSceneDelay(sceneData,instructionNumber+1); 
};

class Background {

    ROOMS = [
        "living-room",
        "gym",
        "dressing",
        "library",
        "aquarium",
        "pet",
        "vending",
        "closed",
        "transition",
    ];

    constructor(img){
        this.img= img;
    };

    unit = -299.99;
    
    changeRoom(area){
    let roomIndex = this.ROOMS.indexOf(area)

    document.querySelector(this.img).style.marginLeft = `${roomIndex * this.unit}px`;
};
};

const currentRoom = new Background(".currentimgBg");
const transitionRoom = new Background(".transitionimgBg");
const nextRoom = new Background(".newroomimgBg");

function movetoRoom(area){
    
    nextRoom.changeRoom(area)
    
    const addtransitionClass= document.querySelector(".currentRoom")
    addtransitionClass.classList.add("movedBackground")
};
window.limbsSprite = new Sprite ( 
        {walking: [700, 700],
        sit: [100],
        neutral: [100],
        typing: [800, 300, 500],
        sport: [600, 900, 600, 900],
        dance: [600, 900, 600, 1200],
        fuck: [600, 1500,],
        fiesta: [600, 500, 500, 600],
        kill: [600, 500, 500, 600]}, 
        ".imgLimbs")

window.faceSprite = new Sprite({
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
    "mental effort": [ 1200, 300, 300, 300, 300],},
    ".imgFace"
)




