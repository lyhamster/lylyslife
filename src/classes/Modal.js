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
    render() {
        const modalBttn = [
            {"icon": "statistic", "name": "statisque", 'action': () => {window.statsModal.open()},},
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
        ]
 
        const modalBttnWrapper = document.createElement("div");
        modalBttnWrapper.classList.add ("iconSpriteWrapper");
        
        modalBttn.forEach((modalBttnObj) => {
            const bttnInstance = new Button( modalBttnObj.name, modalBttnObj.icon, modalBttnObj.action);
            modalBttnWrapper.appendChild(bttnInstance.getElement());
        })
        return modalBttnWrapper;         
    }

    onOpen() {
        gameButtonsInst.firstBttn = () => this.close();
       console.log("ouverture de menu modal")

    }
}

window.menuModal = new MenuModal();
window.menuModal.open();

class StatsModal extends Modal {
        onOpen() {
       console.log("ouverture de stats modal")
    }
}

window.statsModal = new StatsModal();


