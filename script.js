// ======================
// SKIN / BODY
// ======================

let currentSkin = 1;
const totalSkins = 8;
let skinSelected = false;

let currentBody = 1;
const totalBodies = 3;

const skinColors = [
    "#511906",
    "#662915",
    "#7B3A24",
    "#B95C3C",
    "#b87550",
    "#E19175",
    "#F3BBAA",
    "#F8D1C3",
];

function selectSkin(skinNumber) {
    currentSkin = skinNumber;
    skinSelected = true;
    updateSkin();
}

function updateSkin() {
    const skinLayer = document.getElementById("skin-color");

    if (!skinSelected) {
        skinLayer.style.backgroundColor = "#cbd0d4";
    } else {
        skinLayer.style.backgroundColor = skinColors[currentSkin - 1];
    }

    
}

// function nextSkin() {
//     currentSkin++;

//     if (currentSkin > totalSkins) {
//         currentSkin = 1;
//     }

//     updateSkin();
// }

// function previousSkin() {
//     currentSkin--;

//     if (currentSkin < 1) {
//         currentSkin = totalSkins;
//     }

//     updateSkin();
// }

function updateBody() {
    const outline = document.getElementById("body-outline");
    const skinLayer = document.getElementById("skin-color");
    const bodyName = document.getElementById("body-name");

    outline.src =
        `assets/body/outline/body-${currentBody}.png`;

    skinLayer.style.maskImage =
        `url("assets/body/color-area/color_area-${currentBody}.png")`;

    skinLayer.style.webkitMaskImage =
        `url("assets/body/color-area/color_area-${currentBody}.png")`;

    bodyName.textContent = `Body ${currentBody}`;

    updateBottoms();
    updateShirt();
}

function nextBody() {
    currentBody++;

    if (currentBody > totalBodies) {
        currentBody = 1;
    }

    updateBody();
}

function previousBody() {
    currentBody--;

    if (currentBody < 1) {
        currentBody = totalBodies;
    }

    updateBody();
}

//BLUSH

// function changeBlush(blushNumber) {
//     const blushLayer = document.getElementById("blush-layer");

//     blushLayer.src = `assets/blush/blush-${blushNumber}.png`;
// }

let currentBlush = 1;
const totalBlush = 3;

function updateBlush() {
    const blushLayer = document.getElementById("blush-layer");
    const blushName = document.getElementById("blush-name");

    blushLayer.src =
        `assets/blush/blush-${currentBlush}.png`;

    blushName.textContent = `Blush ${currentBlush}`;
}

function nextBlush() {
    currentBlush++;

    if (currentBlush > totalBlush) {
        currentBlush = 1;
    }

    updateBlush();
}

function previousBlush() {
    currentBlush--;

    if (currentBlush < 1) {
        currentBlush = totalBlush;
    }

    updateBlush();
}


//EXPRESSION

let currentFace = 1;
const totalFaces = 5;

function updateExpression() {
    const expressionLayer = document.getElementById("expression-layer");
    const expressionName = document.getElementById("expression-name");

    expressionLayer.src =
        `assets/expressions/face-${currentFace}.png`;

    expressionName.textContent = `Face ${currentFace}`;
}

function nextExpression() {
    currentFace++;

    if (currentFace > totalFaces) {
        currentFace = 1;
    }

    updateExpression();
}

function previousExpression() {
    currentFace--;

    if (currentFace < 1) {
        currentFace = totalFaces;
    }

    updateExpression();
}

//TOPS
let currentShirt = 1;
const totalShirts = 7;

let currentShirtColor = "#cbd0d4";


function updateShirt() {

    const outline = document.getElementById("shirt-outline");
    const colorLayer = document.getElementById("shirt-color");
    const name = document.getElementById("shirt-name");

    // Use the current BODY type
    outline.src =
        `assets/shirts/body-${currentBody}/outline/outline-${currentShirt}.png`;

    // Change the mask to match the current bottoms
    colorLayer.style.maskImage =
        `url("assets/shirts/body-${currentBody}/color-area/color_area-${currentShirt}.png")`;

    colorLayer.style.webkitMaskImage =
        `url("assets/shirts/body-${currentBody}/color-area/color_area-${currentShirt}.png")`;

    // Keep the selected color
    colorLayer.style.backgroundColor = currentShirtColor;

    name.textContent = `Shirt ${currentShirt}`;
}


