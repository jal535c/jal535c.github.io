//funcion para la responsive top navbar

function myFunction() {
    var x = document.getElementById("myTopnav");   
    if (x.className === "topnav") {
        x.className += " responsive";   
    } else {
        x.className = "topnav";     //con la hamburguesa va cambiando, toggle
    }
}