const getRandomFontSize = () => getRandomInt(100);

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export default {
    getRandomFontSize
}