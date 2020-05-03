
import { getRandomColor } from "./utils/color-randomizer";
import fontSizeRandom from "./utils/font-size-randomizer";
import "../style.scss";
import "../../assets/css/all.css";


const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarButton = document.getElementById("solar");

const body = document.body;

darkButton.onclick = () => {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
}

lightButton.onclick = () => {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
}

solarButton.onclick = () => {
    body.classList.toggle("solar");
    if (body.classList.contains("solar")) {
        localStorage.setItem("isSolar", "true");
    } else {
        localStorage.removeItem("isSolar");
    }
}

const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add(isSolar);
} else {
    body.classList.add("light");
}

export default {
    getRandomColor,
    fontSizeRandom
}