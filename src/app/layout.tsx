import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gmail Signature Template',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
