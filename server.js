// Importa el módulo http para crear el servidor
const http = require('http');

// Configura el servidor
const server = http.createServer((req, res) => {
    // Configura el encabezado de la respuesta
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Define el contenido HTML con estilos
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Programacion Distribuida</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #6a11cb, #2575fc);
                color: white;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
            }
            h1 {
                font-size: 4rem;
                margin: 0;
                animation: fadeIn 2s ease-in-out;
            }
            p {
                font-size: 1.5rem;
                margin-top: 10px;
            }
            @keyframes fadeIn {
                0% { opacity: 0; transform: scale(0.8); }
                100% { opacity: 1; transform: scale(1); }
            }
            .button {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                font-size: 1.2rem;
                color: white;
                background: #ff6b6b;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                text-decoration: none;
                transition: background 0.3s;
            }
            .button:hover {
                background: #d64545;
            }
        </style>
    </head>
    <body>
        <div>
            <h1>¡Hola Mundo!</h1>
            <p>Bienvenido a mi sitio WEB 🚀</p>
            
        </div>
    </body>
    </html>
    `;

    // Enviar el contenido HTML
    res.end(htmlContent);
});

// Configura el puerto del servidor
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});