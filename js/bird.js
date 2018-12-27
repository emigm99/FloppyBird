window.addEventListener('load', iniciar, false);
   var posY = 130;
   var posX = 130;
   var teclaC = 0;
   var velocidad = 0;
   var alturabajo1 = Math.random()*450;
   var alturabajo2 = Math.random()*450;
   var tuboX= 350;
   var tubo2X = 600;
   var activo = true;
   var score = 0;



   function iniciar() {


     fondo();
     partesJuego();

     console.log("Iniciado");
   }

   function partesJuego() {
    setInterval(movimiento,30);
   }

   function fondo() {
     lienzo = document.getElementById('lienzo');
     ctx = lienzo.getContext("2d");
     lienzo.style.backgroundColor = "blue";
   }

   function bird() {
     var pajaro = new Image;
     pajaro.src= './imgs/bird5.png'
     ctx.beginPath();
     ctx.fillStyle = "#F7FE2E";
     ctx.drawImage(pajaro,posX,posY)
     //ctx.fillRect(posX,posY, 30, 30);
     ctx.closePath();
     if(teclaC != 38){
       posY = posY + velocidad;
       velocidad= velocidad + 1;
     }

     if(posY < 1){
       posY = 1;
     }
     if(posY > lienzo.height-30){
       posY = lienzo.height-30;
     }


   }
   function tubo1(){
     tuboX = tuboX - 3;

     if (alturabajo1 < 150){
       alturabajo1= alturabajo1+150;
     }
     //ctx.drawImage(tubou, tuboX, 600-alturabajo);
     var tuboUp = new Image;
     tuboUp.src= './imgs/tuboup.png'
     var tuboDown = new Image;
     tuboDown.src= './imgs/tubodown.png'

     ctx.beginPath();
     ctx.fillStyle = "green";
      ctx.drawImage(tuboUp,tuboX,600-alturabajo1)
     //ctx.fillRect(tuboX,600-alturabajo,50,alturabajo);
     ctx.closePath();
     ctx.beginPath();
     ctx.fillStyle = "green";
     ctx.drawImage(tuboDown,tuboX,(450-alturabajo1)-492)
     //ctx.fillRect(tuboX,0,50,(450-alturabajo));
     ctx.closePath();
     console.log("bajo " + alturabajo1);
     console.log("arriba " + (alturabajo1-200));
     console.log("TUBOX" + tuboX);
     console.log("posY" + posY);

     if (tuboX<-130){
       tuboX= 350;
       alturabajo1 = Math.random()*450;
     }

   }
   function tubo2(){
     tubo2X = tubo2X - 3;

     if (alturabajo2 < 150){
       alturabajo2= alturabajo2+150;
     }
     //ctx.drawImage(tubou, tuboX, 600-alturabajo);
     var tuboUp = new Image;
     tuboUp.src= './imgs/tuboup.png'
     var tuboDown = new Image;
     tuboDown.src= './imgs/tubodown.png'

     ctx.beginPath();
     ctx.fillStyle = "green";
      ctx.drawImage(tuboUp,tubo2X,600-alturabajo2)
     //ctx.fillRect(tuboX,600-alturabajo,50,alturabajo);
     ctx.closePath();
     ctx.beginPath();
     ctx.fillStyle = "green";
     ctx.drawImage(tuboDown,tubo2X,(450-alturabajo2)-492)
     //ctx.fillRect(tuboX,0,50,(450-alturabajo));
     ctx.closePath();
     console.log("bajo " + alturabajo2);
     console.log("arriba " + (alturabajo2-200));
     console.log("TUBOX" + tubo2X);
     console.log("posY" + posY);

     if (tubo2X<-130){
       tubo2X= 350;
       alturabajo2 = Math.random()*450;
     }

   }
   function scoreboard() {
     if (posX == tuboX+50) {
       score++
       console.log(score);
     }else if ( (posX == tubo2X+50)) {
       score++
       console.log(score);
     }
    ctx = lienzo.getContext("2d")
    ctx.fillStyle = "yellow";
    ctx.font = "lighter 60px FlappyBirds";
    ctx.fillText(score,8,35);
   }
   function movimiento(){
     ctx = lienzo.getContext("2d");
     ctx.clearRect(0, 0, 300, 600);

     if (activo == true) {
       requestAnimationFrame(bird);
       requestAnimationFrame(tubo1);
        requestAnimationFrame(tubo2);
       requestAnimationFrame(scoreboard);
        requestAnimationFrame(hitbox);
     }



   }
function hitbox(){
  if (((posY > (580-alturabajo1) && tuboX < 172 && tuboX > 80))||((posY > (580-alturabajo2) && tubo2X < 172 && tubo2X > 80))) {
     activo = false;
     console.log("PosY: " + posY + " PosX " + posX + " TuboX " + tuboX + " Altura Abajo " + (600-alturabajo1));
  }else if ((posY < (450-alturabajo1) && tuboX < 172 && tuboX > 80)||(posY < (450-alturabajo2) && tubo2X < 172 && tubo2X > 80)) {
    activo = false;
    console.log("PosY: " + posY + " PosX " + posX + "TuboX" + tuboX + " Altura Arriba " + (450-alturabajo1));
  }
}

   document.onkeydown = function(event) {
     var teclaC;
     if (event == null) {
       teclaC = window.event.keyCode;
     } else {
       teclaC = event.keyCode;
     }

     switch (teclaC) {
       case 38: //arriba
        velocidad= -8;
         posY = posY - 50;

         break;
       default:

   }}
