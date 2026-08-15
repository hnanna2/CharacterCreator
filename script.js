let currentSkin = 1;
const totalSkins = 6;

function updateSkin() {
    const skinLayer = document.getElementById("skin-layer");
    const skinName = document.getElementById("skin-name");

    skinLayer.src = `assets/skin/skin_tone-${currentSkin}.png`;
    skinName.textContent = `Skin ${currentSkin}`;
}

function nextSkin() {
    currentSkin++;

    if (currentSkin > totalSkins) {
        currentSkin = 1;
    }

    updateSkin();
}

function previousSkin() {
    currentSkin--;

    if (currentSkin < 1) {
        currentSkin = totalSkins;
    }

    updateSkin();
}

function changeBlush(blushNumber) {
    const blushLayer = document.getElementById("blush-layer");

    blushLayer.src = `assets/blush/blush-${blushNumber}.png`;
}

//HAIR

function changeHairColor(color) {
    currentHairColor = color;

    const backHairColorLayer = document.getElementById("back-hair-color");
    const bangHairColorLayer = document.getElementById("bang-hair-color");

    backHairColorLayer.style.backgroundColor = color;
    bangHairColorLayer.style.backgroundColor = color;
}

let currentHairColor = "#5a3825";

// -> Back Hair

let currentBackHair = 1;
const totalBackHair = 8;


function updateBackHair() {
    const outline = document.getElementById("back-hair-outline");
    const colorLayer = document.getElementById("back-hair-color");
    const name = document.getElementById("back-hair-name");

    outline.src = `assets/hair/back/outline/back-${currentBackHair}.png`;

    colorLayer.style.maskImage =
        `url("assets/hair/back/color-area/color_area-${currentBackHair}.png")`;

    colorLayer.style.webkitMaskImage =
        `url("assets/hair/back/color-area/color_area-${currentBackHair}.png")`;

    name.textContent = `Hair ${currentBackHair}`;
}

function nextBackHair() {
    currentBackHair++;

    if (currentBackHair > totalBackHair) {
        currentBackHair = 1;
    }

    updateBackHair();
}

function previousBackHair() {
    currentBackHair--;

    if (currentBackHair < 1) {
        currentBackHair = totalBackHair;
    }

    updateBackHair();
}


// -> Bangs

let currentBangHair = 1;
const totalBangHair = 8;

function updateBangHair() {
    const outline = document.getElementById("bang-hair-outline");
    const colorLayer = document.getElementById("bang-hair-color");
    const name = document.getElementById("bang-hair-name");

    outline.src = `assets/hair/bangs/outline/bang-${currentBangHair}.png`;

    colorLayer.style.maskImage =
        `url("assets/hair/bangs/color-area/color_area-${currentBangHair}.png")`;

    colorLayer.style.webkitMaskImage =
        `url("assets/hair/bangs/color-area/color_area-${currentBangHair}.png")`;

    name.textContent = `Hair ${currentBangHair}`;
}

function nextBangHair() {
    currentBangHair++;

    if (currentBangHair > totalBangHair) {
        currentBangHair = 1;
    }

    updateBangHair();
}

function previousBangHair() {
    currentBangHair--;

    if (currentBangHair < 1) {
        currentBangHair = totalBangHair;
    }

    updateBangHair();
}

updateBackHair();
updateBangHair();
changeHairColor(currentHairColor);