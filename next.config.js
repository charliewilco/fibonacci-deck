// @ts-check
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  cleanDistDir: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    reactRemoveProperties: true,
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
};
