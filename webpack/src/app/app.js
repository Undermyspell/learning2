import common from "./common";

const bibsy = document.getElementById("bibs");
bibsy.addEventListener("click", () => {
    bibsy.style.color = common.getRandomColor();
    bibsy.style.fontSize = common.fontSizeRandom.getRandomFontSize().toString() + "px";
});
