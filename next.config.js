/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://next-js-app:LKISXGGek8591JKM@cluster0.lu8qv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};
