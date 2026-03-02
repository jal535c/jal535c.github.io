const supuesto1 = [
  {
    type: "info",
    title: "Redes y Sistemas",
    content: "El Ministerio de Educación, Formación Profesional y Deportes tiene una red asignada en el Plan de Direccionamiento de la AGE 10.9.0.0/16 y ha creado un organismo para la enseñanza online de formadores, OEOF (en adelante nos referiremos en este supuesto sólo como “organismo”), al que le ha correspondido la última de las subredes de las 16 en las que se ha dividido la red ministerial [1]. El sistema de enseñanza online de formadores se fundamenta en un servidor de formación accesible también desde Internet en la URL https://www.profesores.es [2]. Los servidores de este sistema (web, http, DNS, DHCP, LDAP), se van a instalar con sistema operativo Linux Ubuntu [2]. El portal web está montado usando Apache Tomcat [2]. El certificado del portal (SSL) estará asociado al dominio profesores.es [2]. Para poder gestionar el correo de los profesores, se ha instalado un servidor de correo con tecnología Postfix [2]. Los DNS se han instalado usando el software BIND así como la asignación dinámica de direcciones IP mediante DHCP [3]. Hay un servidor llamado BIBLIOTECA que contiene un compendio de documentos e información de utilidad para los profesores [3]. El acceso está permitido por RDP [3]. En los elementos de configuración está permitido el acceso remoto para todos los usuarios que en el Directorio Activo estén en el Grupo de Profesores [3]. El resto no podrán conectarse [3]. No hay elementos de red que impidan la conexión libre por el puerto RDP 389 a dicho servidor, desde su misma VLAN [3]. La base de datos de la biblioteca es MySQL [4]. Además, sobre servidores Ubuntu, se han instalado herramientas de detección de vulnerabilidades (Tenable Nessus y Nmap) y de monitorización de sistemas y de aplicaciones web (Nagios) [4]. Los usuarios de la red (profesores) usan escritorios virtuales [4]. Los switches para configurar las VLANs son CISCO (usan sistema operativo Cisco IOS) [4]. El CPD principal del organismo tiene un respaldo en un CPD secundario, pero no está configurado como activo-activo y los cambios de los servicios tienen que pasarse manualmente [4]. Tiene redundancia de componentes y de suministro eléctrico y de red [4]. El CPD es TIER III [4]. Salvo que se indique lo contrario en el enunciado, se supone que usted posee permisos de administrador [5].",
  },
  {
    "q": "1. Se quiere aplicar políticas de seguridad al grupo de usuarios Profesores utilizando Directorio Activo y GPOs. Una buena práctica es definir primero:",
    "o": [
      "a) Una Unidad Organizativa (OU) para el grupo de usuarios Profesores.",
      "b) Las ACLs (Access Control Lists) que tendrán las GPO del grupo de usuarios Profesores.",
      "c) Un nuevo bosque de Directorio Activo.",
      "d) Relaciones de confianza entre el Directorio Activo actual y el dominio de seguridad del grupo de usuarios Profesores."
    ],
    "a": 0
  },
  {
    "q": "2. Se necesita saber los usuarios que acceden a la base de datos de la biblioteca y desde qué host o IP. Para averiguarlo, en la consola de administración de la base de datos, ejecutará el comando:",
    "o": [
      "a) SELECT * FROM all_users",
      "b) mysql> SELECT user FROM mysql.user",
      "c) mysql> SELECT user,host FROM mysql.user",
      "d) sudo mysql -u root -p"
    ],
    "a": 2
  },
  {
    "q": "3. Se ha instalado un servidor de correo con Postfix y se está decidiendo si utilizar POP3 o IMAP en los clientes de correo. ¿Cuál de las siguientes opciones es INCORRECTA?",
    "o": [
      "a) Con IMAP, los mensajes se almacenan en un servidor remoto y los usuarios pueden iniciar sesión en varios clientes...",
      "b) POP3 solo admite la sincronización de correo unidireccional...",
      "c) Con IMAP, el correo enviado y recibido se almacena en el servidor hasta que el usuario lo elimina permanentemente.",
      "d) Con POP3, si los usuarios organizan sus correos electrónicos en un dispositivo mediante carpetas, ya no tendrán que hacerlo en el resto de dispositivos porque se replica la organización en carpetas."
    ],
    "a": 3
  },
  {
    "q": "4. Se ha descargado del sitio web del CCN-CERT una herramienta de antimalware y justo debajo aparece un hash de comprobación. ¿Qué tipo de medida de seguridad es este hash en este contexto?",
    "o": [
      "a) Una medida antimalware, pues el hash aplicado al fichero descargado nos sanitiza el fichero...",
      "b) Una medida para asegurar la integridad del fichero de descarga, pues si al calcular nosotros el hash del fichero descargado no coincide con el que nos aparece en la página del CCN, el fichero descargado no sería válido para su uso.",
      "c) El hash es la firma del CCN como autoridad de certificación de productos...",
      "d) El hash es la firma del CCN de la página web donde se presenta la herramienta..."
    ],
    "a": 1
  },
  {
    "q": "5. Para poder atender las llamadas de las guardias de sistemas, se han comprado veinte móviles. Su responsable le pide realizar el enrolamiento de estos móviles, pero, ¿en qué consiste esta tarea?",
    "o": [
      "a) Emparejar, en el sistema MDM (Mobile Device Management) de la organización, a cada usuario con su móvil.",
      "b) Dar de alta en una base de datos de administración todos los dispositivos móviles.",
      "c) Insertar la tarjeta SIM correspondiente a cada móvil.",
      "d) Formatear a fábrica todos los dispositivos móviles."
    ],
    "a": 0
  },
  {
    "q": "6. Para descargar algunos ficheros grandes binarios del servidor BIBLIOTECA, los administradores están sopesando entre el uso de SFTP y FTTPS. Indique, de las siguientes afirmaciones, la INCORRECTA:",
    "o": [
      "a) SFTP usa típicamente el puerto 22 de SSH mientras que FTPS usa el puerto en el que tengamos definido el protocolo SSL/TLS.",
      "b) SFTP usa autenticación con certificado (clave pública) mientras que FTPS usa autenticación con usuario y contraseña.",
      "c) FTPS usa dos puertos, uno para los comandos y otro para descargarse los datos mientras que SFTP usa el mismo puerto para ambas tareas.",
      "d) FTPS no contiene comandos estandarizados para manipular directorios o listar atributos, mientras que SFTP sí."
    ],
    "a": 1
  },
  {
    "q": "7. Nos anuncian que hay una vulnerabilidad que afecta a una determinada versión del kernel de Linux Ubuntu. ¿Con qué comando podemos saber qué versión del kernel tiene nuestro sistema operativo Ubuntu?",
    "o": ["a) sudo dpkg -i linux*.deb", "b) uname -r", "c) uname -o", "d) kexec -l"],
    "a": 1
  },
  {
    "q": "8. En un switch Cisco que hay en la organización, se ejecuta el comando “switchport access vlan 1”. Esto permitirá:",
    "o": [
      "a) Asignar un puerto a la VLAN 1.",
      "b) Asignar el puerto 1 del switch a la VLAN donde estamos situados en la consola del switch.",
      "c) Visualizar todos los hosts asignados a la VLAN 1.",
      "d) Asignar todos los hosts conectados a cualquier puerto del switch a la VLAN 1."
    ],
    "a": 0
  },
  {
    "q": "9. En el sistema se utilizan los protocolos DNS y FTP seguro. De acuerdo con el modelo TCP/IP, estos protocolos se diferencian en que:",
    "o": [
      "a) DNS es un protocolo de usuario y FTP es un protocolo de soporte.",
      "b) DNS es siempre un protocolo orientado a la conexión mientras que FTP no.",
      "c) No existe diferencia entre ambos protocolos, ambos son protocolos de soporte.",
      "d) FTP es un protocolo de usuario y DNS es un protocolo de soporte."
    ],
    "a": 3
  },
  {
    "q": "10. El organismo tiene, para controlar la seguridad física del CPD, un circuito cerrado de televisión con cámaras que usa una red coaxial y se necesita interconectar esta red a la red local Ethernet para poder monitorizarlas. ¿Con qué dispositivo de red puede hacerlo?",
    "o": ["a) Un cortafuegos (firewall).", "b) Una pasarela (gateway).", "c) Un conmutador (switch).", "d) Un repetidor (repeater)."],
    "a": 1
  },
  {
    "q": "11. El CPD donde está alojado el sistema tiene una puerta cuyo control de acceso es con tarjeta inteligente y PIN... Hace dos días, se supo que alguien no autorizado había entrado esperando agazapado... Este incidente se conoce con el nombre de:",
    "o": ["a) Tailgating o piggybacking.", "b) Quid pro quo.", "c) Pretexto.", "d) Disrupción."],
    "a": 0
  },
  {
    "q": "12. ¿Cuántas direcciones hay disponibles para hosts en la subred del organismo?",
    "o": ["a) 4094", "b) 65534", "c) 4096", "d) 65536"],
    "a": 0
  },
  {
    "q": "R1 (Reserva). Ha instalado el servicio Nagios... Para comprobar que este servicio está configurado correctamente utilizará el comando:",
    "o": ["a) nagios –v /usr/local/nagios/etc/nagios.cfg", "b) /mnt/nagios –check", "c) systemctl status nagios", "d) https://profesores.es nagios"],
    "a": 0
  },
  {
    "q": "R2 (Reserva). Se ha activado la navegación segura (HTTPS)... Según las recomendaciones del CCN, ¿cuál es la versión mínima y la recomendada a usar en TLS?",
    "o": [
      "a) La versión mínima aceptable es la 1.1 y se recomienda usar esa misma versión 1.1",
      "b) La versión mínima aceptable es la 1.0 y se recomienda usar 1.1",
      "c) La versión mínima aceptable es la 1.2 y se recomienda usar la 1.3",
      "d) La versión mínima aceptable es la 1.1 y se recomienda usar la 1.3"
    ],
    "a": 2
  },
  {
    "q": "R3 (Reserva). En la base de datos MySQL de Profesores, nos piden que añadamos una tabla... que se llamará “ProfesoresIngles”... ingresaremos el comando:",
    "o": [
      "a) CREATE TABLE ProfesoresIngles (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(30), apellido1 VARCHAR(30), apellido2 VARCHAR(30));",
      "b) CREATE TABLE ProfesoresIngles KEY id, nombre, apellidos;",
      "c) CREAR TABLA ProfesoresIngles KEY apellidos, nombre;",
      "d) CREATE TABLE ProfesoresIngles (nombre, apellido);"
    ],
    "a": 0
  }
];