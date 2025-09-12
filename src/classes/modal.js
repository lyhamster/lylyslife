import Sprite from "./Sprite";

class Modal {
  
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
