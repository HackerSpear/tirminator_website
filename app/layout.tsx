import type { Metadata, Viewport } from 'next'
import { getSEOTags, renderSchemaTags } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = getSEOTags({
  title: 'TIRMINATOR – Drivers & Transport Companies',
  description:
    'TIRMINATOR connects transport companies with drivers. Find jobs, hire drivers, schedule interviews. The ultimate platform for the transport industry.',
  canonicalUrlRelative: '/',
  openGraph: {
    title: 'TIRMINATOR – Drivers & Transport Companies',
    description:
      'TIRMINATOR connects transport companies with drivers. Find jobs, hire drivers, schedule interviews.',
    url: '/',
  },
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/images/favicon.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {renderSchemaTags()}
        {children}
      </body>
    </html>
  )
}
