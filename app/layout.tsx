import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'CSS Master Portfolio',
  description: 'A modern Tailwind CSS portfolio + playground project.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${rubik.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-white`}>{children}</body>
    </html>
  )
}