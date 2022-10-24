/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOpcions:{
    includePaths:[path.join(__dirname,'src/styles')]
  }
}

module.exports = nextConfig