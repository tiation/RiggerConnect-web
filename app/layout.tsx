import './globals.css'
import { Rajdhani, Orbitron, Exo_2 } from 'next/font/google'
import { Metadata } from 'next'
import { AuthProvider } from '@/components/auth/auth-provider'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron'
})

const exo2 = Exo_2({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-exo2'
})

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
    <html lang="en" className={`h-full ${rajdhani.variable} ${orbitron.variable} ${exo2.variable}`}>
      <body className="h-full antialiased bg-dark-surface text-foreground font-sans">
        <div className="floating-shapes"></div>
        <AuthProvider>
          <div className="min-h-full relative z-10">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
