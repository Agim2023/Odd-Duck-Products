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

function setImages(prod1, prod2, prod3) {
    console.log("setting images")
    image1Img.src = prod1.imgSrc;
    image1Img.alt = prod1.name;
    image1Img.title = prod1.name;

    image2Img.src = prod2.imgSrc;
    image2Img.alt = prod2.name;
    image2Img.title = prod2.name;

    image3Img.src = prod3.imgSrc;
    image3Img.alt = prod3.name;
    image3Img.title = prod3.name;

    console.log(prod1, prod2, prod3);
    console.log(image1Img, image2Img, image3Img);

}

setImages(bagJ, bananaJ, bathRoom);

function setRandomImages() {
    let imageIndex1 = getRandomInt(imageArray.length);
    let imageIndex2 = getRandomInt(imageArray.length);
    let imageIndex3 = getRandomInt(imageArray.length);
    while (imageIndex1 === imageIndex2 || imageIndex2 === imageIndex3 || imageIndex2 === imageIndex3) {
        imageIndex1 = getRandomInt(imageArray.length);
        imageIndex2 = getRandomInt(imageArray.length);
        imageIndex3 = getRandomInt(imageArray.length);
    }
    imageIndex1 = getRandomInt(imageArray.length);
    imageIndex2 = getRandomInt(imageArray.length);
    imageIndex3 = getRandomInt(imageArray.length);

    let Img1 = imageArray[imageIndex1];
    let Img2 = imageArray[imageIndex2];
    let Img3 = imageArray[imageIndex3];

    setImages(Img1, Img2, Img3);
    console.log(Img1, Img2, Img3);

    // setImages(Img1, Img2, Img3);

    console.log("setRandomImages");
}

setRandomImages();




function handleImageClick(event) {
    event.preventDefault();
    let target = event.target;
    let imageName = target.alt;
    console.log

    let theBestImage;
    for (let i = 0; i < imageArray.length; i++) {
        let image = imageArray[i];
        if (image.name === imageName) {
            theBestImage = image;
        }
        // theBestImage.click++;
    }

    theBestImage.click++;

    console.log(imageName, theBestImage.click);
    console.log(theBestImage);
    setRandomImages();
}

viewArea.addEventListener("click", handleImageClick);

let buttonListener = document.querySelector('button')

function buttonHandler(event) {

    event.preventDefault();
    let target = event.target;
    let imageName = target.alt;
    console.log("clicked button");
    for (let image of imageArray)
        console.log(`${image.clicks} votes for ${image.name}`)
}
function renderResults(event) {
    event.preventDefault();
    console.log("clicked");
    results.innerHTML = "";
    let imageUL = document.createElement('ul');
    for (let i = 0; i < imageArray.length; i++) {
        console.log("clicked button");
        // results.innerHTML = "";
        // let imageUL = document.createElement('ul');
        let image = imageArray[i];
        let imageName = image.name;
        console.log(image);
        let imageClickCount = image.clicks;
        let report = `the image named ${imageName} got ${imageClickCount} clicks`;
        let imageLI = document.createElement("li");
        imageLI.textContent = report;
        imageUL.appendChild(imageLI);
        console.log(report);
        // viewArea.appendChild(imageUL);
    }
    results.appendChild(imageUL);
    displayChart(imageArray);
}



let showResultsButton = document.getElementById("show-results-button");
showResultsButton.addEventListener("click", renderResults);

let chart;
function displayChart(data) {
    let labels = getLabelData(data);
    let votes = getVoteData(data)
    let ctx = document.getElementById("chart-canvas");
    let dataObj = {
        type: "bar",
        options: {
            animation: false,
        },
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Votes For Images",
                    data: [5, 10, 3, 6, 8, 12, 7, 5, 4, 6, , 8],
                }
            ]
        }
    }
    let chart = new Chart(ctx, dataObj);
}

displayChart(imageArray);

function getVoteData(imageArray) {
    let votes = [];
    for (let image of imageArray) {
        votes.push(image.voteCount);
    }
    return votes
}

function getLabelData(imageArray) {
    let labels = [];
    for (let image of imageArray) {
        labels.push(image.name);
    }
    return labels
}