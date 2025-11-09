import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gradmates - Find Your Perfect Graduate Housing Match',
  description: 'AI-driven platform that intelligently matches graduate students with housemates and curates housing options.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

