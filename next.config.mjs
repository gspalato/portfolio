/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/gspalato/**',
			},
			{
				protocol: 'https',
				hostname: 'unsplash.com',
			},
		],
	},
};

export default nextConfig;
