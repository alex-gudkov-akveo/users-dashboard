import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import Header from './components/Header/Header';
import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Users dashboard',
  description:
    'A small web application, which allows to view, filter, and interact with a list of users'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className={style.main}>
            <div className={style.container}>{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
