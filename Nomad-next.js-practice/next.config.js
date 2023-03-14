/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*", // 위 url이 입력 되었을 경우 자동으로 아래 url로 redirect 시켜 준다.
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, // 보여지는건 /api/movies가 보여지지만 실제로는 api_key를 이용한 주소가 적용된다. 즉 api 코드를 숨길 수 있음
      },
    ];
  },
};

module.exports = nextConfig;

// redirect는 url이 바뀜
// rewrite는 url이 바뀌지 않음
