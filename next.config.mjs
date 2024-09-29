// import withBundleAnalyzer from '@next/bundle-analyzer';

// const bundleAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//     ssr:false
//   },
// };

// export default bundleAnalyzer(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    reactStrictMode:true,
    images: {
        unoptimized: true,
    },
    compress:"true"
};

export default nextConfig;
