import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'production-it-incubator.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/apihub-spotifun/Image/**',
            },
            {
                protocol: 'https',
                hostname: 'production-it-incubator.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/apihub-spotifun/Video/**',  // ← добавить
            },
        ],
    },
};

export default nextConfig;