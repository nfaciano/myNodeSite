const http = require('http');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const https = require('https');

const port = 1337;

// Enable CORS middleware
const corsOptions = {
  origin: 'https://lambdachiuri-node.onrender.com'
};

const corsMiddleware = cors(corsOptions);

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
      res.writeHead(responseCode, { 'Content-Type': contentType });
      res.end(data, 'utf-8');
    }
  });
}

function fetchAndServeXml(res, url) {
  https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': 'https://lambdachiuri-node.onrender.com'
      });
      res.end(data);
    });
  }).on('error', (error) => {
    console.error(`Error fetching XML file: ${error.message}`);
    res.writeHead(500);
    res.end('Internal Server Error');
  });
}

http.createServer((req, res) => {
  // Use CORS middleware
  corsMiddleware(req, res, () => {
    let filePath = './public' + req.url;
    if (filePath == './public/') {
      filePath = './public/index.html';
    }

    if (filePath.endsWith('.xml')) {
      const githubRawUrl = 'https://raw.githubusercontent.com/nfaciano/myNodeSite/main/public/data/merchandise.xml';
      fetchAndServeXml(res, githubRawUrl);
    } else {
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
    }
  });
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
