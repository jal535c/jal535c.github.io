

const supuesto1 = [
  {
    type: "info",
    title: "Red y sistemas",
    content: "El Ministerio de Educación, Formación Profesional y Deportes tiene una red asignada en el Plan de Direccionamiento de la AGE 10.9.0.0/16 y ha creado un organismo para la enseñanza online de formadores, OEOF (en adelante nos referiremos en este supuesto sólo como “organismo”), al que le ha correspondido la última de las subredes de las 16 en las que se ha dividido la red ministerial. El sistema de enseñanza online de formadores se fundamenta en un servidor de formación accesible también desde Internet en la URL https://www.profesores.es. Los servidores de este sistema (web, http, DNS, DHCP, LDAP), se van a instalar con sistema operativo Linux Ubuntu. El portal web está montado usando Apache Tomcat. El certificado del portal (SSL) estará asociado al dominio profesores.es. Para poder gestionar el correo de los profesores, se ha instalado un servidor de correo con tecnología Postfix. Los DNS se han instalado usando el software BIND así como la asignación dinámica de direcciones IP mediante DHCP. Hay un servidor llamado BIBLIOTECA que contiene un compendio de documentos e información de utilidad para los profesores. El acceso está permitido por RDP. En los elementos de configuración está permitido el acceso remoto para todos los usuarios que en el Directorio Activo estén en el Grupo de Profesores. El resto no podrán conectarse. No hay elementos de red que impidan la conexión libre por el puerto RDP 389 a dicho servidor, desde su misma VLAN. La base de datos de la biblioteca es MySQL. Además, sobre servidores Ubuntu, se han instalado herramientas de detección de vulnerabilidades (Tenable Nessus y Nmap) y de monitorización de sistemas y de aplicaciones web (Nagios). Los usuarios de la red (profesores) usan escritorios virtuales. Los switches para configurar las VLANs son CISCO (usan sistema operativo Cisco IOS). El CPD principal del organismo tiene un respaldo en un CPD secundario, pero no está configurado como activo-activo y los cambios de los servicios tienen que pasarse manualmente. Tiene redundancia de componentes y de suministro eléctrico y de red. El CPD es TIER III. Salvo que se indique lo contrario en el enunciado, se supone que usted posee permisos de administrador."
  },
  
  {
    "q": "1. ¿Cuántas direcciones hay disponibles para hosts en la subred del organismo?",
    "o": ["a) 4094", "b) 65534", "c) 4096", "d) 65536"],
    "a": 2
  },
  {
    "q": "2. Al arrancar el servidor donde se aloja la web de profesores, aparecen errores en la partición sda8. ¿Qué comando hay que usar para reparar de forma automática los errores en el sistema de ficheros correspondiente, que no ha podido montarse?",
    "o": ["a) mount –T /dev/sda8", "b) fsck -y /dev/sda8", "c) fsck -m /dev/sda8", "d) checkdisk /dev/sda8"],
    "a": 2
  },
  {
    "q": "3. Analizando la seguridad del sistema, surge la duda de si abrir o no el puerto 80 en un servidor web expuesto mediante HTTPS. El Centro Criptológico Nacional recomienda:",
    "o": [
      "a) Exhibir una web estática en el puerto 80 indicando que esa no es la web actual.",
      "b) Cambiar el puerto HTTPS al 8892.",
      "c) Utilizar un analizador de peticiones en las cabeceras HTTP en el puerto 80.",
      "d) Disponer del puerto TCP/80, configurando el servidor web para que lleve a cabo una redirección automática de HTTP a HTTPS."
    ],
    "a": 3
  },
  {
    "q": "4. El CPD donde está alojado el sistema tiene una puerta cuyo control de acceso es con tarjeta inteligente y PIN... alguien no autorizado había entrado esperando agazapado a que alguien autorizado entrase... Este incidente de ingeniería social en seguridad física se conoce con el nombre de:",
    "o": ["a) Tailgating o piggybacking.", "b) Quid pro quo.", "c) Pretexto.", "d) Disrupción."],
    "a": 0
  },
  {
    "q": "5. El organismo tiene, para controlar la seguridad física del CPD, un circuito cerrado de televisión con cámaras que usa una red coaxial y se necesita interconectar esta red a la red local Ethernet para poder monitorizarlas. ¿Con qué dispositivo de red puede hacerlo?",
    "o": ["a) Un cortafuegos (firewall).", "b) Una pasarela (gateway).", "c) Un conmutador (switch).", "d) Un repetidor (repeater)."],
    "a": 0
  },
  {
    "q": "6. En el sistema se utilizan los protocolos DNS y FTP seguro. De acuerdo con el modelo TCP/IP, estos protocolos se diferencian en que:",
    "o": [
      "a) DNS es un protocolo de usuario y FTP es un protocolo de soporte.",
      "b) DNS es siempre un protocolo orientado a la conexión mientras que FTP no.",
      "c) No existe diferencia entre ambos protocolos, ambos son protocolos de soporte.",
      "d) FTP es un protocolo de usuario y DNS es un protocolo de soporte."
    ],
    "a": 3
  },
  {
    "q": "7. ¿Qué función realizaría en el switch el comando: Switch(config-if)# switchport access vlan 1?",
    "o": [
      "a) Asignar un puerto a la VLAN 1.",
      "b) Asignar el puerto 1 del switch a la VLAN donde estamos situados en la consola del switch.",
      "c) Visualizar todos los hosts asignados a la VLAN 1.",
      "d) Asignar todos los hosts conectados a cualquier puerto del switch a la VLAN 1."
    ],
    "a": 2
  },
  {
    "q": "8. La base de datos se ha corrompido y además, los usuarios no pueden acceder a la información... este incidente, ¿a qué dimensión o dimensiones de la seguridad afecta?",
    "o": [
      "a) A la disponibilidad... y la integridad...",
      "b) A la confidencialidad...",
      "c) Sólo a la disponibilidad...",
      "d) A la trazabilidad, porque no podremos averiguar lo que ha pasado por mucho que nos esforcemos, la seguridad es así."
    ],
    "a": 3
  },
  {
    "q": "9. La red de área local está implementada con Gigabit Ethernet y, al conectar un nuevo dispositivo a la red, en su tarjeta, parpadea una luz de color naranja. ¿A qué puede deberse?",
    "o": [
      "a) A que está mal configurada la VLAN donde está ubicado el dispositivo.",
      "b) A que la tarjeta de red del dispositivo transmite a menor velocidad de la que permite la red.",
      "c) A que la tarjeta de red está estropeada...",
      "d) A que el cable del dispositivo es coaxial y no Ethernet."
    ],
    "a": 0
  },
  {
    "q": "10. Nos anuncian que hay una vulnerabilidad que afecta a una determinada versión del kernel de Linux Ubuntu. ¿Con qué comando podemos saber qué versión del kernel tiene nuestro sistema operativo Ubuntu?",
    "o": ["a) sudo dpkg -i linux*.deb", "b) uname -r", "c) uname -o", "d) kexec -l"],
    "a": 3
  },
  {
    "q": "11. Para descargar algunos ficheros del servidor BIBLIOTECA, los administradores están sopesando entre el uso de SFTP y FTPS. Indique, de las siguientes afirmaciones, la INCORRECTA:",
    "o": [
      "a) SFTP usa típicamente el puerto 22 de SSH mientras que FTPS usa el puerto en el que tengamos definido el protocolo SSL/TLS.",
      "b) SFTP usa autenticación con certificado (clave pública) mientras que FTPS usa autenticación con usuario y contraseña.",
      "c) FTPS usa dos puertos, uno para los comandos y otro para descargarse los datos mientras que SFTP usa el mismo puerto para ambas tareas.",
      "d) FTPS no contiene comandos estandarizados para manipular directorios o listar atributos, mientras que SFTP sí."
    ],
    "a": 0
  },
  {
    "q": "12. ...se ha instalado en los PC de los profesores, la solución del CCN, CLAUDIA. ¿Cómo define el Centro Criptológico Nacional una APT?",
    "o": [
      "a) Es un tipo de ransomware como, por ejemplo, WannaCry...",
      "b) Es un ataque de suplantación de identidad de un usuario corriente...",
      "c) Es un ataque selectivo de ciberespionaje o cibersabotaje llevado a cabo bajo el auspicio o la dirección de un país u organización adversaria...",
      "d) Es un ataque masivo a una organización ocurrido por un fallo que no se había advertido..."
    ],
    "a": 1
  },
  {
    "q": "13. Para mejorar la escalabilidad del sistema, está estudiando implantar una arquitectura de microservicios con Kubernetes. ¿Qué protocolos para servicios pueden utilizarse con Kubernetes?",
    "o": ["a) SCTP, TCP (por defecto) y UDP.", "b) HTTP (por defecto), HTTPS y FTP.", "c) SSH, SFTP (por defecto) y UDP.", "d) UDP (por defecto) y TCP."],
    "a": 0
  },
  {
    "q": "14. Para poder atender las llamadas de las guardias de sistemas, se han comprado veinte móviles. Su responsable le pide realizar el enrolamiento de estos móviles, pero, ¿en qué consiste esta tarea?",
    "o": [
      "a) Emparejar... a cada usuario con su móvil.",
      "b) Dar de alta en una base de datos de administración todos los dispositivos móviles.",
      "c) Insertar la tarjeta SIM correspondiente a cada móvil.",
      "d) Formatear a fábrica todos los dispositivos móviles."
    ],
    "a": 3
  },
  {
    "q": "15. Se está instalando la nueva climatización del CPD y se plantea utilizar una toma derivada de la climatización del resto del edificio. ¿Cuál es la razón principal por la que NO se aconseja hacer eso?",
    "o": [
      "a) Porque la humedad recomendada para un CPD es mucho menor...",
      "b) Porque la temperatura recomendada para un CPD es mucho mayor...",
      "c) Porque el filtro de impurezas y polvo... es mucho más sensible...",
      "d) Porque el aire acondicionado para un CPD siempre debe provenir del techo..."
    ],
    "a": 0
  },
  {
    "q": "16. Se ha descargado del sitio web del CCN-CERT una herramienta de antimalware y justo debajo aparece un hash de comprobación. ¿Qué tipo de medida de seguridad es este hash en este contexto?",
    "o": [
      "a) Una medida antimalware, pues el hash... nos sanitiza el fichero...",
      "b) Una medida para asegurar la integridad del fichero de descarga...",
      "c) El hash es la firma del CCN como autoridad de certificación de productos...",
      "d) El hash es la firma del CCN de la página web donde se presenta la herramienta..."
    ],
    "a": 0
  },
  {
    "q": "17. Se ha implantado una solución VoIP que usa el protocolo SIP pero, al establecer sesiones con usuarios de fuera del organismo, la llamada se corta o congela y después, se restablece... ¿por qué puede ser?",
    "o": [
      "a) Se están usando incorrectamente los códecs.",
      "b) La salida a Internet está empleando NAT.",
      "c) El tráfico entre origen y destino está interceptado en el cortafuegos de Internet.",
      "d) La CPU del ordenador es insuficiente."
    ],
    "a": 2
  },
  {
    "q": "18. Se ha instalado un servidor de correo con Postfix y se está decidiendo si utilizar POP3 o IMAP... ¿Cuál de las siguientes opciones es INCORRECTA?",
    "o": [
      "a) Con IMAP, los mensajes se almacenan en un servidor remoto...",
      "b) POP3 solo admite la sincronización de correo unidireccional...",
      "c) Con IMAP, el correo enviado y recibido se almacena en el servidor...",
      "d) Con POP3, si los usuarios organizan sus correos electrónicos... ya no tendrán que hacerlo en el resto de dispositivos."
    ],
    "a": 1
  },
  {
    "q": "19. Se necesita saber los usuarios que acceden a la base de datos de la biblioteca y desde qué host o IP. Para averiguarlo... ejecutará el comando:",
    "o": ["a) SELECT * FROM all_users", "b) mysql> SELECT user FROM mysql.user", "c) mysql> SELECT user,host FROM mysql.user", "d) sudo mysql -u root -p"],
    "a": 3
  },
  {
    "q": "20. Se quiere aplicar políticas de seguridad al grupo de usuarios Profesores utilizando Directorio Activo y GPOs. Una buena práctica es definir primero:",
    "o": [
      "a) Una Unidad Organizativa (OU) para el grupo de usuarios Profesores.",
      "b) Las ACLs (Access Control Lists)...",
      "c) Un nuevo bosque de Directorio Activo.",
      "d) Relaciones de confianza..."
    ],
    "a": 0
  },



  {
    "q": "R1. ...cambiar el mensaje HELO... quiere que muestre \"CORREOBIBLIOTECA\" y además, que el cambio se aplique en todos los servidores SMTP que existan... ¿Cómo lo haría?",
    "o": [
      "a) Editando el parámetro $client en el fichero /etc/postfix/main.cf...",
      "b) Accediendo al servidor SMTP y ejecutando EHLO -name CORREOBIBLIOTECA...",
      "c) Editando el parámetro smtp_helo en el fichero /etc/postfix/master.cf...",
      "d) Editando el parámetro $helo_name en /etc/postfix/main.cf..."
    ],
    "a": 1
  },
  {
    "q": "R2. ...instalar una red WiFi con protocolo WPA3-Enterprise. En este caso, para acceder a la red WiFi habrá que utilizar:",
    "o": ["a) Una contraseña de 64 bits.", "b) Una contraseña de 128 bits.", "c) Un servidor RADIUS o cualquier solución que permita EAP-TLS.", "d) Una contraseña de 192 bits..."],
    "a": 0
  },
  {
    "q": "R3. En la base de datos MySQL de Profesores, nos piden que añadamos una tabla... que se llamará \"ProfesoresIngles\" con sus nombres y apellidos... ingresaremos el comando:",
    "o": [
      "a) CREATE TABLE ProfesoresIngles (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(30), apellido1 VARCHAR(30), apellido2 VARCHAR(30));",
      "b) CREATE TABLE ProfesoresIngles KEY id, nombre, apellidos;",
      "c) CREAR TABLA ProfesoresIngles KEY apellidos, nombre;",
      "d) CREATE TABLE ProfesoresIngles (nombre, apellido);"
    ],
    "a": 2
  },
  {
    "q": "R4. ...quiere monitorizar, además, la URL de profesores (https://profesores.es)... ¿cuál comando utilizará?",
    "o": [
      "a) nagios –v /usr/local/nagios/etc/nagios.cfg",
      "b) /mnt/nagios –check",
      "c) systemctl status nagios",
      "d) https://profesores.es nagios"
    ],
    "a": 3
  },
  {
    "q": "R5. ...conexión usará TLS. Según las recomendaciones del Centro Criptológico Nacional, ¿cuál es la versión mínima y la recomendada a usar en TLS?",
    "o": [
      "a) Versión mínima 1.1 y recomendada 1.1.",
      "b) Versión mínima 1.0 y recomendada 1.1.",
      "c) Versión mínima 1.2 y recomendada 1.3.",
      "d) Versión mínima 1.1 y recomendada 1.3."
    ],
    "a": 1
  }
];