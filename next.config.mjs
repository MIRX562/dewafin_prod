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
				hostname:
					'https://lh3.googleusercontent.com/a/ACg8ocITzFvjoF6uxY_p8zeEShwA7JTt1miLkmbn729n_P8dQvbn7w=s96-c',
			},
		],
	},
};

export default nextConfig;
