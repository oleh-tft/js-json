class Rectangle {
    width;
    height;

    constructor(width, height, colorName, bg, type, colorCode) {
        this.width = width;
        this.height = height;
        this.colorName = colorName;
        this.bg = bg;
        this.type = type;
        this.colorCode = colorCode;
    }

    get rgb() {
        return `${this.colorCode[0]}, ${this.colorCode[1]}, ${this.colorCode[2]}`;
    }

    addElement(parent) {
        let html = Mustache.render(document.querySelector("#template-rect").innerHTML, this);
        parent.insertAdjacentHTML("beforeend", html);
    }
}

function createRect(form) {
    let width = Number(form.width.value);
    let height = Number(form.height.value);
    let r = Number(form.r.value);
    let g = Number(form.g.value);
    let b = Number(form.b.value);
    if ((r < 0 || r > 255) || (g < 0 || g > 255) || (b < 0 || b > 255)) {
        alert("r, g, b values should be in a range [0, 255]");
        return;
    }
    return new Rectangle(width, height, form.color.value, form.bg.value, form.type.value, [r, g, b]);
}

let content = document.querySelector("#content");
let save = document.querySelector("#btn-save");
let form = document.forms[0];

save.addEventListener("click", function() {
    let rect = createRect(form);
    console.log(JSON.stringify(rect));
    rect.addElement(content);
});