var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var suma;
var turno=1;
var punto=0;
var audioWin = new Audio("C:/Users/Usuario/Desktop/U. MANUELA/PRIMER SEMESTRE/juego/Craps/sounds/victoria.mp3");

window.onload = init;

function init(){
boton_tirar =document.getElementById("boton_tirar");
boton_tirar.addEventListener("click",jugar);

dado1 = document.getElementById("dado1");
dado2 = document.getElementById("dado2");
cerrar.addEventListener("click",cerrarVentana);
}

function tirardado(){
return Math.floor(Math.random() * 6) + 1 ;
}

function actualizarDado(ref,cara){
ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
tiro_1 = tirardado();
tiro_2 = tirardado();
actualizarDado(dado1,tiro_1);
actualizarDado(dado2,tiro_2);


suma = tiro_1 + tiro_2;

if((suma==7 || suma==11) && turno==1 )
{
  mostrarMensaje("😎Gano la partida😎");
  console.log("Se reinicio el turno");
  audioWin.play();
  turno=1;
}
else
{
  if((suma==2 || suma==3 || suma==12) && turno==1)
  {
    mostrarMensaje("🤕 Perdio la partida 🤕");
    console.log("Se reinicio el turno");
    turno=1; 
  }
  else
  {
    if(turno==1)
    {
      punto = suma;
      mostrarMensaje("El Punto es " + punto);
      console.log("Punto es ", punto);
    }

    if(suma == punto && turno>=2)
    {
      mostrarMensaje("😎 Gano la partida 😎");
      console.log("Se reinicio el turno");
      audioWin.play();
      turno = 1;
      punto = 0;
    }
    else
    {
      if(suma == 7)
      {
        mostrarMensaje("🤕 Perdio la partida 🤕");
        console.log("Se reinicio el turno");
        turno = 1;
        punto = 0;
      }
      else
      {
        turno = turno + 1;
      }
    }
  }
}
}


function mostrarMensaje(mensaje){
mensaje_texto.innerHTML = mensaje;
abrirVentana();
}

function abrirVentana(){  
ventana.className = "ligthbox animate__animated  animate__fadeIn";
}

function cerrarVentana(){
ventana.className = "ligthbox hidden";
}