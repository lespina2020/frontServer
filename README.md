•	Se implementó una rama  con un servidor web basado en el framework Express.js y la biblioteca connect-history-api-fallback. Esta rama permite servir una aplicación Vue.js SPA (Single Page Application) y 
evita errores al actualizar o navegar por la barra de direcciones. (Nota: sub-directorio /dist se encuentra compilada el front con la configuracion del BackEnd ).

Gestiona las peticiones a rutas que no serían servidas por tu backend en un entorno de desarrollo.

Esto asegura que tu SPA pueda funcionar correctamente durante el desarrollo, ya que el enrutamiento del lado del cliente se hace cargo.
Al usar connect-history-api-fallback, puedes desarrollar tu SPA sin problemas al configurar rutas de backend específicas para cada URL potencial. 

 
 
 