function nextShirt() {

    currentShirt++;

    if (currentShirt > totalShirts) {
        currentShirt = 1;
    }

    updateShirt();
}


function previousShirt() {

    currentShirt--;

    if (currentShirt < 1) {
        currentShirt = totalShirts;
    }

    updateShirt();
}


function changeShirtColor(color) {

    currentShirtColor = color;

    const colorLayer = document.getElementById("shirt-color");

    colorLayer.style.backgroundColor = color;
}

//BOTTOMS

let currentBottoms = 1;
const totalBottoms = 7;

let currentBottomsColor = "#cbd0d4";


function updateBottoms() {

    const outline = document.getElementById("bottoms-outline");
    const colorLayer = document.getElementById("bottoms-color");
    const name = document.getElementById("bottoms-name");

    // Use the current BODY type
    outline.src =
        `assets/bottoms/body-${currentBody}/outline/outline-${currentBottoms}.png`;

    // Change the mask to match the current bottoms
    colorLayer.style.maskImage =
        `url("assets/bottoms/body-${currentBody}/color-area/color_area-${currentBottoms}.png")`;

    colorLayer.style.webkitMaskImage =
        `url("assets/bottoms/body-${currentBody}/color-area/color_area-${currentBottoms}.png")`;

    // Keep the selected color
    colorLayer.style.backgroundColor = currentBottomsColor;

    name.textContent = `Bottoms ${currentBottoms}`;
}


function nextBottoms() {

    currentBottoms++;

    if (currentBottoms > totalBottoms) {
        currentBottoms = 1;
    }

    updateBottoms();
}


function previousBottoms() {

    currentBottoms--;

    if (currentBottoms < 1) {
        currentBottoms = totalBottoms;
    }

    updateBottoms();
}


function changeBottomsColor(color) {

    currentBottomsColor = color;

    const colorLayer = document.getElementById("bottoms-color");

    colorLayer.style.backgroundColor = color;
}

//SHOES

let currentShoe = 1;
const totalShoes = 5;

let currentShoeColor = "#cbd0d4";


function updateShoe() {

    const outline = document.getElementById("shoe-outline");
    const colorLayer = document.getElementById("shoe-color");
    const name = document.getElementById("shoe-name");

    // Use the current BODY type
    outline.src =
        `assets/shoes/outline/outline-${currentShoe}.png`;

    // Change the mask to match the current bottoms
    colorLayer.style.maskImage =
        `url("assets/shoes/color-area/color_area-${currentShoe}.png")`;

    colorLayer.style.webkitMaskImage =
        `url("assets/shoes/color-area/color_area-${currentShoe}.png")`;

    // Keep the selected color
    colorLayer.style.backgroundColor = currentShoeColor;

    name.textContent = `Shoe ${currentShoe}`;
}


function nextShoe() {

    currentShoe++;

    if (currentShoe > totalShoes) {
        currentShoe = 1;
    }

    updateShoe();
}


function previousShoe() {

    currentShoe--;

    if (currentShoe < 1) {
        currentShoe = totalShoes;
    }

    updateShoe();
}


function changeShoeColor(color) {

    currentShoeColor = color;

    const colorLayer = document.getElementById("shoe-color");

    colorLayer.style.backgroundColor = color;
}


//HAIR

function changeHairColor(color) {
    currentHairColor = color;

    const backHairColorLayer = document.getElementById("back-hair-color");
    const bangHairColorLayer = document.getElementById("bang-hair-color");

    backHairColorLayer.style.backgroundColor = color;
    bangHairColorLayer.style.backgroundColor = color;
}

let currentHairColor = "#cbd0d4";

// -> Back Hair

let currentBackHair = 1;
const totalBackHair = 10;


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
const totalBangHair = 10;

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

//ACCESSORIES

//GLASSES
let currentGlasses = 1;
const totalGlasses = 6;

function updateGlasses() {
    const glassesLayer = document.getElementById("glasses-layer");
    const glassesName = document.getElementById("glasses-name");

    glassesLayer.src =
        `assets/glasses/glasses-${currentGlasses}.png`;

    glassesName.textContent = `Glasses ${currentGlasses}`;
}

function nextGlasses() {
    currentGlasses++;

    if (currentGlasses > totalGlasses) {
        currentGlasses = 1;
    }

    updateGlasses();
}

function previousGlasses() {
    currentGlasses--;

    if (currentGlasses < 1) {
        currentGlasses = totalGlasses;
    }

    updateGlasses();
}

