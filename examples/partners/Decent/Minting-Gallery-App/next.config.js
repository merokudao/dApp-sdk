/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "nftstorage.link",
      "ipfs.filebase.io",
      "oaidalleapiprodscus.blob.core.windows.net"
    ],
  },
};

module.exports = nextConfig;
