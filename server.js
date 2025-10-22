const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')

// Environment configuration for cPanel
const port = parseInt(process.env.PORT || process.env.CPANEL_PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'

// Initialize Next.js app with proper configuration for cPanel
const app = next({ 
  dev,
  dir: __dirname,
  conf: {
    // Ensure proper asset handling for cPanel
    assetPrefix: process.env.ASSET_PREFIX || '',
    trailingSlash: true,
    // Handle static file serving for cPanel
    experimental: {
      outputFileTracingRoot: path.join(__dirname, '../../'),
    }
  }
})

const handle = app.getRequestHandler()

// Error handling for app preparation
app.prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        // Parse the URL
        const parsedUrl = parse(req.url, true)
        
        // Handle the request
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    })

    // Start the server
    server.listen(port, hostname, (err) => {
      if (err) {
        console.error('Failed to start server:', err)
        process.exit(1)
      }
      console.log(`> Ready on http://${hostname}:${port}`)
      console.log(`> Environment: ${dev ? 'development' : 'production'}`)
    })

    // Graceful shutdown handling
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully')
      server.close(() => {
        console.log('Process terminated')
        process.exit(0)
      })
    })

    process.on('SIGINT', () => {
      console.log('SIGINT received, shutting down gracefully')
      server.close(() => {
        console.log('Process terminated')
        process.exit(0)
      })
    })
  })
  .catch((ex) => {
    console.error('Failed to start application:', ex)
    process.exit(1)
  })