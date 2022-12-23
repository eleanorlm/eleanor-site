/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
