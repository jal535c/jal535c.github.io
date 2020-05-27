/****** Mis javascripts para Bootstrap *******/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    
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
    document.getElementById("resultado1").innerHTML = "";
    return false;
  }      
      
  //calculo interno 
  area=(base*altura)/2;

  //mostrar resultado
  document.getElementById("resultado1").innerHTML = "Area es: "+area;
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


function calculoLetraDni(){    
  var numeroDni=document.getElementById("numeroDni").value;
  const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE"; 
  var miLetra;

  if (!validarDni(numeroDni, "numeroDni")) {    // VALIDA QUE EL DNI ES UN NÚMERO ENTERO Y TIENE 7 U 8 DÍGITOS
    return false;
  }   
       
  miLetra = LETRAS.substr(numeroDni%23, 1);      
  document.getElementById("resultado2").innerHTML = `La letra que corresponde al DNI es: ${miLetra} `;

  return false;                    
}


function validarDni(valor, campo){
  if (isNaN(parseInt(valor)) || valor!=Math.trunc(valor) || valor.length<7 || valor.length>8) {
    document.getElementById(campo).style.borderColor = "red";
    document.getElementById(campo+"Help").innerHTML = "El DNI debe ser entero y tener 7 u 8 dígitos";
    return false;
  } else {
    return true;
  }     
}


function calculoMayus(){    
  var palabra = document.getElementById("txtPalabra").value;
  var p = palabra;      
  var resul="";

  if (p.toUpperCase()==palabra) {
    resul="mayúscula";
  } else if (p.toLowerCase()==palabra) {
    resul="minúscula";
  } else {
    resul="mixta";
  }                  
  
  document.getElementById("resultado3").innerHTML = `La palabra es: ${resul}`;

  return false;                    
}


function diviEuclides() {
  var dividendo = document.getElementById("divi").value;
  var divisor = document.getElementById("disor").value;
  var cociente = 0;

  dividendo = dividendo - divisor;

  while (dividendo >= 0) {
    cociente++;
    dividendo = dividendo - divisor;
  }
  
  document.getElementById("resultado4").innerHTML = "El resultado es: "+ cociente;
  return false;     
}


function mcdEuclides() {
  var num1 = document.getElementById("nuno").value;
  var num2 = document.getElementById("ndos").value;
  
  while (num2!=0) {
    var temp = num2;
    num2 = num1%num2;
    num1 = temp;
  }

  document.getElementById("resultado5").innerHTML= "El resultado es: " + num1;
  return false;     
}


// jquery


$(document).ready(function() {

////////////////////////////////////////////////
// mostrar y ocultar texto de diferentes formas

  $("#hide1").click(function() {
    $("#p1").hide();
  });

  $("#hide2").click(function() {
    $("#p1").show();
  });

  $("#hide3").click(function() {
    $("#p1").toggle();
  });

  $("#f1").click(function() {
    $("#p2").fadeIn("slow");
  });

  $("#f2").click(function() {
    $("#p2").fadeOut("slow");
  });

  $("#f3").click(function() {
    $("#p2").fadeToggle("slow");
  });

  $("#s1").click(function() {
    $("#p3").slideDown(2000);
  });

  $("#s2").click(function() {
    $("#p3").slideUp(2000);
  });

  $("#s3").click(function() {
    $("#p3").slideToggle(2000);
  });


  //////////////////////////////////////////////////////////////
  // animacion de figuras


  $("#start").click(function() {
    $("#fig1").animate( {    // cuadro rojo, se desplaza
      left: '40%',
      top: '50%',
      height: '150px',
      width: '150px',
      opacity: 0.5
    }, 3000);
       
    $("#fig2").animate( {    // círculo amarillo, se desplaza
      right: '30%',
      top: '40%',
      height: '150px',
      width: '150px',
      opacity: 0.5
    }, 3000);

    $("#fig3").animate( {    // elipse verde, se desplaza
      right: '30%',
      bottom: '40%',
      height: '150px',
      width: '150px',
      opacity: 0.5
    }, 3000);

    $("#fig4").animate( {    // rectangulo violeta, se desplaza
      left: '30%',
      bottom: '40%',
      height: '150px',
      width: '190px',
      opacity: 0.5
    }, 3000);
      
    $("#animacion p").fadeIn(2000);  
  });

  $("#stop").click(function() {      // si se pulsa stop, toda la animacion se detiene
    $("#fig1").stop(true, false);
    $("#fig2").stop(true, false);
    $("#fig3").stop(true, false);
    $("#fig4").stop(true, false);
  });

  $("#end").click(function() {      // si se pulsa end, toda la animacion va al final
    $("#fig1").stop(true, true);
    $("#fig2").stop(true, true);
    $("#fig3").stop(true, true);
    $("#fig4").stop(true, true);
  });


  ////////////////////////////////////////////////////////////////////////////
  // callback y chaining

  $("#btn1").click(function(){
    $("#parraf1").hide("slow", function(){
      alert("Popup: ahora el parrafo está oculto");
    });
  });

  $("#btn2").click(function(){
    $("#parraf2").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });

});