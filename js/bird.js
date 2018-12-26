   window.addEventListener('load', iniciar, false);
   var posY = 130;
   var posX = 130;
   var teclaC = 0;


   function iniciar() {


     fondo();
     partesJuego();
     console.log("Iniciado");
   }

   function partesJuego() {

     setInterval(bird, 80);
   }

   function fondo() {
     lienzo = document.getElementById('lienzo');
     ctx = lienzo.getContext("2d");
     lienzo.style.backgroundColor = "blue";
   }

   function bird() {

     console.log(posY);
     ctx = lienzo.getContext("2d");
     ctx.clearRect(0, 0, 300, 600);
     ctx.beginPath();
     ctx.fillRect(posX,posY, 50, 50);
     ctx.fillStyle = "#F7FE2E";
     ctx.fill();
     ctx.closePath();

     if(teclaC != 38){
       posY = posY + 10;
     }

     if(posY < 0){
       posY = 0;
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
       var cont = 0

         posY = posY - 100;

         break;
       default:
     }
     teclaC = 0;
   }
