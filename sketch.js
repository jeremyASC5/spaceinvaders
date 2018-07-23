var x = 100;
var y = 100;

function setup(){
    createCanvas(1000,650)
    background(255,204,0);
}

function draw(){
    background(255,204,0);
    drawGame();
    nextStep();
}

let bullets = [];
let enemies = [];
}

function nextStep(){
    if (keyIsDown(LEFT_ARROW)){
        x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)){
        x += 5;
    }
    if (keyIsDown(UP_ARROW)){
        let x_y = [x, y+500];
        bullets.push(x_y);
    }
}
function nextStep(){
    for(let i=0; i<bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 1;
    }
}
function drawGame(){
    for(let i=0; i<bullets.length; i++){
        let x = bullets[i][0];
        let y = bullets[i][1];
        fill(255,26,26)
        rect(x,y,5,5);
    }
    fill(0,255,0);
    rect(x,y+500,50,30)
    triangle(x,y+500,x+15,y+520,x+15,y+465)
    triangle(x+50,y+500,x+35,y+520,x+35,y+465)
      }

}
