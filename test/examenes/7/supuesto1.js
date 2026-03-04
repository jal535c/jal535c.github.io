const supuesto1 = [
  {
    type: "info",
    title: "Desarrollo y base de datos",
    content: "Se va a desarrollar un sistema que permitirá a una persona (interesado) otorgar permiso a otra (representante) para que actúe en su nombre ante la Administración en un determinado trámite. El sistema contará con los siguientes módulos: Un frontal web (Punto de Acceso General) que recoge todos los trámites de la Administración y donde el interesado puede otorgar la representación. Un proceso que tramita las peticiones de representación, envía notificaciones PUSH a los representantes y recaba los consentimientos producidos. Un módulo de gestión para el personal funcionario de atención al público. Cuando el interesado pulse el botón Otorgar Representación en un trámite, el sistema generará un enlace único con caducidad, que será enviado por notificación PUSH al representante. En el momento en que el representante acceda al enlace tendrá disponible la acción Obtener PIN y deberá usar la aplicación móvil Cl@ve PIN para obtener un PIN válido. El funcionario, en el módulo de gestión, podrá comparar el PIN generado para la operación con el que le ofrece el representante, permitiendo el trámite si estos coinciden. Un interesado podrá solicitar representación para tantos trámites como considere y cada trámite podrá ser solicitado por un número cualquiera de interesados, pero una representación solo es válida para un trámite a la vez. Asimismo, cada representante podrá obtener permisos en cualquier número de trámites",
    img: "./examenes/7/Captura1.JPG"
  },
  
  
  {
    "q": "1. En el diagrama de clases la relación existente entre “Solicitud Representación” y “Trámite”, ¿qué multiplicidades serían compatibles con los requisitos planteados en el enunciado?",
    "o": [
      "a) ‘1’ en el recuadro “SR>T” y ‘1’ en el recuadro “T>SR”.",
      "b) ‘1’ en el recuadro “SR>T” y ‘0..N’ en el recuadro “T>SR”.",
      "c) ‘0..N’ en el recuadro “SR>T” y ‘1’ en el recuadro “T>SR”.",
      "d) ‘1..N’ en el recuadro “SR>T” y ‘0..N’ en el recuadro “T>SR”."
    ],
    "a": 2
  },
  {
    "q": "2. En Java SE 17, ¿con qué visibilidad se deben generar los atributos de la clase Data Access Object Solicitudes si se quiere tener acceso directamente desde cualquier otro objeto, sin mediación de métodos?",
    "o": [
      "a) Se usará el modificador \"public\".",
      "b) Se usará el modificador \"protected\".",
      "c) No se usará ningún modificador.",
      "d) Se usará el modificador \"private\"."
    ],
    "a": 0
  },
  {
    "q": "3. En Java SE 17, ¿cuál de los siguientes tipos de colección no admite duplicados?",
    "o": [
      "a) List",
      "b) Stack",
      "c) Collection",
      "d) Set"
    ],
    "a": 3
  },
  {
    "q": "4. Para crear una tabla llamada Usuario, ¿qué sentencia SQL debemos ejecutar?",
    "o": [
      "a) ALTER TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
      "b) INSERT TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
      "c) CREATE TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));",
      "d) DROP TABLE Usuario (idUsuario bigint PRIMARY KEY, nombre varchar(255));"
    ],
    "a": 2
  },
  {
    "q": "5. Si fuese el motor de Base de Datos ORACLE, indique cuál de los siguientes es un lenguaje de procedimiento cuya sintaxis permite insertar sentencias SQL y se almacena compilado dentro de la base de datos:",
    "o": [
      "a) TRANSACT SQL",
      "b) PL/SQL",
      "c) FORTRAN",
      "d) COBOL"
    ],
    "a": 1
  },
  {
    "q": "6. Se ha heredado una librería compilada que realiza la conexión a un importante servicio de comprobación de Cl@ve PIN, ¿qué patrón de diseño permite reutilizar este objeto?",
    "o": [
      "a) Adaptador (Adapter)",
      "b) Singleton",
      "c) Chain of responsibility (Cadena de responsabilidad)",
      "d) Iterador (Iterator)"
    ],
    "a": 0
  },
  {
    "q": "7. La última versión del estándar de UML es:",
    "o": [
      "a) 2.5",
      "b) 2.4.1",
      "c) 2.4",
      "d) 3.0"
    ],
    "a": 0
  },
  {
    "q": "8. En UML un diagrama de componentes:",
    "o": [
      "a) Describe la estructura del sistema mostrando las clases del sistema, sus atributos y relaciones entre ellas.",
      "b) Describe cómo un sistema de software se divide en componentes y muestra las dependencias entre ellos.",
      "c) Sirve para modelar el hardware utilizado en las implementaciones del sistema...",
      "d) Muestra una vista completa o parcial de la estructura de un sistema modelado en un momento específico."
    ],
    "a": 1
  },
  {
    "q": "9. ¿Qué framework se puede usar para aplicaciones de escritorio nativas .NET?",
    "o": [
      "a) .NET MAUI",
      "b) Blazor Hybrid",
      "c) JavaFX",
      "d) WebView"
    ],
    "a": 0
  },
  {
    "q": "10. ¿Cuál es la normativa que define los requisitos de accesibilidad de los sitios web y aplicaciones móviles de los organismos del sector público?",
    "o": [
      "a) Orden Ministerial 1112/2018, de 7 de septiembre.",
      "b) Ley Orgánica 1112/2018, de 7 de septiembre.",
      "c) Ley 1112/2018, de 7 de septiembre.",
      "d) Real Decreto 1112/2018, de 7 de septiembre."
    ],
    "a": 3
  },
  {
    "q": "11. En nuestra aplicación Java, ¿qué paquetes usaríamos para establecer la conexión a la base de datos de NOTIFICACION?",
    "o": [
      "a) java.database",
      "b) javax.naming y javax.sql",
      "c) javax.io y javax.servlet",
      "d) javax.servlet"
    ],
    "a": 1
  },
  {
    "q": "12. Se quiere desarrollar un microservicio para que el personal funcionario pueda consultar el estado de una notificación enviada. ¿Qué especificación de la comunidad, alineada con Jakarta EE Core Profile, es la indicada para desarrollarlo?",
    "o": [
      "a) Jakarta Authentication",
      "b) Jakarta Batch",
      "c) Microprofile",
      "d) Jakarta Connectors"
    ],
    "a": 2
  },
  {
    "q": "13. En el equipo de desarrollo se ha decidido usar Selenium WebDriver para:",
    "o": [
      "a) Mejorar la accesibilidad de las páginas web facilitando audios a partir del texto.",
      "b) Automatizar la ejecución de pruebas en el navegador.",
      "c) Minimizar el tiempo de carga de la página web.",
      "d) Diseñar páginas web adaptables."
    ],
    "a": 1
  },
  {
    "q": "14. ¿Cuál es una herramienta de análisis de seguridad y calidad de código?",
    "o": [
      "a) SonarQube",
      "b) SonarCode",
      "c) SonarCuality",
      "d) SonarSrc"
    ],
    "a": 0
  },
  {
    "q": "An15. ¿Cuál de los siguientes es un protocolo de seguridad usado en las comunicaciones HTTP?",
    "o": [
      "a) TLS",
      "b) SSL",
      "c) STARTTLS",
      "d) WPA2"
    ],
    "a": -1
  },
  {
    "q": "16. ¿Qué tecnología de las siguientes es adecuada para implementar la recepción de notificaciones nativas en los teléfonos inteligentes del representante y del interesado?",
    "o": [
      "a) WebView",
      "b) Mobile push",
      "c) CDMA",
      "d) Wi-Fi"
    ],
    "a": 1
  },
  {
    "q": "17. ¿Cuál de los siguientes lenguajes de estilos emplearía si le piden modificar el color de un botón en el frontal web?",
    "o": [
      "a) XML",
      "b) SGML",
      "c) XSL",
      "d) CSS"
    ],
    "a": 3
  },
  {
    "q": "18. ¿Cómo se conoce el conjunto de pautas, componentes y herramientas que respaldan las mejores prácticas de diseño de la interfaz de usuario, perteneciente a Google?",
    "o": [
      "a) WCAG 2.1",
      "b) WAI-ARIA",
      "c) Material Design",
      "d) Inclusive Design"
    ],
    "a": 2
  },
  {
    "q": "19. ¿Cuál de los siguientes ataques consiste en inducir a un usuario a realizar acciones no deseadas en la aplicación web en la que está actualmente autenticado?",
    "o": [
      "a) Cross Site Request Forgery",
      "b) Cross Site Repeat Forgery",
      "c) Cross Site Reduction Forgery",
      "d) Cross Send Request Forgery"
    ],
    "a": 0
  },
  {
    "q": "20. Señale el software que permite automatizar la construcción y despliegue de un proyecto utilizando el concepto de pipelines:",
    "o": [
      "a) Jenkins",
      "b) RabbitMQ",
      "c) Apache Kafka",
      "d) Subversion"
    ],
    "a": 0
  },



  {
    "q": "AnR1. En JSON, ¿qué valor mostraría la consola si ejecutamos este código: console.log(4 * 3 ** 2)?",
    "o": [
      "a) 36",
      "b) -1",
      "c) 24",
      "d) Null"
    ],
    "a": -1
  },
  {
    "q": "R2. ¿Qué característica o atributo de seguridad de las cookies, permite que el navegador solo envíe la cookie al servidor si ésta se originó en el mismo sitio web al que estamos intentando contactar?",
    "o": [
      "a) Domain",
      "b) SameSite",
      "c) Secure",
      "d) HttpOnly"
    ],
    "a": 1
  },
  {
    "q": "R3. En PHP, señale qué variable de entorno se puede usar para almacenar datos del inicio de sesión de un usuario:",
    "o": [
      "a) $_SESSION",
      "b) $SESSION",
      "c) $_GLOBAL",
      "d) $GLOBAL"
    ],
    "a": 0
  },
  {
    "q": "R4. ¿Qué conjunto de herramientas de presentación y comportamiento ofrece componentes para trabajar en la parte dinámica del frontal web HTML?",
    "o": [
      "a) NumPy",
      "b) ActiveMQ",
      "c) Bootstrap",
      "d) TensorFlow"
    ],
    "a": 2
  },
  {
    "q": "R5. ¿Qué método estático usaría para convertir una cadena JSON en un valor u objeto javascript?:",
    "o": [
      "a) JSON.parse()",
      "b) JSON.stringify()",
      "c) let obj = JSON",
      "d) let obj = New JSON"
    ],
    "a": 0
  }
];