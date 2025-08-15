const EMOTIONS= [
"rest",
"angry",
"cheerful",
"read", 
"sleep",
"bewildered",
"reckless",
"butterfly",
"shock",
"sport",
"cry",
"mental effort",
]

// faire une fonction changeFace(emotion) 
/*  calcul sur la position de chaque emotion 
calcul dynamique 
il faut assigner les emotions dans le tableau à la position sur l 'image pour que l 'emotion
emotions = position * -230

la position === une emotion*/

function changeFace(emotion){
    
    let emotionIndex = EMOTIONS.indexOf(emotion);
    const unite = -230

    document.querySelector(".imgFace").style.top = `${emotionIndex * unite}px`;
}


window.cf = changeFace;