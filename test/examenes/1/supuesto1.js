const supuesto1 = [
  {
    type: "info",
    title: "Red del ministerio, y OEOF",
    content: "El Ministerio de Educación, Formación Profesional y Deportes tiene una red asignada en el Plan de Direccionamiento de la AGE 10.9.0.0/16 y ha creado un organismo para la enseñanza online de formadores, OEOF (en adelante nos referiremos en este supuesto sólo como “organismo”), al que le ha correspondido la última de las subredes de las 16 en las que se ha dividido la red ministerial [1]. El sistema de enseñanza online de formadores se fundamenta en un servidor de formación accesible también desde Internet en la URL https://www.profesores.es [2]. Los servidores de este sistema (web, http, DNS, DHCP, LDAP), se van a instalar con sistema operativo Linux Ubuntu [2]. El portal web está montado usando Apache Tomcat [2]. El certificado del portal (SSL) estará asociado al dominio profesores.es [2]. Para poder gestionar el correo de los profesores, se ha instalado un servidor de correo con tecnología Postfix [2]. Los DNS se han instalado usando el software BIND así como la asignación dinámica de direcciones IP mediante DHCP [3]. Hay un servidor llamado BIBLIOTECA que contiene un compendio de documentos e información de utilidad para los profesores [3]. El acceso está permitido por RDP [3]. En los elementos de configuración está permitido el acceso remoto para todos los usuarios que en el Directorio Activo estén en el Grupo de Profesores [3]. El resto no podrán conectarse [3]. No hay elementos de red que impidan la conexión libre por el puerto RDP 389 a dicho servidor, desde su misma VLAN [3]. La base de datos de la biblioteca es MySQL [4]. Además, sobre servidores Ubuntu, se han instalado herramientas de detección de vulnerabilidades (Tenable Nessus y Nmap) y de monitorización de sistemas y de aplicaciones web (Nagios) [4]. Los usuarios de la red (profesores) usan escritorios virtuales [4]. Los switches para configurar las VLANs son CISCO (usan sistema operativo Cisco IOS) [4]. El CPD principal del organismo tiene un respaldo en un CPD secundario, pero no está configurado como activo-activo y los cambios de los servicios tienen que pasarse manualmente [4]. Tiene redundancia de componentes y de suministro eléctrico y de red [4]. El CPD es TIER III [4]. Salvo que se indique lo contrario en el enunciado, se supone que usted posee permisos de administrador [5].",
  },
  {
    "q": "1. Nos anuncian que hay una vulnerabilidad que afecta a una determinada versión del kernel de Linux Ubuntu. ¿Con qué comando podemos saber qué versión del kernel tiene nuestro sistema?",
    "o": ["sudo dpkg -i linux*.deb", "uname -r", "uname -o", "kexec -l"],
    "a": 1
  },
  {
    "q": "2. ¿Cuántas direcciones hay disponibles para hosts en la subred del organismo?",
    "o": ["4094", "65534", "4096", "65536"],
    "a": 0
  },
  {
    "q": "3. Hace dos días, alguien no autorizado entró esperando agazapado a que alguien autorizado entrase, pasando detrás de él... Este incidente de ingeniería social se conoce como:",
    "o": ["Tailgating o piggybacking.", "Quid pro quo.", "Pretexto.", "Disrupción."],
    "a": 0
  },
  {
    "q": "4. El organismo tiene un circuito cerrado de televisión con cámaras que usa una red coaxial y se necesita interconectar esta red a la red local Ethernet. ¿Con qué dispositivo de red puede hacerlo?",
    "o": ["Un cortafuegos (firewall).", "Una pasarela (gateway).", "Un conmutador (switch).", "Un repetidor (repeater)."],
    "a": 1
  },
  {
    "q": "5. En el sistema se utilizan los protocolos DNS y FTP seguro. De acuerdo con el modelo TCP/IP, estos protocolos se diferencian en que:",
    "o": [
      "DNS es un protocolo de usuario y FTP es un protocolo de soporte.",
      "DNS es siempre un protocolo orientado a la conexión mientras que FTP no.",
      "No existe diferencia entre ambos protocolos, ambos son protocolos de soporte.",
      "FTP es un protocolo de usuario y DNS es un protocolo de soporte."
    ],
    "a": 3
  },
  {
    "q": "6. ¿Qué función realizaría en el switch el comando: Switch(config-if)# switchport access vlan 1?",
    "o": [
      "Asignar un puerto a la VLAN 1.",
      "Asignar el puerto 1 del switch a la VLAN donde estamos situados.",
      "Visualizar todos los hosts asignados a la VLAN 1.",
      "Asignar todos los hosts conectados a cualquier puerto del switch a la VLAN 1."
    ],
    "a": 0
  },
  {
    "q": "7. Para descargar algunos ficheros grandes binarios... los administradores están sopesando entre el uso de SFTP y FTPS. Indique la afirmación INCORRECTA:",
    "o": [
      "SFTP usa típicamente el puerto 22 de SSH mientras que FTPS usa el puerto definido para SSL/TLS.",
      "SFTP usa autenticación con certificado (clave pública) mientras que FTPS usa autenticación con usuario y contraseña.",
      "FTPS usa dos puertos, uno para los comandos y otro para descargarse los datos mientras que SFTP usa el mismo puerto.",
      "FTPS no contiene comandos estandarizados para manipular directorios o listar atributos, mientras que SFTP sí."
    ],
    "a": 1
  },
  {
    "q": "8. Su responsable le pide realizar el enrolamiento de veinte móviles nuevos. ¿En qué consiste esta tarea?",
    "o": [
      "Emparejar, en el sistema MDM (Mobile Device Management) de la organización, a cada usuario con su móvil.",
      "Dar de alta en una base de datos de administración todos los dispositivos móviles.",
      "Insertar la tarjeta SIM correspondiente a cada móvil.",
      "Formatear a fábrica todos los dispositivos móviles."
    ],
    "a": 0
  },
  {
    "q": "9. Se ha descargado una herramienta de antimalware y aparece un hash de comprobación. ¿Qué tipo de medida de seguridad es este hash en este contexto?",
    "o": [
      "Una medida antimalware, pues el hash nos sanitiza el fichero.",
      "Una medida para asegurar la integridad del fichero de descarga, pues si no coincide con el de la página, el fichero no sería válido.",
      "El hash es la firma del CCN como autoridad de certificación...",
      "El hash es la firma del CCN de la página web... para evitar que los hackers manipulen la página."
    ],
    "a": 1
  },
  {
    "q": "10. Se está decidiendo si utilizar POP3 o IMAP en los clientes de correo del servidor Postfix. ¿Cuál de las siguientes opciones es INCORRECTA?",
    "o": [
      "Con IMAP, los mensajes se almacenan en un servidor remoto y los usuarios pueden iniciar sesión en varios clientes.",
      "POP3 solo admite la sincronización de correo unidireccional.",
      "Con IMAP, el correo enviado y recibido se almacena en el servidor hasta que el usuario lo elimina.",
      "Con POP3, si los usuarios organizan sus correos en un dispositivo mediante carpetas, se replica la organización en el resto."
    ],
    "a": 3
  },
  {
    "q": "11. Para saber los usuarios que acceden a la base de datos MySQL de la biblioteca y desde qué host o IP, ejecutará el comando:",
    "o": ["SELECT * FROM all_users", "mysql> SELECT user FROM mysql.user", "mysql> SELECT user,host FROM mysql.user", "sudo mysql -u root -p"],
    "a": 2
  },
  {
    "q": "12. Se quiere aplicar políticas de seguridad al grupo Profesores utilizando Directorio Activo y GPOs. Una buena práctica es definir primero:",
    "o": [
      "Una Unidad Organizativa (OU) para el grupo de usuarios Profesores.",
      "Las ACLs que tendrán las GPO del grupo de usuarios Profesores.",
      "Un nuevo bosque de Directorio Activo.",
      "Relaciones de confianza entre el Directorio Activo actual y el dominio del grupo."
    ],
    "a": 0
  },
  {
    "q": "R1 (Reserva). Ha instalado el servicio Nagios y quiere comprobar que el servicio está configurado correctamente para monitorizar la URL de profesores. ¿Qué comando utilizará?",
    "o": ["nagios –v /usr/local/nagios/etc/nagios.cfg", "/mnt/nagios –check", "systemctl status nagios", "https://profesores.es nagios"],
    "a": 0
  },
  {
    "q": "R2 (Reserva). Se ha activado la navegación segura (HTTPS) para el acceso al servidor mediante TLS. ¿Cuál es la versión mínima y recomendada por el CCN?",
    "o": [
      "Versión mínima 1.1 y recomendada 1.1",
      "Versión mínima 1.0 y recomendada 1.1",
      "Versión mínima 1.2 y recomendada 1.3",
      "Versión mínima 1.1 y recomendada 1.3"
    ],
    "a": 2
  },
  {
    "q": "R3 (Reserva). En MySQL, nos piden añadir una tabla llamada 'ProfesoresIngles' con id (PK), nombre y apellidos. El comando correcto es:",
    "o": [
      "CREATE TABLE ProfesoresIngles (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(30), apellido1 VARCHAR(30), apellido2 VARCHAR(30));",
      "CREATE TABLE ProfesoresIngles KEY id, nombre, apellidos;",
      "CREAR TABLA ProfesoresIngles KEY apellidos, nombre;",
      "CREATE TABLE ProfesoresIngles (nombre, apellido);"
    ],
    "a": 0
  }
];