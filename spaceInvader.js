"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader() {

    context.fillStyle = "#7fd152";
    context.beginPath();
    //rechthoek linksboven  
    context.rect(35, 35, 71, 211);
    //rechthoek rechtsboven  
    context.rect(319, 35, 71, 211);
    //vierkant midden  
    context.rect(177, 175, 71, 71);
    //rechthoek midden onder
    context.rect(106, 246, 213, 71);
    //rechthoek onder
    context.rect(35, 317, 355, 71);
    context.fill();
}