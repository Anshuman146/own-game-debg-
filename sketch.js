var car
var form,player,game,database,playerCount
function setup(){
createCanvas(windowWidth,windowHeight);
database = firebase.database();
game=new Game();
game.start();


}
function draw(){
    background(0);
//drawSprites();
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}