// app/layout.tsx
import "./globals.css";
import  StoreProvider  from '@/StateStore/StoreProvider';
import type { Metadata } from 'next';

export const metadata : Metadata = {
  title: " bishoy yousef Portfolio",
  description: "Front-end Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <StoreProvider>
            {children}
        </StoreProvider>
      </body>
    </html>
  )
}