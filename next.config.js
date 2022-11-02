/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig
module.exports = {
  basePath: '/static_generator',
  assetPrefix: '/static_generator',
  trailingSlash: true,

  images: {
    loader: "imgix",
    path: "",
  },
};
