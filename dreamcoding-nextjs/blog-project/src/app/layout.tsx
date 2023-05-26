import './globals.css';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import { Metadata } from 'next';

// Nextjs13의 앱 디렉토리는 기본적으로 서버컴포너트 이기 떄문에 브라우저 api및 랜더링 후 일어나는 useEffect나 각종 이벤트들을 사용 할 수 없다. 해당 기능들은 클라이언트 컴포넌트에서 사용 해야 한다. 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다.',
  icons: {
    icon: '/favicon.icon'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
          <nav className={styles.nav}>
            <a href=''>Contact</a>
            <a href=''>About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
