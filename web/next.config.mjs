/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    transpilePackages: [
        '@firebase/component',
        '@firebase/installations',
        '@firebase/messaging',
        '@firebase/util'
    ],
    serverExternalPackages: ['firebase', '@firebase/app', '@firebase/auth', '@firebase/firestore', '@firebase/storage', '@firebase/analytics']
};

export default nextConfig;
