





const  supuesto1 = [
  {
    type: "info",
    title: "Sistemas",
    content: "En el departamento TIC, al que usted se acaba de incorporar, quiere desarrollar para la Subdirección de Selección un sistema integral de información para la gestión de los procesos selectivos y convocatorias de oposiciones de la Administración General del Estado. El sistema incluirá, entre otras, las siguientes funcionalidades: Gestión de solicitudes de inscripción de aspirantes al proceso selectivo, Gestión de colaboradores, Generación de listados, estadísticas y cuadros de mando, y Generación de certificados para aspirantes y colaboradores. Dada la envergadura del proyecto, y para aprovechar las aplicaciones ya implantadas en la Subdirección y la experiencia profesional del personal, van a convivir diferentes lenguajes de programación, entre otros, Java, C# o Python, así como distintos gestores de Bases de Datos. Como repositorio de código se utiliza Git. A continuación se muestra un diagrama simplificado de clases que describe parte del sistema: Salvo que el enunciado diga lo contrario, se asume que aquellas preguntas que contengan un fragmento de código tendrán declaradas correctamente todas las clases, librerías y variables que no aparezcan explícitamente. Del mismo modo sí se trata de lenguaje HTML, se da por supuesto que éste será HTML5 y será ejecutado en navegadores que soporten dicha versión. Las sentencias SQL que aparecen se encuentran dentro del estándar ANSI SQL. Como metodología de base el organismo aplica Métrica v3.",
    img: "./examenes/8/captura1.jpg"
  },


    {
      "q": "1. Se necesita presentar una estadística utilizando HTML5 mediante una tabla en la que una de sus columnas contendrá la descripción de cada Proceso Selectivo. Suponiendo que a dicha columna la denominamos \"Proceso\", ¿qué etiqueta deberá utilizar para definir la celda de encabezado de la tabla para dicha columna, con un formato de letra diferenciado?",
      "o": [
        "a) th Proceso /th",
        "b) tableheader Proceso /tableheader",
        "c) theader Proceso /theader",
        "d) tableh Proceso /tableh "
      ],
      "a": 0
    },
    {
      "q": "2. Le indican que debe presentar también una lista de opositores con las notas correspondientes a los dos primeros ejercicios. Las notas se representarán como una lista anidada para cada opositor, debiendo ser el resultado a obtener: * Opositor ◦ Nota 1 ◦ Nota 2. ¿Cuál es el código HTML5 correcto si presentamos un solo opositor?",
      "o": [
        "a) ul li Opositor ul li Nota 1 /li li Nota 2 /li /ul /li /ul",
        "b) ul li Opositor /li /ul ul li Nota 1 /li li Nota 2 /li /ul",
        "c) ul li1 Opositor /li1 li2 Nota 1 /li2 li2 Nota 2 /li2 /ul",
        "d) ul li Opositor li Nota 1 /li li Nota 2 /li /li /ul"
      ],
      "a": 0
    },
    {
      "q": "3. Se quiere incluir un campo de texto obligatorio para que el opositor introduzca su nombre de usuario. Para desarrollar esta petición, de entre las siguientes opciones de código, ¿cuál debería utilizar para incorporarlo en el fragmento de código marcado como [---------------------------------------] ? form label for=\"username\" Nombre de Opositor: /label [---------------------------------------] input type=\"submit\" value=\"Confirmar\" / /form",
      "o": [
        "a) input type=\"text\" name=\"username\" required/",
        "b) input type=\"text\" name=\"username\" enforced/",
        "c) input type=\"text\" name=\"username\" mandatory/",
        "d) input type=\"text\" name=\"username\" compulsory/"
      ],
      "a": 0
    },
    {
      "q": "4. En la página web a la que accederán los aspirantes, se quiere aplicar el color verde a todos los elementos que tengan etiqueta 'a' que sean hijos de un elemento con etiqueta 'li' ¿Cuál es el código CSS adecuado?",
      "o": [
        "a) li.a {color: green;}",
        "b) li>a {color: green;}",
        "c) li#a {color: green;}",
        "d) li_a {color: green;}"
      ],
      "a": 1
    },
    {
      "q": "5. Un compañero le consulta la forma de aplicar el modelo de Diseño de Caja Flexible (o Flexbox) a un elemento div con id=\"principal\". De entre los siguientes, ¿cuál es el código CSS correcto que debería proponer?",
      "o": [
        "a) div#principal {display: flex;}",
        "b) div#principal {display: flexbox;}",
        "c) div#principal {display: flex-container;}",
        "d) div#principal {display:flexible;}"
      ],
      "a": 0
    },
    {
      "q": "6. Se han detectado varios errores en la exportación a XML de los diferentes listados de notas y le solicitan su ayuda. Sin tener en cuenta si la información está bien representada, ¿cuál de los siguientes XML está bien formado?",
      "o": [
        "a) Opositor Winston Churchill Nota1 95 /nota1 Nota2 65 /nota2 /opositor",
        "b) Opositor Winston Churchill Nota1 95 /Nota1 Nota2 65 /Opositor /Nota2",
        "c) Opositor Winston Churchill Nota1/ 95 Nota2/ 65 /Opositor",
        "d) Opositor Winston Churchill Nota1 95 / Nota2 65 / /"
      ],
      "a": 2
    },
    {
      "q": "7. En su Subdirección van a usar JSON para realizar intercambio de datos, y le preguntan, de entre los siguientes, cuál sería un fichero JSON válido.",
      "o": [
        "a) {\"nombre\": \"Juana\", \"apellido\": \"Ruiz\"}",
        "b) {'nombre': 'Juana', 'apellido': 'Ruiz'}",
        "c) {nombre: \"Juana\", apellido: \"Ruiz\"}",
        "d) {nombre: \"Juana\"; apellido: \"Ruiz\"}"
      ],
      "a": 0
    },
    {
      "q": "8. Dentro de las tecnologías para el desarrollo web utilizadas en su unidad, se contempla utilizar javascript. ¿Qué valor devuelve la siguiente función javascript? Function prueba() { var i = 1; var j = 0; while (i < 7) { j += i; i += 2; } return j; }",
      "o": [
        "a) 2",
        "b) 9",
        "c) 6",
        "d) 0"
      ],
      "a": 1
    },
    {
      "q": "9. Utilizando el lenguaje Python, a continuación se muestra la variable opositor, en la que se almacena el nombre y las puntuaciones de tres ejercicios por orden: opositor = {'nombre': 'Sandra Gomez', 'notas':} ¿Cómo asignaría a una variable llamada notaSegundoEjercicio el valor 36?",
      "o": [
        "a) notaSegundoEjercicio = opositor.notas.Value.Item2",
        "b) notaSegundoEjercicio = opositor['notas']",
        "c) notaSegundoEjercicio = opositor.Key[notas].Value",
        "d) notaSegundoEjercicio = opositor(notas(2))"
      ],
      "a": 1
    },
    {
      "q": "10. Se está valorando la realización de otros desarrollos de Machine Learning para Python y le preguntan cuál de las siguientes podría ser una librería válida para ello.",
      "o": [
        "a) Keras",
        "b) Yum",
        "c) Mahotas",
        "d) Openpyxl"
      ],
      "a": 0
    },
    {
      "q": "11. Le piden opinión porque en uno de los módulos Java se detecta un bucle que concatena una cantidad muy elevada de cadenas de texto, penalizando el rendimiento. ¿Qué clase de java.lang habría que utilizar para mejorar la eficiencia?",
      "o": [
        "a) StringConcat",
        "b) StringConstruct",
        "c) StringBuilder",
        "d) StringCreator"
      ],
      "a": 2
    },
    {
      "q": "12. ¿Cómo debe definir el equipo de desarrollo en Java una clase llamada Ejercicio si quiere impedir que se pueda heredar de la misma?",
      "o": [
        "a) closed class Ejercicio",
        "b) final class Ejercicio",
        "c) private class Ejercicio",
        "d) immutable class Ejercicio"
      ],
      "a": 1
    },
    {
      "q": "13. En C# se desea asegurar que se llame al método Dispose de un objeto tan pronto como finalice el bloque de código que aparece entre llaves. ¿Qué instrucción debemos utilizar?",
      "o": [
        "a) using (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}",
        "b) scope (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}",
        "c) dispose (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}",
        "d) internal (SqlConnection conn = new SqlConnection(connString)) {conn.Open();}"
      ],
      "a": 0
    },
    {
      "q": "14. Para cumplir el cometido que le ha sido asignado va a tener que definir arrays. ¿Cuál es la forma correcta de definir un array de enteros en C#?",
      "o": [
        "a) int[] arrayEnteros = new {1, 2, 3};",
        "b) int arrayEnteros[] = new() {1, 2, 3};",
        "c) int[] arrayEnteros = new[] {1, 2, 3};",
        "d) int arrayEnteros[] = new {1, 2, 3};"
      ],
      "a": 2
    },
    {
      "q": "15. Su equipo está estudiando la información existente dispersa en distintas fuentes de datos con el fin de consolidarla. En una base de datos antigua, hay una tabla que contiene el siguiente registro: NIF: 12345678Z Nombre: Emilia PrimerApellido: Pardo SegundoApellido: Bazán Direccion: Atocha 106 Telefonos: 916666666;917777777 ¿En qué forma normal está la tabla?",
      "o": [
        "a) En primera forma normal.",
        "b) En segunda forma normal.",
        "c) En tercera forma normal.",
        "d) No está en ninguna forma normal."
      ],
      "a": 3
    },
    {
      "q": "16. En la base de datos, el campo \"IdFormaAcceso\" de la tabla \"Proceso\" es de tipo char(1) y puede tomar los valores \"L\" (Ingreso Libre) y \"P\" (Promocion Interna). ¿Qué instrucción deberá utilizar para obtener un listado de todos los IdProceso de forma que aparezca el nombre descriptivo de la correspondiente Forma de Acceso?",
      "o": [
        "a) SELECT IdProceso, IF IdFormaAcceso = 'L' THEN 'Ingreso Libre' ELSE 'Promocion Interna' ENDIF AS FormaAcceso FROM Proceso",
        "b) SELECT IdProceso, CASE IdFormaAcceso WHEN 'L' THEN 'Ingreso Libre' WHEN 'P' THEN 'Promocion Interna' END AS FormaAcceso FROM Proceso",
        "c) SELECT IdProceso, SWITCH IdFormaAcceso ('L' = 'Ingreso Libre', 'P' = 'Promocion Interna') AS FormaAcceso FROM Proceso",
        "d) SELECT IdProceso, IIF(IdFormaAcceso, 'L' = 'Ingreso Libre', 'P' = 'Promocion Interna') AS FormaAcceso FROM Proceso"
      ],
      "a": 1
    },
    {
      "q": "17. También le consultan sobre la sentencia SQL a utilizar para obtener el listado del identificador de los opositores (IdOpositor) que tienen más de una entrada en la tabla Solicitud.",
      "o": [
        "a) SELECT IdOpositor, COUNT(IdSolicitud) AS NumeroSolicitudes FROM Solicitud GROUP BY IdOpositor WHERE NumeroSolicitudes > 1",
        "b) SELECT IdOpositor, IdSolicitud FROM Solicitud WHERE COUNT(IdSolicitud) > 1",
        "c) SELECT IdOpositor, COUNT(IdSolicitud) FROM Solicitud WHERE COUNT(IdSolicitud) > 1 GROUP BY IdOpositor",
        "d) SELECT IdOpositor, COUNT(IdSolicitud) FROM Solicitud GROUP BY IdOpositor HAVING COUNT(IdSolicitud) > 1"
      ],
      "a": 3
    },
    {
      "q": "18. ¿Con qué instrucción ANSI SQL incrementaría un diez por ciento el valor de la columna Duracion para todos los registros de la tabla Ejercicio?",
      "o": [
        "a) UPDATE Duracion = Duracion + (0.10 * Duracion) FROM Ejercicio",
        "b) UPDATE Ejercicio SET Duracion = Duracion * 1.1",
        "c) UPDATE TABLE Ejercicio (Duracion = Duracion + 10%)",
        "d) UPDATE SET Duracion *= 1.10 FROM Ejercicio"
      ],
      "a": 1
    },
    {
      "q": "19. Si el campo DNI de la tabla Opositor es de tipo char(9), ¿cuál es la instrucción SQL para obtener el listado de todos los registros de la tabla Opositor cuyo DNI empieza por 3?",
      "o": [
        "a) SELECT * FROM Opositor WHERE DNI = 3*",
        "b) SELECT * FROM Opositor WHERE DNI IN ('3.')",
        "c) SELECT * FROM Opositor WHERE DNI LIKE '3%'",
        "d) SELECT DNI(3*) FROM Opositor"
      ],
      "a": 2
    },
    {
      "q": "20. Como repositorio de código en su unidad se utiliza Git, y le preguntan, ¿qué comando, de entre los siguientes, muestra una lista de los commits anteriores?",
      "o": [
        "a) git commit",
        "b) git fetch",
        "c) git status",
        "d) git log"
      ],
      "a": 3
    },


    {
      "q": "R1. Dentro del código de la página web a la que acceden los opositores, se encuentra el siguiente código HTML: html body h1 id=\"titulo\" Primer ejercicio TAI /h1 /body /html ¿Cuál es el código javascript para obtener la cadena \"Primer ejercicio TAI\"?",
      "o": [
        "a) var titulo = document.getElementById(\"titulo\"). firstChild.nodeValue;",
        "b) var titulo = document.titulo.InnerHTML;",
        "c) var titulo = document.getElement(\"h1\"). InnerText;",
        "d) var titulo = document.children.getValue();"
      ],
      "a": 0
    },
    {
      "q": "R2. ¿Cuál es el principal cometido para el que ha sido concebido el framework de javascript Jest?",
      "o": [
        "a) Testeado de código.",
        "b) Machine learning.",
        "c) Animacion y efectos gráficos.",
        "d) Funciones matemáticas y tratamiento de cadenas."
      ],
      "a": 0
    },
    {
      "q": "R3. Entre los lenguajes contemplados para el nuevo sistema de información se encuentra Python. De entre los siguientes, ¿cuál es un framework para desarrollo web en Python?",
      "o": [
        "a) Django",
        "b) Keras",
        "c) Pip",
        "d) Numpy"
      ],
      "a": 0
    },
    {
      "q": "R4. Se ha realizado un vídeo explicativo para los opositores y se ha publicado en una página web. ¿Qué mostrará el siguiente fragmento de código en un navegador que soporte HTML5?: video width=\"320\" height=\"240\" controls source src=\"movie.mp4\" type=\"video/mp4\" source src=\"movie.ogg\" type=\"video/ogg\" No soportado /video",
      "o": [
        "a) Se mostrarán los dos vídeos \"movie.mp4\" y \"movie.ogg\".",
        "b) Se mostrará el mensaje \"No soportado\" en todos los casos.",
        "c) Se mostrará el vídeo \"movie.mp4\" si el navegador soporta el formato mp4.",
        "d) No se mostrará nada porque el código no está bien formado."
      ],
      "a": 2
    },
    {
      "q": "R5. Para intentar obtener información de la base de datos de aspirantes, un usuario malintencionado introduce la siguiente cadena en el campo \"Número de opositor\" de un formulario incluido en la página web de inscripciones al proceso: 100 OR 1=1 ¿Qué técnica está utilizando?",
      "o": [
        "a) Denial of Service.",
        "b) Phishing",
        "c) Malware attack.",
        "d) SQL Injection."
      ],
      "a": 3
    }
  ];



