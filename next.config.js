const withRoutes = require('nextjs-routes/config')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
};

module.exports = withRoutes(nextConfig);
