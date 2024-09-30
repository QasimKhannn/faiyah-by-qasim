/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    reactStrictMode:true,
    images: {
        unoptimized: true,
    },
    compress:true
};

export default nextConfig;
