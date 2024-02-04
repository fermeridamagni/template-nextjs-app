import LocalFont from 'next/font/local';

export const fontText = LocalFont({
  src: './TiltNeon-Regular.ttf',
  style: 'normal',
  variable: '--font-text',
  weight: '400'
});

export const fontTitle = LocalFont({
  src: './gagalin.otf',
  style: 'normal',
  variable: '--font-title',
  weight: '400'
});