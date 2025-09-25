
export default class Sprite {
    elements;
    selector;
    unit;
    currentSprite;
    divButton=".ButtonsBox";
    element 

    constructor(elements, selector, defaultSprite,element,unit = -230) {
        this.elements = elements;
        this.selector = selector;
        this.element = element;
        this.unit = unit;

        if (defaultSprite) {
            this.setAction(defaultSprite)
        };
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
        buttonsWrapper.classList.add("faceButtons");
    }

    _changeSprite() {
        const spriteIndex = this.elements.indexOf(this.currentSprite);
        (this.element || document.querySelector(this.selector)).style.left = `${spriteIndex * this.unit}px`;
    }
};

