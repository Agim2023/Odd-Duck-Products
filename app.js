'use strict'

let voteLimit = 25;
let viewArea = document.getElementById("view-area");
let results = document.getElementById("results");

let image1Img = document.getElementById('image1');
let image2Img = document.getElementById("image2");
let image3Img = document.getElementById("image3");


function Image(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.views = 25;
    this.clicks = 25;

    console.log(this);
}

let bagJ = new Image("bag", "./img/bag.jpg");
let bananaJ = new Image("banana", "./img/banana.jpg");
let bathRoom = new Image("bathroom", "./img/bathroom.jpg");
let bootsJ = new Image("boots", "./img/boots.jpg");
let breakFast = new Image("breakfast", "./img/breakfast.jpg");
let bubbleGum = new Image("bubblegum", "./img/bubblegum.jpg");
let chairJ = new Image("chair", "./img/chair.jpg");
let cthulhuJ = new Image("cthulhu", "./img/cthulhu.jpg");
let dogDuck = new Image("dog-duck", "./img/dog-duck.jpg");
let dragonJ = new Image("dragon", "./img/dragon.jpg");
let penJ = new Image("pen", "./img/pen.jpg");
let petSweep = new Image("pet-sweep", "./img/pet-sweep.jpg");
let scissors = new Image("scissors", "./img/scissors.jpg");
let shark = new Image("shark", "./img/shark.jpg");
let sweep = new Image("sweep", "./img/sweep.jpg");
let tauntaun = new Image("tauntaun", "./img/tauntaun.jpg");
let unicorn = new Image("unicorn", "./img/unicorn.jpg");
let waterCan = new Image("water-can", "./img/water-can.jpg");
let wineGlass = new Image("wine-glass", "./img/wine-glass.jpg");


let imageArray = [];

imageArray.push(bagJ);
imageArray.push(bananaJ);
imageArray.push(bathRoom);
imageArray.push(bootsJ);
imageArray.push(breakFast);
imageArray.push(bubbleGum);
imageArray.push(chairJ);
imageArray.push(cthulhuJ);
imageArray.push(dogDuck);
imageArray.push(dragonJ);
imageArray.push(penJ);
imageArray.push(petSweep);
imageArray.push(scissors);
imageArray.push(shark);
imageArray.push(sweep);
imageArray.push(tauntaun);
imageArray.push(unicorn);
imageArray.push(waterCan);
imageArray.push(wineGlass)

console.log(imageArray);



function getRandomInt() {
    return Math.floor(Math.random() * imageArray.length);
}

function images(image1, image2, image3) {
    image1Img.src = image1.imgSrc;
    image1Img.alt = image1.name;
    image1Img.title = image1.name;

    image2Img.src = image2.imgSrc;
    image2Img.alt = image2.name;
    image2Img.title = image2.name;

    image3Img.src = image3.imgSrc;
    image3Img.alt = image3.name;
    image3Img.title = image3.name;

    console.log(image1, image2, image3);
    console.log(image1Img, image2Img, image3Img);

}

images(bagJ, bananaJ, bathRoom);

function setRandomImages() {
    let image1Index1 = getRandomInt(imageArray.length);
    let image1Index2 = getRandomInt(imageArray.length);
    if (image1Index1 === image1Index2) {
        image1Index1 = getRandomInt(imageArray.length);
        image1Index2 = getRandomInt(imageArray.length);
    }

    // let image1 = imageArray(image1Index1);
    // let image2 = imageArray(image1Index2);
}

function handleImageClick(event) {

    event.preventDefault();
    let target = event.target;
    let imageName = target.alt;

    let theBestImage;
    for (let i = 0; i < imageArray.length; i++) {
        let image = imageArray[i];
        if (image.name === imageName) {
            theBestImage = image;
        }
    }

    theBestImage.clicks++;

    console.log(imageName, theBestImage.clicks);
    console.log(theBestImage);
    setRandomImages();
}

viewArea.addEventListener("click", handleImageClick);

function renderResults() {
    console.log("clicked");
    for (let i = 0; i < imageArray.length; i++) {
        console.log("clicked button");
        viewArea.innerHTML = "";
        let imageUL = document.createElement('ul');
        let image = imageArray[i];
        let imageName = Image.name;
        let goatVoteCount = Image.voteCount;
        let report = "the image named ${imageName} got ${imageVotesCount} votes";
        let imageLI = document.createElement("li");
        imageLI.textContent = report;
        imageUL.appendChild(imageLI);
        console.log(report);
    }
    viewArea.appendChild(imageUL);
}

let showResultsButton = document.getElementById("show-results-button");
showResultsButton.addEventListener("click", renderResults);