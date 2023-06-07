'use strict'


let viewArea = document.getElementById("view-area");
let results = document.getElementById("results");

let image1Img = document.getElementById('image1');
let image2Img = document.getElementById("image2");
let image3Img = document.getElementById("image3");


function Image(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.views = 0;
    this.clicks = 0;

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

console.log(imageArray);



function getRandomNumber() {
    return Math.floor(Math.random() * Image.allImages.length);
}

function images(image1, image2, image3) {
    image1Img.src = image1.imgSrc;
    image1Img.alt = image1.name;
    image1Img.title = image1.name;
    image2Img.src = image2.imgSrc;
    image2Img.alt = image2.name;
    image2Img.title = image2.name;
    image3Img.src = image3.imgSrc;
    image2Img.alt = image3.name;
    image3Img.title = image3.name;

    console.log(image1, image2, image3);
    console.log(image1Img, image2Img, image3Img);

}

images(bagJ, bananaJ, bathRoom);

function handleGoatClick(event) {
    ;
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
}

viewArea.addEventListener("click", handleGoatClick);