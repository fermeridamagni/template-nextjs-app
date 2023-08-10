import Script from 'next/script';

import '@/resources/lib/bootstrap.min.css';
import '@/resources/styles/globals.css';

import { fontText } from '@/resources/fonts/fonts.config';

export const metadata = {
  title: '',
  description: '',
  keywords: '',
  auhor: 'Fer Merida | https://github.com/fermeridamagni'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={fontText.variable}>
        {children}

        <Script src="/resources/lib/jQuery/jQuery.min.js"></Script>
        <Script src="https://kit.fontawesome.com/3d7356b300.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload"></Script>
      </body>
    </html>
  );
};