import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Koi Iro 暗い色 — World & Character Guide',
  description:
    'Koi Iro — An original 7-volume manga series rooted in Vedic Hindu cosmology. A post-apocalyptic journey through the fourteen Lokas of Vedic cosmology.',
  keywords: ['manga', 'Vedic cosmology', 'Koi Iro', 'original manga', 'Indian mythology', 'anime'],
  authors: [{ name: 'Reema Majumdar' }],
  openGraph: {
    title: 'Koi Iro 暗い色 — World & Character Guide',
    description:
      'An original 7-volume manga series rooted in Vedic Hindu cosmology. Complete. Copyright-filed. Production-ready.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Koi Iro 暗い色',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koi Iro 暗い色 — World & Character Guide',
    description:
      'An original 7-volume manga series rooted in Vedic Hindu cosmology. Complete. Copyright-filed. Production-ready.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Noto+Serif+JP:wght@300;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
