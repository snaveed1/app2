const http = require('http');

const hostname = '0.0.0.0';
const port = 3002;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>App2</title>
            <style>
                body {
                    background-color: lightgreen;
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: start;
                    text-align: center;
                    font-size: 2em;
                    font-weight: bold;
                }
                div {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div>How are you from app2</div>
        </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
