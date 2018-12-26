   window.addEventListener('load', iniciar, false);
   var posY = 130;
   var posX = 130;
   var teclaC = 0;
   var velocidad = 2;
   var alturabajo = Math.random()*550;
   var alturaarriba = alturabajo-150;
   var tuboX= 350


   function iniciar() {
     var tubou = new Image()
     tubou.src = "./imgs/tubou.png"

     fondo();
     partesJuego();

     console.log("Iniciado");
   }

   function partesJuego() {
     setInterval(bird, 80);
    setInterval(tubo1, 10);
    setInterval(movimiento,100);
   }

   function fondo() {
     lienzo = document.getElementById('lienzo');
     ctx = lienzo.getContext("2d");
     lienzo.style.backgroundColor = "blue";
   }

   function bird() {

     ctx = lienzo.getContext("2d");
     ctx.beginPath();
     ctx.clearRect(30, 30, posX, posY);
     ctx.fillStyle = "#F7FE2E";
     ctx.fillRect(posX,posY, 30, 30);
     ctx.closePath();
     if(teclaC != 38){
       posY = posY + velocidad;
       velocidad= velocidad + 2;
     }

     if(posY < 1){
       posY = 1;
     }
     if(posY > lienzo.height-30){
       posY = lienzo.height-30;
     }

   }

   function movimiento(){
     tuboX = tuboX - 5;
   }

   function tubo1(){


     if (alturabajo < 200){
       alturabajo= alturabajo+200;
     }

     console.log(alturabajo);
     tubo = lienzo.getContext("2d");
     tubo.beginPath();
     tubo.clearRect(tuboX+60,alturabajo,60,610-alturabajo);
     tubo.fillStyle = "green";
     tubo.fillRect(tuboX,alturabajo, 60,600-alturabajo);
     tubo.closePath();
     tubo.beginPath();
     tubo.clearRect(tuboX+60,0,60, alturaarriba+2);
     tubo.fillStyle = "green";
     tubo.fillRect(tuboX,0, 60,alturaarriba);
     tubo.closePath();


     console.log("Tubo");
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
        velocidad= 0;
        ctx.clearRect(50, 50, posX, posY);
         posY = posY - 100;

         break;
       default:

   }}
