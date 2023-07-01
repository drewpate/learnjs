import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn JS',
  description: 'Sponsored by the MIT xPRO Development Group.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className} style={{ maxWidth: '1440px', margin: 'auto'}}>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
