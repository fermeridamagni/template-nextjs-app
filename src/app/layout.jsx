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
      <body className={fontText.className}>
        {children}
      </body>
    </html>
  );
};