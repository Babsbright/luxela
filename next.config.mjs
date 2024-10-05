/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      // Expose your environment variables here for both frontend and backend access
      SOLANA_CLUSTER: process.env.SOLANA_CLUSTER,
      SOLANA_PRIVATE_KEY: process.env.SOLANA_PRIVATE_KEY,
    },
  };
  
  export default nextConfig;
  