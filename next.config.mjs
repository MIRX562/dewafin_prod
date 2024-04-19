/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			//github profile image
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			//google profile image
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
		],
	},
};

export default nextConfig;
