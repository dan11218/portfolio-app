import type { Metadata } from 'next'
import { albertSans } from './fonts'
import './globals.css'
import Navbar from './navbar'

export const metadata: Metadata = {
  title: 'Danny Graugnard Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={albertSans.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
