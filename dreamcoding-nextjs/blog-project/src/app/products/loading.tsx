export default function ProductsLoading() {
  return <p>로딩중 입니다...</p>;
}

// layout에서 children에 해당 하는 부분만 loading으로 대체 된다.
// 필요한 곳에서 부분적으로 suspense를 사용해서 UI컴포넌트 별로 로딩을 보여 줄수있따.
// data를 fetching할때 순차적으로 데이터를 fetching 하지 않고 병렬적으로 (한번에) 데이터 fetching을 시작 할 수도 있다.
// nextjs13 datafetching의 fetching 카테고리 문서 확인 해보기
