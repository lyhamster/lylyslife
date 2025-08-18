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

const LIMBS = [
    "walk",
    "sit",
    "stand up",
    "typing",
    "sport",
    "dance",
    "fuck",
    "celebrate",
    "thumb down",
]

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
    function animation
    il faut passer d'une image a droite a une autre meme principe que change face
    selectionner l'emotion
    premiere image s execute 
    timeout s execute
    il faut stocker l information pour incrementer la position
    question de boucle ou des que ca atteint un certain il faut recommencer du debut

    selection du visage 

*/ 

let initFrame =0

function repeatfaceMotion(emotion){
    
    document.querySelector(".imgFace").style.left= initFrame * -230 +"px"
    
    setTimeout(() => {
        
        if( initFrame >= EMOTIONS[emotion].length -1){
            initFrame = 0
        } else {
            initFrame++
        }

        repeatfaceMotion(emotion) 

    }, EMOTIONS[emotion][initFrame]);

    

}

function faceMotion(emotion){
    changeFace(emotion)
    repeatfaceMotion(emotion);

    
}
