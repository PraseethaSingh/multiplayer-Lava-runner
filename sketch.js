var database, gameState = 0;
var game,form,playerCount,player,allPlayers;
var characters,character1,character2;


function preload(){
    background1 = loadImage("images/background.png")

}
function setup(){
   
createCanvas(displayWidth,600);
database = firebase.database();
game = new Game();
game.getState();
game.begin();

}

function draw(){
//background(background1)
if (playerCount === 2){
    game.update(1)
}
if (gameState === 1){
    game.play()
}


}
