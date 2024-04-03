/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CONTENTFUL_ID: process.env.REACT_APP_CONTENTFUL_ID,
    REACT_APP_CONTENTFUL_TOCKEN: process.env.REACT_APP_CONTENTFUL_TOCKEN
  },
};

export default nextConfig;
