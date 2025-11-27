Clima Latam - Aplicación de Clima
Aplicación web de pronóstico del tiempo para las principales ciudades de Latinoamérica, desarrollada como proyecto del Módulo 2 de Frontend..

Descripción

Esta aplicación permite consultar el clima actual y el pronóstico semanal de 12 ciudades principales de Latinoamérica. Cuenta con un diseño responsive, intuitivo y moderno, implementado con tecnologías web estándar.

Demo

Repositorio de GitHub: (https://github.com/alepe-code/weather-frontend-m2)

Características

✅ Listado de 12 ciudades latinoamericanas
✅ Información del clima actual (temperatura, condición, humedad, viento)
✅ Pronóstico semanal de 7 días
✅ Diseño responsive (mobile-first)
✅ Navegación intuitiva entre páginas
✅ Interfaz moderna con Bootstrap 5
✅ HTML5 semántico
✅ Interactividad con JavaScript vanilla

Ciudades Incluidas

Santiago, Chile
Buenos Aires, Argentina
Lima, Perú
Bogotá, Colombia
Ciudad de México, México
Montevideo, Uruguay
Quito, Ecuador
La Paz, Bolivia
Caracas, Venezuela
San José, Costa Rica
Asunción, Paraguay
Panamá, Panamá

Tecnologías Utilizadas

HTML5: Estructura semántica (header, nav, main, section, article, footer)
CSS3: Estilos personalizados y animaciones
Bootstrap 5.3.2: Framework CSS para diseño responsive
JavaScript ES6: Manipulación del DOM y lógica de la aplicación
Git/GitHub: Control de versiones

Estructura del Proyecto

weather-frontend-m2/
│
├── index.html              # Página de inicio con listado de ciudades
├── detalle.html           # Página de detalle con pronóstico semanal
├── README.md              # Documentación del proyecto
│
├── css/
│   └── styles.css         # Estilos personalizados
│
└── js/
    ├── data.js            # Datos de ciudades y clima
    ├── app.js             # Lógica de la página de inicio
    └── detail.js          # Lógica de la página de detalle

Cómo Ejecutar el Proyecto

Opción 1: Ejecución Local

Clona o descarga el repositorio:

bashgit clone [URL-del-repositorio]

Navega a la carpeta del proyecto:

bashcd weather-frontend-m2

Abre el archivo index.html en tu navegador preferido, o usa un servidor local:

bash# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000

Accede a http://localhost:8000 en tu navegador

Opción 2: GitHub Pages

Sube el proyecto a GitHub
Ve a Settings > Pages
Selecciona la rama principal (main)
Guarda y espera unos minutos
Accede a la URL proporcionada