import '@/resources/styles/globals.css';

export const metadata = {
  title: '',
  description: '',
  keywords: '',
  auhor: 'Fer Merida | https://github.com/fermeridamagni'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};