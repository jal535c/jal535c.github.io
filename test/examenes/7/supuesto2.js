const supuesto2 = [
  {
    type:"info",
    title:"info",
    content:"La Subdirección General de Informática del Organismo... ha decidido acometer un cambio de diseño en la infraestructura de la red informática... Se parte de la situación inicial donde hay una única red con el direccionamiento IP 10.20.30.0/24 donde residen: los equipos informáticos de los usuarios, las aplicaciones informáticas, las Bases de Datos Oracle y MySql, y la conexión a Internet... según el modelo Modelo A. Después de varios estudios se concluye que se debe realizar una segmentación de la red actual en cuatro subredes: PCs de usuario, Bases de Datos, Aplicaciones y DMZ (Modelo B). Se instalará una pareja de Firewalls formando un clúster... los PCs de Usuario tienen sistema operativo Windows 10 y tanto los servidores para Aplicaciones, Base de Datos y DMZ tienen sistema operativo Linux RedHat RHEL7.4",
    img:"./examenes/7/Captura2.JPG"
  },
  
  
  {
    "q": "1. En los PCs de los usuarios hay que purgar la memoria caché de la resolución DNS. ¿Cuál de los siguientes comandos habría que lanzar desde la consola de PowerShell?",
    "o": ["a) ipconfig /dnsflush", "b) ipconfig /flushdns", "c) ifconifg --erase dnscache", "d) ifconifg --clean dnscache"],
    "a": 1
  },
  {
    "q": "2. En todos los PCs de usuario existe un usuario local llamado Infocentro utilizado para labores de mantenimiento. ¿Qué comando utilizaríamos desde la línea de comandos de Windows PowerShell para ver más información sobre este usuario?",
    "o": ["a) net user Infocentro", "b) netuser Infocentro", "c) info user Infocentro", "d) infouser Infocentro"],
    "a": 0
  },
  {
    "q": "3. En el contexto de la administración del almacenamiento, ¿qué es el “Thin Provisioning”?",
    "o": [
      "a) Es un mecanismo de despliegue de discos en red para clientes ligeros.",
      "b) Es una tecnología que permite agregar discos físicos en caliente a las cabinas de la SAN.",
      "c) Es un método de virtualización de almacenamiento que permite asignar el espacio de almacenamiento de una manera flexible bajo demanda.",
      "d) Es un método por el que se asigna todo el espacio virtualizado disponible y se va a reduciendo (shrinking) a medida que el cliente lo descarta."
    ],
    "a": 2
  },
  {
    "q": "4. En uno de los servidores de la Subred de Aplicaciones del Modelo B se va a instalar un software de monitorización para Linux. Indique de entre los siguientes, cuál cumpliría esa función:",
    "o": ["a) Check_MK", "b) Reddis", "c) Jenkins", "d) Nagstamon"],
    "a": 0
  },
  {
    "q": "5. ¿Qué máscara deberá tener la red 10.20.30.0 del modelo A para que haya cuatro subredes como en el Modelo B?",
    "o": ["a) 255.255.255.194", "b) 255.255.255.192", "c) 255.255.255.196", "d) 255.255.255.190"],
    "a": 1
  },
  {
    "q": "6. Necesitamos borrar la caché de las direcciones físicas (Mac Address) en uno de los servidores que ofrece la aplicación de Intranet de la Subred de Aplicaciones del Modelo B. ¿Cuál de los siguientes comandos utilizaría?",
    "o": ["a) ip delete cache", "b) arp -d", "c) iptables -d mac", "d) ip flush"],
    "a": 1
  },
  {
    "q": "7. Si tenemos en cuenta que la primera subred para PCs de Usuario del Modelo B es la 10.20.30.0/26, ¿cuáles son las direcciones de Red y Broadcast?",
    "o": ["a) 10.20.30.0 y 10.20.30.255", "b) 10.20.30.1 y 10.20.30.62", "c) 10.20.30.0 y 10.20.30.63", "d) 10.20.30.64 y 10.20.30.127"],
    "a": 2
  },
  {
    "q": "8. [Contexto HTTPS]. ¿Cuál de las siguientes soluciones puede realizar dicha función?",
    "o": ["a) INFLUXDB", "b) GRAFANA", "c) CHECK_MK", "d) SQUID"],
    "a": 3
  },
  {
    "q": "9. Una vez implementado \"teletrabajo\" mediante VPN, se quiere dotar de mayor seguridad mediante el envío de un código por SMS al teléfono móvil del trabajador. ¿Cómo se denomina a este tipo de validación?",
    "o": ["a) Factor electrónico de autenticación.", "b) Autenticación electrónica de usuarios.", "c) Doble factor de autenticación.", "d) Factor único de autenticación."],
    "a": 2
  },
  {
    "q": "10. En la subred de DMZ del Modelo B se quiere implementar un servicio de correo seguro. Cuáles, de entre los siguientes, son los puertos seguros para los protocolos POP, SMTP e IMAP:",
    "o": [
      "a) POP:993 / SMTP:465 / IMAP:995",
      "b) POP:995 / SMTP:495 / IMAP:963",
      "c) POP:995 / SMTP:465 / IMAP:993",
      "d) POP:965 / SMTP:495 / IMAP:993"
    ],
    "a": 2
  },
  {
    "q": "11. Para la aplicacion AutoFirma 1.8.2 de las estaciones de trabajo de la organizacion, ¿qué algoritmo de huella para la firma se permite de los siguientes?",
    "o": ["a) ECDSA", "b) MD5", "c) SHA384", "d) DSA"],
    "a": 2
  },
  {
    "q": "12. En la organización se están planteando instalar puntos de acceso WiFi. ¿Cuál de estos estándares puede funcionar a 2,4 GHz, 5 GHz y 6 GHz?",
    "o": ["a) No existe la banda de los 6 GHz", "b) 802.11ax", "c) 802.11ac", "d) 802.11be"],
    "a": 1
  },
  {
    "q": "13. Desde su equipo en la subred de PCs de Usuarios del Modelo B... necesita conectarse mediante SSH y SCP. ¿Qué puerto o puertos estándares deberían tener abiertos en el firewall?",
    "o": ["a) Puerto 21 para SSH y 22 para SCP.", "b) Puerto 22 para SSH y 21 para SCP.", "c) Puerto 21 tanto para SSH como SCP.", "d) Puerto 22 tanto para SSH como SCP."],
    "a": 3
  },
  {
    "q": "14. Si hubiese instalado un IIS, ¿qué comando utilizaría para reiniciarlo?",
    "o": ["a) IIS RESET", "b) IISRESET", "c) RESET IIS", "d) RESETIIS"],
    "a": 1
  },
  {
    "q": "15. En uno de los servidores de la Subred de Aplicaciones del Modelo B se necesita realizar una captura del tráfico que pasa por la interfaz de red eth1 y guardarlo en fichero.out...",
    "o": [
      "a) snoop -d eth1 -w fichero.out",
      "b) tcpdump -i any -o fichero.out",
      "c) tcpdump -i eth1 -w fichero.out",
      "d) snoop -d any -o fichero.out"
    ],
    "a": -1
  },
  {
    "q": "16. En el servidor de la Subred de Aplicaciones... que utiliza Apache 2.4, quieren servir páginas de otros dominios. ¿Cuál de las siguientes directivas debe utilizar?",
    "o": ["a) VirtualMachine", "b) VirtualDomain", "c) VirtualHost", "d) VirtualIp"],
    "a": 2
  },
  {
    "q": "17. Se quiere crear una nueva vLAN en el organismo. ¿Qué opción de las vLAN hace que las tramas Ethernet incorporen la etiqueta \"vLAN ID\"?",
    "o": ["a) untagged", "b) tagged", "c) id", "d) trunk"],
    "a": 1
  },
  {
    "q": "18. Indique qué herramienta desarrollada por el CCN-CERT, es una plataforma de análisis avanzado de malware:",
    "o": ["a) NADA", "b) CADA", "c) ADA", "d) SADA"],
    "a": 2
  },
  {
    "q": "19. En el clúster de Firewalls del modelo B se quiere implementar un módulo de seguridad para filtrar y monitorear el tráfico HTTP... ¿Cuál de los siguientes módulos debe implementarse?",
    "o": [
      "a) WAT - Web Administration Tool",
      "b) WAF - Web Application Firewall",
      "c) VFN - Virtual Firewall Network",
      "d) WFL7 - Web Firewall Layer 7"
    ],
    "a": 1
  },
  {
    "q": "20. En la Subred de PCs de Usuario... saber la tabla de enrutamiento de los equipos. ¿Cuál de los siguientes comandos permite ver esa información?",
    "o": ["a) route show", "b) ip route ls", "c) route print", "d) ip route print"],
    "a": 2
  },


  {
    "q": "R1. ¿Qué comando muestra información del conjunto resultante de directivas (RSoP) para un usuario y equipo de destino en los equipos Windows 10...?",
    "o": ["a) gpshow", "b) gpprint", "c) gpresult", "d) gplist"],
    "a": -1
  },
  {
    "q": "R2. Una vez implementado el acceso telemático... VPN, en relación con esta tecnología, indique en qué RFC está definido el protocolo PPTP:",
    "o": ["a) RFC 2661", "b) RFC 2637", "c) RFC 1661", "d) RFC 2472"],
    "a": 1
  },
  {
    "q": "R3. Los dispositivos de interconexión... son compatibles con POE++. Señale la afirmación correcta con respecto a este término:",
    "o": [
      "a) Las siglas corresponden a Power-of-Ethernet.",
      "b) Como estándar, recibe la denominación IEEE 802.3at.",
      "c) La alimentación real recibida es de 25,50 Watts.",
      "d) Se subdivide en dos tipos: Tipo 3 y Tipo 4."
    ],
    "a": 0
  },
  {
    "q": "R4. Si fuese el motor de Base de Datos ORACLE, indique cuál de los siguientes comandos utilizaria para crear una copia de seguridad de la base de datos origen:",
    "o": ["a) RMAN", "b) DUMPALL", "c) ORACLE_BCK", "d) COPYDB"],
    "a": 2
  },
  {
    "q": "R5. Se ha decidido que la última IP válida de host para la Subred de Aplicaciones del Modelo B sea considerada como Puerta de Enlace... señale la opción correcta:",
    "o": ["a) 10.20.30.191", "b) 10.20.30.190", "c) 10.20.30.193", "d) 10.20.30.192"],
    "a": 0
  }
];