//JEWELRY
let currentJewelry = 1;
const totalJewelry = 13;

function updateJewelry() {
    const jewelryLayer = document.getElementById("jewelry-layer");
    const jewelryName = document.getElementById("jewelry-name");

    jewelryLayer.src =
        `assets/jewelry/jewelry-${currentJewelry}.png`;

    jewelryName.textContent = `Jewelry ${currentJewelry}`;
}

function nextJewelry() {
    currentJewelry++;

    if (currentJewelry > totalJewelry) {
        currentJewelry = 1;
    }

    updateJewelry();
}

function previousJewelry() {
    currentJewelry--;

    if (currentJewelry < 1) {
        currentJewelry = totalJewelry;
    }

    updateJewelry();
}

//HATS
let currentHat = 1;
const totalHats = 6;

let currentHatColor = "#cbd0d4";


function updateHat() {

    const outline = document.getElementById("hat-outline");
    const colorLayer = document.getElementById("hat-color");
    const name = document.getElementById("hat-name");

    // Use the current BODY type
    outline.src =
        `assets/hats/outline/outline-${currentHat}.png`;

    // Change the mask to match the current bottoms
    colorLayer.style.maskImage =
        `url("assets/hats/color-area/color_area-${currentHat}.png")`;

    colorLayer.style.webkitMaskImage =
        `url("assets/hats/color-area/color_area-${currentHat}.png")`;

    // Keep the selected color
    colorLayer.style.backgroundColor = currentHatColor;

    name.textContent = `Hat ${currentHat}`;
}


function nextHat() {

    currentHat++;

    if (currentHat > totalHats) {
        currentHat = 1;
    }

    updateHat();
}


function previousHat() {

    currentHat--;

    if (currentHat < 1) {
        currentHat = totalHats;
    }

    updateHat();
}


function changeHatColor(color) {

    currentHatColor = color;

    const colorLayer = document.getElementById("hat-color");

    colorLayer.style.backgroundColor = color;
}

//BKG
let currentBkg = 1;
const totalBkgs = 5;

let currentBkgColor = "#cbd0d4";


function updateBkg() {

    const outline = document.getElementById("bkg-outline");
    const colorLayer = document.getElementById("bkg-color");
    const name = document.getElementById("bkg-name");

    // Use the current BODY type
    outline.src =
        `assets/bkg/outline/outline-${currentBkg}.png`;

    // Change the mask to match the current bottoms
    colorLayer.style.maskImage =
        `url("assets/bkg/color-area/color_area-${currentBkg}.png")`;

    colorLayer.style.webkitMaskImage =
        `url("assets/bkg/color-area/color_area-${currentBkg}.png")`;

    // Keep the selected color
    colorLayer.style.backgroundColor = currentBkgColor;

    name.textContent = `Bkg ${currentBkg}`;
}


function nextBkg() {

    currentBkg++;

    if (currentBkg > totalBkgs) {
        currentBkg = 1;
    }

    updateBkg();
}


function previousBkg() {

    currentBkg--;

    if (currentBkg < 1) {
        currentBkg = totalBkgs;
    }

    updateBkg();
}


function changeBkgColor(color) {

    currentBkgColor = color;

    const colorLayer = document.getElementById("bkg-color");

    colorLayer.style.backgroundColor = color;
}




// PAGE SWITCHING //-------------------------
let currentRightPage = 1;
const totalRightPages = 2;

function updateRightPage() {

    const clothesPage = document.getElementById("clothes-page");
    const accessoriesPage = document.getElementById("accessories-page");
    const title = document.getElementById("right-page-title");

    if (currentRightPage === 1) {

        clothesPage.style.display = "block";
        accessoriesPage.style.display = "none";

        title.textContent = "Clothes";

    } else {

        clothesPage.style.display = "none";
        accessoriesPage.style.display = "block";

        title.textContent = "Extras";
    }
}

function nextRightPage() {

    currentRightPage++;

    if (currentRightPage > totalRightPages) {
        currentRightPage = 1;
    }

    updateRightPage();
}

function previousRightPage() {

    currentRightPage--;

    if (currentRightPage < 1) {
        currentRightPage = totalRightPages;
    }

    updateRightPage();
}

updateRightPage();

//-----------------



updateSkin();
updateBody();

updateBlush();
updateShoe();
updateExpression();
updateGlasses();
updateJewelry();
updateHat();

updateBkg();

updateBackHair();
updateBangHair();
changeHairColor(currentHairColor);