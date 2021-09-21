// variables hp
let currentHp1 = 100;
let currentHp2 = 100;

//función valor random para daño
function recibirDaño() {
  return Math.floor(Math.random() * (25 - 5)) + 5;
}
//display del ganador.
function whowin(player) {
  $("#win").text(player + " won!");
  $("#win").addClass("blink_me");
}
//funcion turnos y delay de botones para animación completa
function turno(boton1, boton2) {
  $(`#${boton1}`).prop("disabled", true);
  $(`#${boton1}`).css({ opacity: 0.3 });
  $(`#${boton2}`).prop("disabled", true);
  $(`#${boton2}`).css({ opacity: 0.3 });
  setTimeout(turno2, 2000, boton2);
}
function turno2(boton2) {
  $(`#${boton2}`).css({ opacity: 1 });
  $(`#${boton2}`).prop("disabled", false);
}
//reinicio del juego al completarse
function reset() {
  alert("Pulsa aquí para reiniciar la batalla");
  window.location.reload(true);
}
// reinicia animaciones gif, valor de daño realizado y restablece animación base cuando hp>0.

function reinicio() {
  if (currentHp2 > 0) {
    var img = document.getElementById("attack1");
    img.src = "img/attack1.gif";
    var img = document.getElementById("hurt2");
    img.src = "img/hurt2.gif";
  }
  if (currentHp1 > 0) {
    var img = document.getElementById("attack2");
    img.src = "img/attack2.gif";
    var img = document.getElementById("hurt1");
    img.src = "img/hurt1.gif";
  } 
  $("#damage1").removeClass();
  $("#damage1").empty();
  $("#damage2").removeClass();
  $("#damage2").empty();
  document.getElementById("hurt1").style.visibility = "hidden";
  document.getElementById("attack1").style.visibility = "hidden";
  document.getElementById("normal1").style.visibility = "visible";
  document.getElementById("hurt2").style.visibility = "hidden";
  document.getElementById("attack2").style.visibility = "hidden";
  document.getElementById("normal2").style.visibility = "visible";
}

function attack1() {
  var danyo = recibirDaño();
  currentHp2 = currentHp2 - danyo;
  if (currentHp2 > 0) {
    $("#hp2").text(currentHp2 + " hp");
    document.getElementById("normal1").style.visibility = "hidden";
    document.getElementById("attack1").style.visibility = "visible";
    document.getElementById("normal2").style.visibility = "hidden";
    document.getElementById("hurt2").style.visibility = "visible";
    setTimeout(reinicio, 1500);
    $("#damage2").text(danyo);
    $("#damage2").addClass("startDamageAnim");
    turno("btn-attack1", "btn-attack2");
  } else {
    $("#hp2").text(0);
    document.getElementById("normal1").style.visibility = "hidden";
    document.getElementById("attack1").style.visibility = "visible";
    document.getElementById("normal2").style.visibility = "hidden";
    document.getElementById("ded2").style.visibility = "visible";
    setTimeout(whowin , 2000, "Player1");
    
    setTimeout(reset, 6000);
  }
}

function attack2() {
  var danyo = recibirDaño();
  currentHp1 = currentHp1 - danyo;
  if (currentHp1 > 0) {
    $("#hp1").text(currentHp1 + " hp");
    document.getElementById("normal2").style.visibility = "hidden";
    document.getElementById("attack2").style.visibility = "visible";
    document.getElementById("normal1").style.visibility = "hidden";
    document.getElementById("hurt1").style.visibility = "visible";
    setTimeout(reinicio, 2000);
    $("#damage1").text(danyo);
    $("#damage1").addClass("startDamageAnim");
    turno("btn-attack2", "btn-attack1");
  } else {
    $("#hp1").text(0);
    document.getElementById("normal2").style.visibility = "hidden";
    document.getElementById("attack2").style.visibility = "visible";
    document.getElementById("normal1").style.visibility = "hidden";
    document.getElementById("ded1").style.visibility = "visible";
    setTimeout(whowin , 2000, "Player2");
    setTimeout(reset, 6000);
  }
}
/*
const attackBtn1 = document.getElementById("btn-attack1");
const attackBtn2 = document.getElementById("btn-attack2");

attackBtn1.addEventListener("click", attack1);
attackBtn2.addEventListener("click", attack2);
*/
$('#btn-attack1').click(attack1);
$('#btn-attack2').click(attack2);

