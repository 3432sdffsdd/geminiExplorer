const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3001;
const STATIC_DIR = path.join(__dirname, 'out');
const DATA_FILE = path.join(__dirname, 'mock-reviews.json');

// Admin password (same as PHP backend)
const ADMIN_PASSWORD = 'gemini2026';

// Load or init reviews
function readReviews() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeReviews(reviews) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(reviews, null, 2));
}

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Password');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // API routes
  if (pathname === '/api/reviews.php') {
    res.setHeader('Content-Type', 'application/json');

    // GET reviews
    if (req.method === 'GET') {
      const reviews = readReviews();
      if (query.all === 'true') {
        // Check admin password
        const provided = req.headers['x-admin-password'] || '';
        if (provided !== ADMIN_PASSWORD) {
          res.writeHead(401);
          res.end(JSON.stringify({ error: 'Unauthorized' }));
          return;
        }
        res.writeHead(200);
        res.end(JSON.stringify(reviews));
      } else {
        // Public: only approved
        const approved = reviews.filter(r => r.approved);
        res.writeHead(200);
        res.end(JSON.stringify(approved));
      }
      return;
    }

    // POST new review
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          const reviews = readReviews();
          const newReview = {
            id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
            name: data.name?.trim(),
            location: data.location?.trim() || '',
            tourPackage: data.tourPackage?.trim() || '',
            rating: Number(data.rating),
            review: data.review?.trim(),
            travelDate: data.travelDate || '',
            approved: false,
            featured: false,
            createdAt: new Date().toISOString(),
          };
          reviews.push(newReview);
          writeReviews(reviews);
          res.writeHead(201);
          res.end(JSON.stringify({ success: true, review: newReview }));
        } catch (e) {
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'Failed to save review' }));
        }
      });
      return;
    }

    // PATCH (approve/feature)
    if (req.method === 'PATCH') {
      const provided = req.headers['x-admin-password'] || '';
      if (provided !== ADMIN_PASSWORD) {
        res.writeHead(401);
        res.end(JSON.stringify({ error: 'Unauthorized' }));
        return;
      }
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          const reviews = readReviews();
          const id = Number(query.id);
          const idx = reviews.findIndex(r => r.id === id);
          if (idx === -1) {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Not found' }));
            return;
          }
          if (data.approved !== undefined) reviews[idx].approved = data.approved;
          if (data.featured !== undefined) reviews[idx].featured = data.featured;
          writeReviews(reviews);
          res.writeHead(200);
          res.end(JSON.stringify({ success: true }));
        } catch (e) {
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'Failed to update' }));
        }
      });
      return;
    }

    // DELETE
    if (req.method === 'DELETE') {
      const provided = req.headers['x-admin-password'] || '';
      if (provided !== ADMIN_PASSWORD) {
        res.writeHead(401);
        res.end(JSON.stringify({ error: 'Unauthorized' }));
        return;
      }
      const reviews = readReviews();
      const id = Number(query.id);
      const filtered = reviews.filter(r => r.id !== id);
      if (filtered.length === reviews.length) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
        return;
      }
      writeReviews(filtered);
      res.writeHead(200);
      res.end(JSON.stringify({ success: true }));
      return;
    }
  }

  // Serve static files from out/
  let filePath = path.join(STATIC_DIR, pathname === '/' ? 'index.html' : pathname);
  if (!path.extname(filePath)) {
    filePath = path.join(filePath, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
  };

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try index.html for SPA routes
        fs.readFile(path.join(STATIC_DIR, 'index.html'), (err2, indexContent) => {
          if (err2) {
            res.writeHead(404);
            res.end('Not found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(indexContent);
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Mock reviews API active at /api/reviews.php');
});
