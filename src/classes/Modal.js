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

        this.modalBox.appendChild(this.render())
        console.log(this.screen)
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
        const imgWrapper = document.createElement("div")
        bttn.classList.add("iconSpriteButton");   
        const imgIcon = document.createElement("img");
        imgIcon.classList.add(this.name, "iconSpriteImg");
        imgWrapper.classList.add("imgWrapper")
        bttn.appendChild(imgWrapper);
        imgWrapper.appendChild(imgIcon);
        imgIcon.src="assets/icons.png"
    
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
            , `.${this.name}`, this.icon, imgIcon,-40)

        bttn.addEventListener("click", () => {
            this.action()
        })
        
        return bttn;
    }
}

class MenuModal extends Modal {
    render() {
        const modalBttn = [   
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
            ];
        const modalBttnWrapper = document.createElement("div");
        modalBttnWrapper.classList.add ("iconSpriteWrapper")
        modalBttn.forEach((modalBttnfeat) => {
            const bttnInstance = new Button(modalBttnfeat,modalBttnfeat);
            modalBttnWrapper.appendChild(bttnInstance.getElement());
        })
        return modalBttnWrapper;                                                               
    }
}

window.menuModal = new MenuModal();
window.menuModal.open();
