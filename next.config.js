const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  // ✅ Custom Build Output Directory
  distDir: 'build', // Stores Next.js build files in the 'build' directory instead of '.next'

  // ✅ Enable Standalone Mode for Deployment
  output: 'standalone', // Generates standalone Node.js build (useful for deploying on custom servers)

  // ✅ Optimize Production Build
  experimental: {
    optimizeCss: true, // Optimize CSS files
    scrollRestoration: true, // Enable smooth scroll restoration
  },

  // ✅ Enable Webpack 5
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Prevent 'fs' module errors in the client-side
        net: false,
        tls: false,
      };
    }
    return config;
  },
};
