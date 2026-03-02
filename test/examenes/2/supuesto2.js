const supuesto2 = [
  {
    type: "info",
    title: "Metodologías Ágiles",
    content: "El organismo en el que usted presta servicios es el órgano competente para la concesión de unas becas para personas opositoras y, por tanto, ha surgido la necesidad de desarrollar un sistema de información que cubra todas las fases que se producen en la concesión de las becas [6]. A continuación, se expone parte del modelo de datos del sistema, donde los atributos señalados en negrita son claves primarias y los señalados en cursiva, claves foráneas [6]. El sistema, en su parte frontend, permitirá la firma y presentación de solicitudes, subsanaciones y alegaciones por parte de los interesados una vez se autentiquen [7]. También permitirá la descarga de los distintos listados que se publiquen por parte de los empleados públicos del organismo que tramita estas becas [7]. Por otra parte, el backend dará el servicio necesario al frontend y, además, permitirá a los empleados públicos del organismo, desde una aplicación de gestión, visualizar la información y documentación de las solicitudes, subsanaciones y alegaciones presentadas, así como la publicación de los listados mencionados anteriormente [7]. Para el desarrollo del frontend se utilizará un framework de desarrollo web con JavaScript, HTML5 y CSS3, mientras que el backend podrá desarrollarse con .NET o Java, dependiendo de la experiencia y conocimientos de los desarrolladores del organismo [8]. También se ha decidido usar GitHub (plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git) para poder compartir el trabajo entre los desarrolladores en la cual se puede almacenar, compartir y trabajar de forma conjunta en el código [8]. De esta forma se permite seguir y administrar los cambios en el código a lo largo del tiempo [8]. Adicionalmente, se utilizará un gestor documental para la gestión de la documentación aportada en cada uno de los trámites por los interesados, así como los respectivos servicios del Catálogo de Servicios de Administración Digital que puedan reutilizarse [9]."
  },
  {
    "q": "1. Suponiendo que se utilizara la metodología ágil SCRUM, si durante un sprint, se da cuenta de que se está aplicando una mala práctica... ¿en qué reunión comentará esa mala práctica?",
    "o": ["a) En la Daily Scrum.", "b) En la Sprint Retrospective.", "c) En la Sprint Planning.", "d) En la Sprint Review."],
    "a": 1
  },
  {
    "q": "2. Según “Técnicas y Practicas” de Métrica v3, si se quisiera optimizar el modelo físico de datos para reducir o simplificar el número de accesos... ¿cuál de las siguientes acciones se aplicaría?",
    "o": ["a) Combinar entidades si los accesos son frecuentes en transacciones distintas.", "b) Eliminar entidades.", "c) Introducir elementos redundantes.", "d) Normalizar las tablas en Forma Normal de Boyce-Codd (FNBC)."],
    "a": 2
  },
  {
    "q": "3. Se quiere facilitar el uso de herramientas de asistencia en la página. ¿Qué atributo utilizaría para indicar que un elemento se actualizará?",
    "o": ["a) aria-live.", "b) aria-cheked.", "c) aria-flowto.", "d) aria-valuenow."],
    "a": 0
  },
  {
    "q": "4. Se ha determinado que es necesaria la integración de la aplicación con GEISER, cuyos servicios web son de naturaleza SOAP. ¿Con qué firmará las peticiones generadas por la aplicación?",
    "o": ["a) WS-Security.", "b) SAML.", "c) JWT.", "d) XML-Encryption."],
    "a": 0
  },
  {
    "q": "5. Para que la aplicación de gestión pueda interactuar con esta aplicación, se va a exponer una capa de servicios web. ¿Cuál de las siguientes opciones NO es válida para documentar dichos servicios?",
    "o": ["a) RAML.", "b) REST.", "c) WSDL.", "d) OpenAPI/Swagger."],
    "a": 1
  },
  {
    "q": "6. Necesita controlar el plazo de presentación de solicitudes. Suponiendo que utiliza Java en el backend, ¿qué clase nativa de Java puede utilizar para trabajar con una fecha y hora simultáneamente?",
    "o": ["a) LocalDateTime.", "b) LocalDate.", "c) LocalTime.", "d) OffsetTime."],
    "a": 0
  },
  {
    "q": "7. El proceso de presentación de solicitud implica la autenticación del usuario, la firma de la solicitud, el guardado en base de datos, la generación de un asiento registral y la generación de un justificante de presentación. ¿Qué diagrama UML utilizaría para representar las acciones implicadas en este flujo?",
    "o": ["a) Diagrama de paquetes.", "b) Diagrama de objetos.", "c) Diagrama de secuencia.", "d) Diagrama de Entidad/Relación."],
    "a": 2
  },
  {
    "q": "8. A este sistema le es de aplicación la normativa vigente de accesibilidad de sitios web. ¿Qué herramienta automatizada utilizaría para probar que la aplicación cumple con los estándares de accesibilidad?",
    "o": ["a) QualWeb.", "b) Equal Automatic Checker.", "c) AccSite.", "d) Shovel."],
    "a": 0
  },
  {
    "q": "9. ¿Qué tipo de correspondencia hay entre las tablas “SolicitudBeca” y “FicheroAdjunto”?",
    "o": [
      "a) Un registro de SolicitudBeca puede tener N registros de FicheroAdjunto.",
      "b) Un registro de SolicitudBeca puede tener como máximo un registro de FicheroAdjunto.",
      "c) N registros de SolicitudBeca pueden tener M registros de FicheroAdjunto.",
      "d) Un registro de SolicitudBeca puede tener cero o como máximo un registro de FicheroAdjunto."
    ],
    "a": 0
  },
  {
    "q": "10. ¿Qué sentencia habría que ejecutar si se quiere añadir un nuevo registro a la tabla “CuerpoBecado”?",
    "o": [
      "a) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI, 'Técnico Auxiliar de Informática');",
      "b) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES (TAI, Técnico Auxiliar de Informática);",
      "c) INSERT TO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');",
      "d) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');"
    ],
    "a": 3
  },
  {
    "q": "11. ¿Qué ORM podría utilizar, en función de la solución de backend escogida?",
    "o": [
      "a) JPA en .NET e Hibernate en Java.",
      "b) Hibernate en .NET y Entity Framework en Java.",
      "c) Entity Framework en .NET e Hibernate en Java.",
      "d) Spring Data en .NET e Hibernate en Java."
    ],
    "a": 2
  },
  {
    "q": "12. ¿Qué elemento HTML utilizaría para impedir que el e-mail exceda los 100 caracteres cuando el interesado lo cumplimente?",
    "o": [
      "a) <input type=''email'' id=''email'' name=''email'' size=''100''>",
      "b) <input type=''email'' id=''email'' name=''email'' max=''100''>",
      "c) <input type=''email'' id=''email'' name=''email'' maxlength=''100''>",
      "d) <input type=''email'' id=''email'' name=''email'' length=''100''>"
    ],
    "a": 2
  },
  {
    "q": "R1 (Reserva). Quiere facilitar la incorporación de otros desarrolladores... va a crear un fichero en el que incluirá el propósito del proyecto y cómo arrancarlo localmente. Esa información se incluirá en el fichero:",
    "o": ["a) CODEOWNERS.", "b) README.MD.", "c) LICENSE.", "d) CITATION."],
    "a": 1
  },
  {
    "q": "R2 (Reserva). Está escogiendo herramientas que le permitan analizar y mejorar la calidad del código. ¿Cuál de las siguientes NO le será de ayuda?",
    "o": ["a) SonarQube.", "b) Un linter de JavaScript.", "c) PMD.", "d) Mercurial."],
    "a": 3
  },
  {
    "q": "R3 (Reserva). El sistema se integrará con Cl@ve... Cl@ve utiliza el estándar abierto SAML2... ¿Cuál de las siguientes afirmaciones sobre XML Schema (XSD) es correcta?",
    "o": [
      "a) Un XML Schema (XSD) no puede definir tipos de datos personalizados.",
      "b) Un XML Schema (XSD) puede definir restricciones sobre los valores de los elementos y atributos.",
      "c) Un XML Schema (XSD) solo puede ser utilizado para validar documentos XML que no contienen espacios de nombres.",
      "d) Un XML Schema (XSD) no puede ser referenciado desde otro XML Schema."
    ],
    "a": 1
  }
];