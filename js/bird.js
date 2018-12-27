   window.addEventListener('load', iniciar, false);
   var posY = 130;
   var posX = 130;
   var teclaC = 0;
   var velocidad = 0;
   var alturabajo = Math.random()*450;
   var alturaarriba = alturabajo-150;
   var tuboX= 350
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
     ctx.beginPath();
     ctx.fillStyle = "#F7FE2E";
     ctx.fillRect(posX,posY, 30, 30);
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
   function tubo(){
     tuboX = tuboX - 3;

     if (alturabajo < 150){
       alturabajo= alturabajo+150;
     }
     //ctx.drawImage(tubou, tuboX, 600-alturabajo);
     ctx.beginPath();
     ctx.fillStyle = "green";
     ctx.fillRect(tuboX,600-alturabajo,50,alturabajo);
     ctx.closePath();
     ctx.beginPath();
     ctx.fillStyle = "green";
     ctx.fillRect(tuboX,0,50,(450-alturabajo));
     ctx.closePath();
     console.log("bajo " + alturabajo);
     console.log("arriba " + (alturabajo-200));
     console.log("TUBOX" + tuboX);
     console.log("posY" + posY);

     if (tuboX<-30){
       tuboX= 350;
       alturabajo = Math.random()*450;
     }

   }

   function movimiento(){
     ctx = lienzo.getContext("2d");
     ctx.clearRect(0, 0, 300, 600);
     if ((posY > (600-alturabajo) && tuboX < 150 && tuboX > 80)) {
        activo = false;
        console.log("Fallo");
     }else if (posY < (450-alturabajo) && tuboX < 150 && tuboX > 80) {
       activo = false;
       console.log("Fallo");
     }
     if (activo == true) {
       bird();
       tubo();
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
        velocidad= 0;
        ctx.clearRect(50, 50, posX, posY);
         posY = posY - 100;

         break;
       default:

   }}
