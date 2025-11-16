import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GradMates - Find Your People, Before You Find Your Place',
  description: 'GradMates is a smarter, curated roommate-matching platform built just for grad students. No spam group chats. No endless scrolling. Just real humans you actually want to live with.',
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






