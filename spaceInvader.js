"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader() {
    //background
    context.beginPath(); 
    context.rect(0, 0, 300, 300);
    context.fill();
    
    context.fillStyle = "#7fd152";
    context.beginPath();
    //rechthoek linksboven  
    context.rect(25, 25, 50, 150);
    //rechthoek rechtsboven  
    context.rect(225, 25, 50, 150);
    //vierkant midden  
    context.rect(125, 125, 50, 50);
    //rechthoek midden onder
    context.rect(75, 175, 150, 50);
    //rechthoek onder
    context.rect(25, 225, 250, 50);
    context.fill();
}