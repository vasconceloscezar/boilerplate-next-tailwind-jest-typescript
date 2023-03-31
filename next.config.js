/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    imageBaseUrl: "/assets/images/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "instagram.*",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "*.cdn.sanity.io.*",
        port: "",
        pathname: "/**/**/**/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
