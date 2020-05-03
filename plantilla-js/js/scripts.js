/****** Mis javascripts para Bootstrap *******/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    //$('.navbar-toggler').click();

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

    //$('.collapse').collapse('hide');

    //$(".cerrarMenu").click(function() {
			//$('.navbar-toggler').click();
	  //});

  });
});


function areaTriangulo() {
  //entrada de datos via formulario
  var base = parseFloat(document.getElementById("base").value);   //me vienen string
  var altura = parseFloat(document.getElementById("altura").value);
  var area;
  var error=0;
  
  error = validarNumber(base,"base"); 
  error += validarNumber(altura,"altura");      

  if (error!=0) {
    document.getElementById("resultado").innerHTML = "";
    return false;
  }      
      
  //calculo interno 
  area=(base*altura)/2;

  //mostrar resultado
  document.getElementById("resultado").innerHTML = "Area es: "+area;
  return false;   //frena el submit, asi no refresca, y se puede ver
}


function validarNumber(valor, campo) {
  //hay k validar k la base sea un numero, bateria de test
  if (isNaN(valor)) {
    document.getElementById(campo).style.borderColor="red";
    document.getElementById(campo+"Help").innerHTML=`La ${campo} debe ser numerica`;
    return 1;
  } else {
    return 0;
  }
}


function quitarError(campo) {
  document.getElementById(campo).style.borderColor="gray";
  document.getElementById(campo+"Help").innerHTML="";
}



