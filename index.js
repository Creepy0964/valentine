let hui = 0;
let buttonX, buttonY = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function no() {
    if(hui == 1) return;
    if(document.documentElement.clientWidth > 1200) {
        buttonX = getRndInteger(-500, 500);
        buttonY = getRndInteger(-500, 500);
    }
    else {
        buttonX = getRndInteger(-100, 100);
        buttonY = getRndInteger(-100, 100);
    }
    const noButton = document.getElementById('no-button');
    noButton.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
}

function yes() {
    document.getElementById('text').innerHTML = 'Спасибо <3';
    document.getElementById('gif').src = 'hug.gif';
    hui = 1;
}