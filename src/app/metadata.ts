import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETH DCA',
  description: 'Buy a handful of ETH each month',

  keywords: ['Web3', 'Next.js', 'Ethereum', 'DApp', 'Blockchain', 'Wallet'],
  authors: [{ name: 'Julien', url: 'https://github.com/julienbrg' }],

  openGraph: {
    title: 'ETH DCA',
    description: 'Buy a handful of ETH each month',
    url: 'https://eth-dca.netlify.app',
    siteName: 'ETH DCA',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'ETH DCA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ETH DCA',
    description: 'Buy a handful of ETH each month',
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-site-verification',
  },
}
