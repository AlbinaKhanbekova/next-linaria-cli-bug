/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withLinaria = require("next-linaria")

module.exports = withLinaria(nextConfig)
