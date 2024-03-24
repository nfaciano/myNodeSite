const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 1337;

function serveStaticFile(res, filePath, contentType, responseCode = 200) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == 'ENOENT') {
        fs.readFile('./public/404.html', (error, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    } else {
      res.writeHead(responseCode, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': 'https://lambdachiuri-node.onrender.com'
      });
      res.end(data, 'utf-8');
    }
  });
}

http.createServer((req, res) => {
  let filePath = './public' + req.url;
  if (filePath == './public/') {
    filePath = './public/index.html';
  }

  let extname = String(path.extname(filePath)).toLowerCase();
  let mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml'
    // Add more MIME types if needed
  };

  let contentType = mimeTypes[extname] || 'application/octet-stream';

  serveStaticFile(res, filePath, contentType);
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
