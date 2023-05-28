'use client';
import { useEffect } from 'react';

// Error components는 react hook을 이용 해야 하기 때문에 Client components이어야만 한다.

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return;
}

// nextjs docs Error handling 참고 .
// suspense처럼 필요한 컴포넌트에서만 Error boundary 로 처리 해도 된다.
