const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load environment variables manually
const envPath = path.resolve(__dirname, '.env.local');

if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envLines = envContent.split('\n');
    
    envLines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine && !trimmedLine.startsWith('#')) {
            // Clean any BOM or special characters
            const cleanLine = trimmedLine.replace(/^\uFEFF/, '').replace(/[^\x20-\x7E]/g, '');
            const [key, ...valueParts] = cleanLine.split('=');
            if (key && valueParts.length > 0) {
                const cleanKey = key.trim();
                const value = valueParts.join('=').trim();
                process.env[cleanKey] = value;
            }
        }
    });
}

console.log('🏙️ Pune Local Guide running at http://localhost:3000');
console.log('✅ Environment variables loaded successfully!');
console.log('🤖 Using Azure OpenAI GPT-4.1 with Pune context');
console.log('🚀 Ready for authentic Punekar conversations!');

// Import the chat API handler
const chatHandler = require('./api/chat-simple.js');

const PORT = 3000;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json'
};

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Handle API routes
    if (pathname === '/api/chat') {
        try {
            // Create a mock Vercel-like request/response object
            const mockReq = {
                method: req.method,
                body: await getRequestBody(req)
            };
            
            const mockRes = {
                status: (code) => ({
                    json: (data) => {
                        res.writeHead(code, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(data));
                    },
                    end: () => {
                        res.writeHead(code);
                        res.end();
                    }
                }),
                setHeader: (name, value) => res.setHeader(name, value)
            };

            await chatHandler.default(mockReq, mockRes);
        } catch (error) {
            console.error('API Error:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
        return;
    }

    // Serve static files
    let filePath = pathname === '/' ? './index.html' : `.${pathname}`;
    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'text/plain';

    try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(500);
            res.end('Server error');
        }
    }
});

// Helper function to get request body
function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                resolve({});
            }
        });
        req.on('error', reject);
    });
}

server.listen(PORT, () => {
    console.log('🏙️ Pune Local Guide running at http://localhost:3000');
    console.log('✅ Environment variables loaded successfully!');
    console.log('🤖 Using Azure OpenAI GPT-4.1 with Pune context');
    console.log('🚀 Ready for authentic Punekar conversations!');
});