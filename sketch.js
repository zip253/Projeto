//Criando Variáveis
var bola;

function setup() {
  //Criando Tela
  createCanvas(400,400);
  //Criando Sprites
  bola=createSprite (200,200,20,20);
}

//Função Draw
function draw() 
{
  //Criando Fundo
  background(30);

  //Movimentação Bola
  if (keyIsDown(UP_ARROW )||keyDown("w")){
  bola.y=bola.y - 2;
}
if (keyIsDown(DOWN_ARROW)||keyDown("s")){
  bola.y=bola.y + 2;
}
if (keyIsDown(RIGHT_ARROW)||keyDown("d")){
  bola.x=bola.x + 2;
}
if (keyIsDown(LEFT_ARROW)||keyDown("a")){
  bola.x=bola.x - 2;
}

  drawSprites();
}




