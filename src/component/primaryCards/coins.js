function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    let son = Math.floor(Math.random() * 8) + 1;
    let divs = document.getElementById("colorss+" + son);
    // divs.style.color = getRandomColor();
}

setInterval(changeColor, 1000);