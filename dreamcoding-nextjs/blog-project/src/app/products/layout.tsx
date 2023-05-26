import { Metadata } from "next";

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해 보세요',
};

const LayoutProducts = ({children} : {children : React.ReactNode}) => {
  return (
    <>
    <header>
      hi 
    </header>
    <main>
      {children}
    </main>
    </>
  )
}


export default LayoutProducts