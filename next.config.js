/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	extends: ['@next/eslint-config-next'],
};

module.exports = nextConfig;
