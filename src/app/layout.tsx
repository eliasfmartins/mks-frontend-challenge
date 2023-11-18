'use client'
import { Inter } from 'next/font/google'
import { GlobalStyles } from './styles/globalstyles'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import StyledComponentsRegistry from './lib/registry'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>

          <Header />
          {children}
          <Footer />

          <GlobalStyles />
        </StyledComponentsRegistry>

      </body>
    </html>
  )
}
