


const supuesto1 = [
  {
    type: "info",
    title: "Desarrollo y base de datos",
    content: "El organismo en el que usted presta servicios es el órgano competente para la concesión de unas becas para personas opositoras y, por tanto, ha surgido la necesidad de desarrollar un sistema de información que cubra todas las fases que se producen en la concesión de las becas. A continuación, se expone parte del modelo de datos del sistema, donde los atributos señalados en negrita son claves primarias y los señalados en cursiva, claves foráneas. El sistema, en su parte frontend, permitirá la firma y presentación de solicitudes, subsanaciones y alegaciones por parte de los interesados una vez se autentiquen. También permitirá la descarga de los distintos listados que se publiquen por parte de los empleados públicos del organismo que tramita estas becas. Por otra parte, el backend dará el servicio necesario al frontend y, además, permitirá a los empleados públicos del organismo, desde una aplicación de gestión, visualizar la información y documentación de las solicitudes, subsanaciones y alegaciones presentadas, así como la publicación de los listados mencionados anteriormente. Para el desarrollo del frontend se utilizará un framework de desarrollo web con JavaScript, HTML5 y CSS3, mientras que el backend podrá desarrollarse con .NET o Java, dependiendo de la experiencia y conocimientos de los desarrolladores del organismo. También se ha decidido usar GitHub (plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git) para poder compartir el trabajo entre los desarrolladores en la cual se puede almacenar, compartir y trabajar de forma conjunta en el código. De esta forma se permite seguir y administrar los cambios en el código a lo largo del tiempo. Adicionalmente, se utilizará un gestor documental para la gestión de la documentación aportada en cada uno de los trámites por los interesados, así como los respectivos servicios del Catálogo de Servicios de Administración Digital que puedan reutilizarse.",
    img:"./examenes/5/captura.jpg"
  },
  {
    "q": "1. ¿Qué elemento HTML utilizaría para impedir que el e-mail exceda los 100 caracteres cuando el interesado lo cumplimente?",
    "o": [
      "a) < input type='email' id='email' name='email' size='100'>",
      "b) < input type='email' id='email' name='email' max='100'>",
      "c) < input type='email' id='email' name='email' maxlength='100'>",
      "d) < input type='email' id='email' name='email' length='100'>"
    ],
    "a": 2
  },
  {
    "q": "2. ¿Qué ORM podría utilizar, en función de la solución de backend escogida?",
    "o": [
      "a) JPA en .NET e Hibernate en Java.",
      "b) Hibernate en .NET y Entity Framework en Java.",
      "c) Entity Framework en .NET e Hibernate en Java.",
      "d) Spring Data en .NET e Hibernate en Java."
    ],
    "a": 2
  },
  {
    "q": "3. ¿Qué sentencia habría que ejecutar si se quiere añadir un nuevo registro a la tabla “CuerpoBecado”?",
    "o": [
      "a) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI, 'Técnico Auxiliar de Informática');",
      "b) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES (TAI, Técnico Auxiliar de Informática);",
      "c) INSERT TO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');",
      "d) INSERT INTO CuerpoBecado (Codigo, Denominacion) VALUES ('TAI', 'Técnico Auxiliar de Informática');"
    ],
    "a": 3
  },
  {
    "q": "4. ¿Qué tipo de correspondencia hay entre las tablas “SolicitudBeca” y “FicheroAdjunto”?",
    "o": [
      "a) Un registro de SolicitudBeca puede tener N registros de FicheroAdjunto.",
      "b) Un registro de SolicitudBeca puede tener como máximo un registro de FicheroAdjunto.",
      "c) N registros de SolicitudBeca pueden tener M registros de FicheroAdjunto.",
      "d) Un registro de SolicitudBeca puede tener cero o como máximo un registro de FicheroAdjunto."
    ],
    "a": 0
  },
  {
    "q": "5. A este sistema le es de aplicación la normativa vigente de accesibilidad de sitios web. ¿Qué herramienta automatizada utilizaría para probar que la aplicación cumple con los estándares de accesibilidad?",
    "o": [
      "a) QualWeb.",
      "b) Equal Automatic Checker.",
      "c) AccSite.",
      "d) Shovel."
    ],
    "a": 0
  },
  {
    "q": "6. El formulario de solicitud sera extenso y tendra muchas consultas de datos. ¿Que utilizaria para renderizar la pagina en el servidor?",
    "o": [
      "a) Server Sent Events.",
      "b) Ajax.",
      "c) WebSocket.",
      "d) Server Side Rendering."
    ],
    "a": 3
  },
  {
    "q": "7. El proceso de presentación de solicitud implica la autenticación del usuario, la firma de la solicitud, el guardado en base de datos, la generación de un asiento registral y la generación de un justificante de presentación. ¿Qué diagrama UML utilizaría para representar las acciones implicadas en este flujo?",
    "o": [
      "a) Diagrama de paquetes.",
      "b) Diagrama de objetos.",
      "c) Diagrama de secuencia.",
      "d) Diagrama de Entidad/Relación."
    ],
    "a": 2
  },
  {
    "q": "8. En caso de utilizar Java para el backend, ¿qué tecnología puede utilizar para generar un cliente de servicios web?",
    "o": [
      "a) Apache Flink.",
      "b) Apache Xalan.",
      "c) Apache Xerces.",
      "d) Apache CXF."
    ],
    "a": 3
  },
  {
    "q": "9. En un entorno de desarrollo Java, ¿qué utilizaría para mapear elementos XML a clases?",
    "o": [
      "a) JAXB.",
      "b) JPA.",
      "c) JAXR.",
      "d) JAX-RS."
    ],
    "a": 0
  },
  {
    "q": "10. Está escogiendo herramientas que le permitan analizar y mejorar la calidad del código. ¿Cuál de las siguientes NO le será de ayuda?",
    "o": [
      "a) SonarQube.",
      "b) Un linter de JavaScript.",
      "c) PMD.",
      "d) Mercurial."
    ],
    "a": 3
  },
  {
    "q": "11. Necesita controlar el plazo de presentación de solicitudes. Suponiendo que utiliza Java en el backend, ¿qué clase nativa de Java puede utilizar para trabajar con una fecha y hora simultáneamente?",
    "o": [
      "a) LocalDateTime.",
      "b) LocalDate.",
      "c) LocalTime.",
      "d) OffsetTime."
    ],
    "a": 0
  },
  {
    "q": "12. Para que la aplicación de gestión pueda interactuar con esta aplicación, se va a exponer una capa de servicios web. ¿Cuál de las siguientes opciones NO es válida para documentar dichos servicios?",
    "o": [
      "a) RAML.",
      "b) REST.",
      "c) WSDL.",
      "d) OpenAPI/Swagger."
    ],
    "a": 1
  },
  {
    "q": "13. Se desea añadir una tabla “Subsanacion” con las columnas numéricas IdSubsanacion e IdSolicitudBeca y la columna alfanumérica de 2000 caracteres TextoFundamento. ¿Cuál de las siguientes sentencias sería la correcta?",
    "o": [
      "a) CREATE TABLE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
      "b) CREATE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
      "c) CREATE NEW TABLE Subsanacion (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));",
      "d) CREATE TABLE Subsanacion AS (IdSubsanacion bigint, IdSolicitudBeca bigint, TextoFundamento varchar(2000));"
    ],
    "a": 0
  },
  {
    "q": "14. Se espera un alto volumen de concurrencia en el sistema. ¿Qué nivel de aislamiento de base de datos debería configurar para que no se produzcan lecturas sucias ni lecturas no repetibles, pero sí lecturas fantasmas?",
    "o": [
      "a) Serializable.",
      "b) Read committed.",
      "c) Read uncommited.",
      "d) Repeatable read."
    ],
    "a": 3
  },
  {
    "q": "15. Se ha determinado que es necesaria la integración de la aplicación con GEISER, cuyos servicios web son de naturaleza SOAP. ¿Con qué firmará las peticiones generadas por la aplicación?",
    "o": [
      "a) WS-Security.",
      "b) SAML.",
      "c) JWT.",
      "d) XML-Encryption."
    ],
    "a": 0
  },
  {
    "q": "16. Se quiere utilizar la librería iText de .NET para generar un documento PDF que sirva como justificante de presentación al interesado. ¿Con qué comando instalaría el paquete NuGet?",
    "o": [
      "a) dotnet add package iText.",
      "b) dotnet install package iText.",
      "c) dotnet add iText.",
      "d) dotnet install iText."
    ],
    "a": 0
  },
  {
    "q": "17. Según “Técnicas y Practicas” de Métrica v3, si se quisiera optimizar el modelo físico de datos para reducir o simplificar el número de accesos a la base de datos, ¿cuál de las siguientes acciones se aplicaría?",
    "o": [
      "a) Combinar entidades si los accesos son frecuentes en transacciones distintas.",
      "b) Eliminar entidades.",
      "c) Introducir elementos redundantes.",
      "d) Normalizar las tablas en Forma Normal de Boyce-Codd (FNBC)."
    ],
    "a": 2
  },
  {
    "q": "18. Suponiendo que se utilizara la metodología ágil SCRUM, si durante un sprint, se da cuenta de que se está aplicando una mala práctica que puede enlentecer el proyecto, ¿en qué reunión comentará esa mala práctica, para buscar la mejora continua y evitar aplicarla en los siguientes sprints?",
    "o": [
      "a) En la Daily Scrum.",
      "b) En la Sprint Retrospective.",
      "c) En la Sprint Planning.",
      "d) En la Sprint Review."
    ],
    "a": 1
  },
  {
    "q": "19. También el sistema se integrará con la PID (Plataforma de Intermediación de Datos) cuya plataforma actual se define como una arquitectura orientada a servicios (SOA). ¿Cuáles son los componentes principales de esta arquitectura?",
    "o": [
      "a) Servicio, Proveedor de servicios, Consumidor de servicios y Orquestador de servicios.",
      "b) Servicio, Proveedor de servicios, Consumidor de servicios y Depurador de servicios.",
      "c) Servicio, Proveedor de servicios, Consumidor de servicios y Comparador de servicios.",
      "d) Servicio, Proveedor de servicios, Consumidor de servicios y Registro de servicios."
    ],
    "a": 3
  },
  {
    "q": "20. En caso de utilizar el lenguaje C#, ¿cuál de las siguientes sintaxis utilizaría para definir la opcionalidad de un tipo de dato?",
    "o": [
      "a) int? Telefono",
      "b) int|null Telefono",
      "c) int:null Telefono",
      "d) int ?? Telefono"
    ],
    "a": 0
  },



  {
    "q": "R1. Para diseñar el estilo de los campos de entrada obligatorios del formulario de solicitud se va a hacer uso del siguiente selector CSS: “input:required”. ¿Cuál es su especificidad?",
    "o": ["a) 1-1-0.", "b) 0-1-1.", "c) 1-0-1.", "d) 1-0-0."],
    "a": 1
  },
  {
    "q": "R2. Se quiere facilitar el uso de herramientas de asistencia en la página. ¿Qué atributo utilizaría para indicar que un elemento se actualizará?",
    "o": ["a) aria-live.", "b) aria-cheked.", "c) aria-flowto.", "d) aria-valuenow."],
    "a": 0
  },
  {
    "q": "R3. Para resolver una incidencia, necesita saber qué ficheros adjuntos de la solicitud del interesado con DNI 00000000T para el año 2024 no son PDF. ¿Cómo los obtendría?",
    "o": [
      "a) SELECT * FROM FicheroAdjunto WHERE Denominacion LIKE '%.pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado WHERE DocumentoIdentidad = '00000000T'));",
      "b) SELECT * FROM FicheroAdjunto WHERE Denominacion NOT LIKE '%.pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado FROM Interesado));",
      "c) SELECT * FROM FicheroAdjunto WHERE Denominacion NOT LIKE '%.pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado FROM Interesado WHERE DocumentoIdentidad = '00000000T'))",
      "d) SELECT * FROM FicheroAdjunto WHERE Denominacion NOT LIKE 'pdf' AND IdSolicitudBeca = (SELECT IdSolicitudBeca FROM SolicitudBeca WHERE AñoConvocatoria = 2024 AND IdInteresado = (SELECT IdInteresado FROM Interesado WHERE DocumentoIdentidad = '00000000T'));"
    ],
    "a": 2
  },
  {
    "q": "R4. ¿Qué tendrá que configurar en el backend si quiere restringir que las únicas peticiones HTTP de origen cruzado iniciadas desde scripts que se acepten procedan del frontend?",
    "o": ["a) HSTS.", "b) CSP.", "c) TLS.", "d) CORS."],
    "a": 3
  },
  {
    "q": "R5. Quiere facilitar la incorporación de otros desarrolladores, va a crear un fichero en el que incluirá el propósito del proyecto y cómo arrancarlo localmente. Esa información se incluirá en el fichero:",
    "o": ["a) CODEOWNERS.", "b) README.MD.", "c) LICENSE.", "d) CITATION."],
    "a": 1
  }
];