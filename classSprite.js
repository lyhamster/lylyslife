
export default class Sprite {
    elements;
    selector;
    unit = -230;
    currentSprite;
    divButton=".ButtonsBox";

    constructor(elements, selector) {
        this.selector = selector;
        this.elements = elements;
    }

    setAction(state) {
        this.currentSprite = state;
        this._changeSprite();
    }

    clone(selector) {
        return new Sprite(this.elements, selector);
    }

    addButtons() {
        const spriteBttn = document.querySelector(this.divButton);
        const buttonsWrapper = document.createElement("div");
        const spriteArr = Object.keys(this.elements);
        spriteArr.forEach((property) => {
            let bttn = document.createElement("button");
            bttn.textContent = property; 
            bttn.addEventListener("click", () => {
                this.setAction(property); 
            });
            buttonsWrapper.appendChild(bttn);
        });
        spriteBttn.appendChild(buttonsWrapper);
    }

    _changeSprite() {
        let spriteIndex = this.elements.indexOf(this.currentSprite);
        document.querySelector(this.selector).style.left = `${spriteIndex * this.unit} px`;
    }
};

