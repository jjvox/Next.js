import { notFound } from 'next/navigation';

export const revalidate = 600; // 기본적으로 app의 page들은 SSG에 해당 한다. revalidate 값은 default false
// revalidate값을 주면 주어진 시간 마다 Page를 새로 렌더링 하는 ISR이 된다. 

type Props = {
  params: {
    slug: string;
  };
};
// [slug] 외에도 여러 라우팅이 올 수 있는 [...slug] 와 옵셔널인 [[...slug]]가 있다.


export function generateMetadata({params}: Props) {
  return {
    title: `제품의 이름 : ${params}`
  }
}

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
