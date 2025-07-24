import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { AuthProvider } from '@/components/auth/auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'RiggerConnect WA - Professional Rigging Network',
    template: '%s | RiggerConnect WA'
  },
  description: 'Western Australia\'s premier professional networking platform for riggers, doggers, and crane operators. Supporting ChaseWhiteRabbit NGO.',
  keywords: [
    'rigging jobs',
    'crane operator',
    'dogger',
    'Western Australia',
    'mining jobs',
    'construction',
    'FIFO',
    'ChaseWhiteRabbit'
  ],
  authors: [{ name: 'Tiation', url: 'https://tiation.net' }],
  creator: 'Tiation',
  publisher: 'ChaseWhiteRabbit NGO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://riggerconnect.sxc.codes'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://riggerconnect.sxc.codes',
    title: 'RiggerConnect WA - Professional Rigging Network',
    description: 'Connect with quality rigging jobs across Western Australia. Professional networking platform for the rigging industry.',
    siteName: 'RiggerConnect WA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiggerConnect WA - Professional Rigging Network',
    description: 'Connect with quality rigging jobs across Western Australia.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <AuthProvider>
          <div className="min-h-full bg-gray-50 dark:bg-gray-900">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
