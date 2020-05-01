
import { getRandomColor } from "./utils/color-randomizer";
import fontSizeRandom from "./utils/font-size-randomizer";
import "../style.scss";

const bibsy = document.getElementById("bibs");
bibsy.addEventListener("click", () => {
    bibsy.style.color = getRandomColor();
    bibsy.style.fontSize = fontSizeRandom.getRandomFontSize().toString() + "px";
});
