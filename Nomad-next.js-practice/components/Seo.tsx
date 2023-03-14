import Head from "next/head"; // 어플리케이션 head 관리 패키지 (next.js 기본 제공)

const Seo = ({ title }: { title: string }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </>
  );
};

export default Seo;
