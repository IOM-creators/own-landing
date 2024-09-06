/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CONTENTFUL_ID: process.env.NEXT_PUBLIC_CONTENTFUL_ID,
    NEXT_PUBLIC_CONTENTFUL_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  },
  experimental: {
    pagesDir: "src/pages",
  },
};
