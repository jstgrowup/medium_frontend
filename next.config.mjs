/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["jstgrwmedium.s3.eu-north-1.amazonaws.com"],
  },
};

export default nextConfig;
