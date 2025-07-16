const leftBtn = document.getElementById("leftbtn");
const rightBtn = document.getElementById("rightbtn");
const copyCode = document.getElementById("copycode");
const select = document.getElementById("select");
let direction = select.value;
let rgb1 = " #6352ff";
let rgb2 = "#4dff77";

const handleColor = () => {
    let myHexaValues = "0123456789abcdef";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + myHexaValues[Math.floor(Math.random() * 16)];
    }
    return color;
};

const updateGradient = () => {
    document.body.style.backgroundImage = `linear-gradient(${direction},${rgb1},${rgb2})`;
    copyCode.innerHTML = `<p>background-image:linear-gradient(${direction},${rgb1},${rgb2})</p>`;
}

const handleButton1 = () => {
    rgb1 = handleColor();
    leftBtn.innerHTML = rgb1;
    updateGradient();
}

const handleButton2 = () => {
    rgb2 = handleColor();
    rightBtn.innerHTML = rgb2;
    updateGradient();

}

leftBtn.addEventListener("click", handleButton1);
rightBtn.addEventListener("click", handleButton2);

copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerText);
    alert("Copied to clipboard");
});

select.addEventListener("change", () => {
    direction = select.value;
    updateGradient();

});