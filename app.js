'use strict'


let container = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector('sections img:bag');
let image2 = document.querySelector("sections img:boots");
let image3 = document.querySelector("sections img:water-can");

let Prod1 = "Prod1";
let Prod2 = "Prod2";
let Prod3 = "Prod3";

let clicks = 0;
let maxClicksAllowed = 25;

function Image(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
    Image.allImages.push(this);
}

Image.allImages = [];


function getRandomNumber() {
    return Math.floor(Math.random() * Image.allImages.lenght);
}

function renderImages() {
    let image1 = getRandomNumber();
    let image2 = getRandomNumber();
    let image3 = getRandomNumber();

