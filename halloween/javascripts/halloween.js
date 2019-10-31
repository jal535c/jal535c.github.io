/* declaracion de las funciones */

function mostrar(elemento) {
    document.getElementById(elemento).style.visibility="visible";
}
function ocultar(elemento) {
    document.getElementById(elemento).style.visibility="hidden";
}
function sonar(sonido) {
    document.getElementById(sonido).play();
}
function pausar(sonido) {
    document.getElementById(sonido).pause();
}