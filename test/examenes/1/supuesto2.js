const supuesto2 = [
  {
    type: "info",
    title: "Modelo de datos de la aplicación",
    content: "El organismo en el que usted presta servicios es el órgano competente para la concesión de unas becas para personas opositoras y, por tanto, ha surgido la necesidad de desarrollar un sistema de información que cubra todas las fases que se producen en la concesión de las becas [6]. A continuación, se expone parte del modelo de datos del sistema, donde los atributos señalados en negrita son claves primarias y los señalados en cursiva, claves foráneas [6]. El sistema, en su parte frontend, permitirá la firma y presentación de solicitudes, subsanaciones y alegaciones por parte de los interesados una vez se autentiquen [6]. También permitirá la descarga de los distintos listados que se publiquen por parte de los empleados públicos del organismo que tramita estas becas [6]. Por otra parte, el backend dará el servicio necesario al frontend y, además, permitirá a los empleados públicos del organismo, desde una aplicación de gestión, visualizar la información y documentación de las solicitudes, subsanaciones y alegaciones presentadas, así como la publicación de los listados mencionados anteriormente [7]. Para el desarrollo del frontend se utilizará un framework de desarrollo web con JavaScript, HTML5 y CSS3, mientras que el backend podrá desarrollarse con .NET o Java, dependiendo de la experiencia y conocimientos de los desarrolladores del organismo [7]. También se ha decidido usar GitHub (plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git) para poder compartir el trabajo entre los desarrolladores en la cual se puede almacenar, compartir y trabajar de forma conjunta en el código [8]. De esta forma se permite seguir y administrar los cambios en el código a lo largo del tiempo [8]. Adicionalmente, se utilizará un gestor documental para la gestión de la documentación aportada en cada uno de los trámites por los interesados, así como los respectivos servicios del Catálogo de Servicios de Administración Digital que puedan reutilizarse [8]."
  },
  {
    "q": "1. ¿Qué tipo de correspondencia hay entre las tablas “SolicitudBeca” y “FicheroAdjunto”?",
    "o": [
      "Un registro de SolicitudBeca puede tener N registros de FicheroAdjunto.",
      "Un registro de SolicitudBeca puede tener como máximo un registro de FicheroAdjunto.",
      "N registros de SolicitudBeca pueden tener M registros de FicheroAdjunto.",
      "Un registro de SolicitudBeca puede tener cero o como máximo un registro de FicheroAdjunto."
    ],
    "a": 0
  },
  {
    "q": "2. ¿Qué elemento HTML utilizaría para impedir que el e-mail exceda los 100 caracteres cuando el interesado lo cumplimente?",
    "o": [
      "<input type=''email'' id=''email'' name=''email'' size=''100''>",
      "<input type=''email'' id=''email'' name=''email'' max=''100''>",
      "<input type=''email'' id=''email'' name=''email'' maxlength=''100''>",
      "<input type=''email'' id=''email'' name=''email'' length=''100''>"
    ],
    "a": 2
  },
  {
    "q": "3. ¿Qué ORM podría utilizar, en función de la solución de backend escogida?",
    "o": [
      "JPA en .NET e Hibernate en Java.",
      "Hibernate en .NET y Entity Framework en Java.",
      "Entity Framework en .NET e Hibernate en Java.",
      "Spring Data en .NET e Hibernate en Java."
    ],
    "a": 2
  },
  {
    "q": "4. ¿Qué sentencia habría que ejecutar si se quiere añadir un nuevo registro a la tabla “CuerpoBecado”?",
    "o": [
      "INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI, 'Técnico Auxiliar de Informática');",
      "INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES (TAI, Técnico Auxiliar de Informática);",
      "INSERT TO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');",
      "INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');"
    ],
    "a": 3
  },
  {
    "q": "5. ¿Cuál de las siguientes herramientas de análisis dinámico de software (DAST) utilizaría para probar que la aplicación cumple con los estándares de accesibilidad?",
    "o": [
      "QualWeb.",
      "Equal Automatic Checker.",
      "AccSite.",
      "Shovel."
    ],
    "a": 0
  },
  {
    "q": "6. El proceso de presentación de solicitud implica la autenticación del usuario, la firma de la solicitud, el guardado en base de datos, la generación de un asiento registral y la generación de un justificante de presentación. ¿Qué diagrama UML utilizaría para representar las acciones implicadas en este flujo?",
    "o": [
      "Diagrama de paquetes.",
      "Diagrama de objetos.",
      "Diagrama de secuencia.",
      "Diagrama de Entidad/Relación."
    ],
    "a": 2
  },
  {
    "q": "7. Necesita controlar el plazo de presentación de solicitudes. Suponiendo que utiliza Java en el backend, ¿qué clase nativa de Java puede utilizar para trabajar con una fecha y hora simultáneamente?",
    "o": [
      "LocalDateTime.",
      "LocalDate.",
      "LocalTime.",
      "OffsetTime."
    ],
    "a": 0
  },
  {
    "q": "8. Para que la aplicación de gestión pueda interactuar con esta aplicación, se va a exponer una capa de servicios web. ¿Cuál de las siguientes opciones NO es válida para documentar dichos servicios?",
    "o": [
      "RAML.",
      "REST.",
      "WSDL.",
      "OpenAPI/Swagger."
    ],
    "a": 1
  },
  {
    "q": "9. Se ha determinado que es necesaria la integración de la aplicación con GEISER, cuyos servicios web son de naturaleza SOAP. ¿Con qué firmará las peticiones generadas por la aplicación?",
    "o": [
      "WS-Security.",
      "SAML.",
      "JWT.",
      "XML-Encryption."
    ],
    "a": 0
  },
  {
    "q": "10. Se quiere facilitar el uso de herramientas de asistencia en la página. ¿Qué atributo utilizaría para indicar que un elemento se actualizará?",
    "o": [
      "aria-live.",
      "aria-cheked.",
      "aria-flowto.",
      "aria-valuenow."
    ],
    "a": 0
  },
  {
    "q": "11. Según “Técnicas y Practicas” de Métrica v3, si se quisiera optimizar el modelo físico de datos para reducir o simplificar el número de accesos a la base de datos, ¿cuál de las siguientes acciones se aplicaría?",
    "o": [
      "Combinar entidades si los accesos son frecuentes en transacciones distintas.",
      "Eliminar entidades.",
      "Introducir elementos redundantes.",
      "Normalizar las tablas en Forma Normal de Boyce-Codd (FNBC)."
    ],
    "a": 2
  },
  {
    "q": "12. Suponiendo que se utilizara la metodología ágil SCRUM, si durante un sprint, se da cuenta de que se está aplicando una mala práctica que puede enlentecer el proyecto, ¿en qué reunión comentará esa mala práctica, para buscar la mejora continua y evitar aplicarla en los siguientes sprints?",
    "o": [
      "En la Daily Scrum.",
      "En la Sprint Retrospective.",
      "En la Sprint Planning.",
      "En la Sprint Review."
    ],
    "a": 1
  },
  {
    "q": "R1 (Reserva). Quiere facilitar la incorporación de otros desarrolladores al proyecto y para ello, en el repositorio de código, va a crear un fichero en el que incluirá, entre otra información, el propósito del proyecto y cómo arrancarlo localmente. Esa información se incluirá en el fichero:",
    "o": [
      "CODEOWNERS.",
      "README.MD.",
      "LICENSE.",
      "CITATION."
    ],
    "a": 1
  },
  {
    "q": "R2 (Reserva). ¿Cuál de las siguientes herramientas de análisis estático (SAST) le podría servir de ayuda?",
    "o": [
      "SonarQube.",
      "Un linter de JavaScript.",
      "PMD.",
      "Mercurial."
    ],
    "a": 3
  },
  {
    "q": "R3 (Reserva). El sistema de información a desarrollar se integrará con Cl@ve para identificar a los interesados en el procedimiento. Cl@ve utiliza el estándar abierto SAML2 para el intercambio de datos de autenticación y autorización, que está basado en XML. ¿Cuál de las siguientes afirmaciones sobre XML Schema (XSD) es correcta?",
    "o": [
      "Un XML Schema (XSD) no puede definir tipos de datos personalizados.",
      "Un XML Schema (XSD) puede definir restricciones sobre los valores de los elementos y atributos.",
      "Un XML Schema (XSD) solo puede ser utilizado para validar documentos XML que no contienen espacios de nombres.",
      "Un XML Schema (XSD) no puede ser referenciado desde otro XML Schema."
    ],
    "a": 1
  }
];