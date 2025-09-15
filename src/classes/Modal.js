import Sprite from "./Sprite";

class Modal {

    selectorElement = ".screen";
    screen;
    modalBox;
    imgElement 
    
    open() {
        this.screen = document.querySelector(this.selectorElement);

        this.modalBox= document.createElement("div");
        this.imgElement = document.createElement("img"); 

        this.modalBox.classList.add("modalBox");
        this.imgElement.classList.add("modalBgimg");

        this.screen.appendChild(this.modalBox);
        this.modalBox.appendChild(this.imgElement);

        this.imgElement.src = "assets/modal-bg.png";
        this.imgElement.style.visibility="visible"
    }

    close() {
        this.modalBox.remove();   
        this.imgElement.style.visibility = "hidden";
    }
}  

window.modal=new Modal()


export class Button {
    name;
    icon;
    action;

    constructor(name,icon,action,){
        this.name = name;
        this.icon = icon;
        this.action = action;
    }

    set() {
        let bttn = document.createElement("button");    
        let imgIcon = document.createElement("img");
        imgIcon.classList.add(this.name);
        bttn.appendChild(imgIcon);
        imgIcon.src="assets/icons.png"

        const iconSprite = new Sprite(
            [   
                "statistic", 
                "shop", 
                "gameboy", 
                "vinyl", 
                "food", 
                "sleep", 
                "photo", 
                "return", 
                "off", 
                "menu", 
                "sport", 
                "read", 
                "dev", 
                "korean","dance", 
                "pet", 
                "dress"
            ]
            , `.${this.name}`)

        iconSprite.setAction(this.icon)
        
        bttn.addEventListener("click", () => {
            this.action()
        })
        
        return bttn;
    }
}
