import { Prompt } from 'next/font/google';
import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

const prompt = Prompt({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
