const million = require('million/compiler');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const millionConfig = {
  auto: true,
};


module.exports = million.next(nextConfig, millionConfig);
