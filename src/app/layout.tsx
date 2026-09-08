import "./globals.css";
import StoreProvider from '@/StateStore/StoreProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bishoy Yousef — Full-Stack Developer | Frontend Focused",
  description: "Portfolio of Bishoy Yousef, a Full-Stack Developer specializing in frontend web development with React, Next.js, Angular, TypeScript, and Node.js.",
  keywords: ["Bishoy Yousef", "Frontend Developer", "Full-Stack Developer", "React", "Next.js", "Angular", "TypeScript", "JavaScript", "Web Development"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}