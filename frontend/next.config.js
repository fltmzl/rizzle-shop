/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.BACKEND_URL || "http://localhost:9000/api/:path*",
      },
    ];
  },
  reactStrictMode: true,
};
