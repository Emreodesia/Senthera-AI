import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Senthera AI - Advanced AI Dashboard',
  description: 'Modern AI-powered dashboard for text, image, code, audio, and video generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-senthera-primary min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 