import gameButtonsInst from "../managers/GameButtonsManager";
import Sprite from "./Sprite";

class Modal {

    selectorElement = ".screenWrapper";
    screen;
    modalBox; 
  
    open() {
        this.screen = document.querySelector(this.selectorElement);
        this.modalBox= document.createElement("div");
        this.modalBox.classList.add("modalStyle");
        this.screen.appendChild(this.modalBox);
        this.modalBox.style.visibility="visible";

        if(this.render() !== undefined) {
            this.modalBox.appendChild(this.render());    
        }

        this.onOpen?.();
    }

    close() {
        this.modalBox.remove();   
        this.modalBox.style.visibility = "hidden";
    }

    render() {
    }
}  

export class Button {
    name;
    icon;
    action;

    constructor(name,icon,action,){
        this.name = name;
        this.icon = icon;
        this.action = action;
    }

    getElement() {
        const bttn = document.createElement("button"); 
        const imgWrapper = document.createElement("div");
        bttn.classList.add("iconSpriteButton");   
        const imgIcon = document.createElement("img");
        imgIcon.classList.add(this.name, "iconSpriteImg");
        imgWrapper.classList.add("imgWrapper");
        bttn.appendChild(imgWrapper);
        imgWrapper.appendChild(imgIcon);
        imgIcon.src="assets/icons.png";
    
        const iconSprite = new Sprite(
            [   
                "statistic", 
                "shop", 
                "gameboy", 
                "vinyl", 
                "food", 
                "sleep", 
                "caca",
                "photo", 
                "return", 
                "off", 
                "menu",
                "sport", 
                "read", 
                "dev", 
                "korean",
                "dance", 
                "pet", 
                "dress",
            ]
            , `.${this.name}`, this.icon, imgIcon, -40,);

        bttn.addEventListener("click", () => {
            console.log();
            this.action();
        })
        
        return bttn;
    }
}

class MenuModal extends Modal {

    modalBttn = [
            {"icon": "statistic", "name": "statistique", 'action': () => {window.statsModal.open()},},
            {"icon": "shop", "name": "boutique", 'action': () => {},},
            {"icon": "gameboy", "name": "jeu", 'action': () => {},},
            {"icon": "vinyl", "name": "musique", 'action': () => {},},
            {"icon": "food", "name": "nourriture", 'action': () => {},},
            {"icon": "sleep", "name": "dormir", 'action': () => {},},
            {"icon": "caca", "name": "toilette", 'action': () => {},},
            {"icon": "photo", "name": "argentique", 'action': () => {},},
            {"icon": "return", "name": "retour", 'action': () => {},},
            {"icon": "off", "name": "fermer", 'action': () => {},},
            {"icon": "menu", "name": "menu", 'action': () => {},},
            {"icon": "sport", "name": "sport", 'action': () => {},},
            {"icon": "read", "name": "lire", 'action': () => {},},
            {"icon": "dev", "name": "dev", 'action': () => {},},
            {"icon": "korean", "name": "coreen", 'action': () => {},},
            {"icon": "dance", "name": "danser", 'action': () => {},},
            {"icon": "pet", "name": "animal", 'action': () => {},},
            {"icon": "dress", "name": "robe", 'action': () => {},},
        ];
    selectedBttn = 0;

    render() {
        const modalBttnWrapper = document.createElement("div");
        modalBttnWrapper.classList.add ("iconSpriteWrapper");
        this.modalBttn.forEach((modalBttnObj) => {
            const bttnInstance = new Button( modalBttnObj.name, modalBttnObj.icon, modalBttnObj.action);
            modalBttnWrapper.appendChild(bttnInstance.getElement());
        })
        return modalBttnWrapper;         
    }

    changeSelectedBttn(newIndex) {
        
        if (newIndex < 0 ) {
            newIndex = 17;
        } else if (newIndex > this.modalBttn.length - 1) {
            newIndex = 0;
        } 
        document.querySelector(`.${this.modalBttn[this.selectedBttn].name}`).classList.remove("selected");
        this.selectedBttn = newIndex;
        if (this.selectedBttn <= this.modalBttn.length-1) {
            document.querySelector(`.${this.modalBttn[newIndex].name}`).classList.add("selected")
        }
    }

    onOpen() { 
        gameButtonsInst.firstBttn = () => {
            console.log("on open first button");
            window.menuModal.changeSelectedBttn(this.selectedBttn - 1);
        }
         gameButtonsInst.secondBttn = () => {
            window.menuModal.changeSelectedBttn(this.selectedBttn + 1);
        }
    }
}

window.menuModal = new MenuModal();

class StatsModal extends Modal {
        onOpen() {
    }
}

window.statsModal = new StatsModal();


