import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LegalSwarm',
  description: 'Smarter Legal Solutions, Powered by AI',
  icons: {
    icon: '/images/icon.png',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
