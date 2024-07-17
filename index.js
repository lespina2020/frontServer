const express = require("express");
const history = require("connect-history-api-fallback");
const path = require("path");

const app = express();
const port = process.env.PORT || 3002;

const staticPath = path.join(__dirname, "dist");

// Configura la ruta del directorio público de Vue
app.use(express.static(path.join(__dirname, "dist")));

// Utiliza connect-history-api-fallback para redireccionar las solicitudes no coincidentes
app.use(
  history({
    rewrites: [
      { from: /^\/$/, to: "/index.html" }, // Redirigir raíz (/) a index.html
      // Agrega otras reescrituras para rutas específicas inexistentes si es necesario
    ],
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "/index.html")); // Servir index.html para todas las rutas no coincidentes
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
