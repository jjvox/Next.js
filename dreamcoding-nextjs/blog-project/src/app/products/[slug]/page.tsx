import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

// [slug] 외에도 여러 라우팅이 올 수 있는 [...slug] 와 옵셔널인 [[...slug]]가 있다.

const PantsPageDetail = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지</h1>;
};

export const generateStaticParams = () => {
  // generateStaticParams 를 이용하면 동적 라우팅에 들어가는 params의 값을 미리 지정해서 static하게 생성 해둘 수 있다.
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product, // slug에 들어갈 값을 미리 지정해서 return해 줌으로써 static한 페이지를 생성 한다.
  }));
};

export default PantsPageDetail;
