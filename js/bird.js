   window.addEventListener('load', iniciar, false);
   var posY = 130;
   var posX = 130;
   var teclaC = 0;
   var velocidad = 2;


   function iniciar() {
     var tubou = new Image()
     tubou.src = "./imgs/tubou.png"

     fondo();
     partesJuego();

     console.log("Iniciado");
   }

   function partesJuego() {
     setInterval(bird, 80);
      tubo1();
   }

   function fondo() {
     lienzo = document.getElementById('lienzo');
     ctx = lienzo.getContext("2d");
     lienzo.style.backgroundColor = "blue";
   }

   function bird() {

     ctx = lienzo.getContext("2d");
     ctx.clearRect(30, 30, posX, posY);
     ctx.fillStyle = "#F7FE2E";
     ctx.fillRect(posX,posY, 30, 30);



     if(teclaC != 38){
       posY = posY + velocidad;
       velocidad++;
     }

     if(posY < 0){
       posY = 0;
     }
     if(posY > 550){
       posY = lienzo.height-30;
     }

   }

   function tubo1(){

     var alturabajo = Math.random()*550;
     if (alturabajo < 200){
       alturabajo= alturabajo+200;
     }
      var alturaarriba = alturabajo-150;
     console.log(alturabajo);
     ctx = lienzo.getContext("2d");
     ctx.fillStyle = "green";
     ctx.fillRect(250,alturabajo, 60,600-alturabajo);

     ctx.fillStyle = "green";
     ctx.fillRect(250,0, 60,alturaarriba);



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
     }
     teclaC = 0;
   }
