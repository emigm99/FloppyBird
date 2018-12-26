   window.addEventListener('load', iniciar, false);

   var posX = 200;

   function iniciar() {


     fondo();
     partesJuego();
     console.log("Iniciado");
   }

   function partesJuego() {


     setInterval(movimiento, 80);
   }

   function fondo() {
     lienzo = document.getElementById('lienzo');
     ctx = lienzo.getContext("2d");
     lienzo.style.backgroundColor = "blue";
   }

   function bird(x, y) {
     ctx = lienzo.getContext("2d");
     ctx.beginPath();
     ctx.rect(x, y, 50, 50);
     ctx.fillStyle = "#F7FE2E";
     ctx.fill();
     ctx.closePath();
   }

   function movimiento() {
     console.log(posX);
     bird(posX, 280);
     document.onkeydown = function(event) {
       var teclaC;

       if (event == null) {
         teclaC = window.event.keyCode;
       } else {
         teclaC = event.keyCode;
       }

       switch (teclaC) {
         case 38: //arriba
           posX = posX + 10;
           break;
         default:
       }
     }
   }
