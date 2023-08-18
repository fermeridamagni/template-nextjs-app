import { Tilt_Neon } from 'next/font/google';
import LocalFont from 'next/font/local';

export const fontText = Tilt_Neon({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-text'
});

export const fontTitle = LocalFont({
  src: './gagalin.otf',
  variable: '--font-title'
});