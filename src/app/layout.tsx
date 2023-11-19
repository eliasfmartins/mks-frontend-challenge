/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import { GlobalStyles } from './styles/globalstyles'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import StyledComponentsRegistry from './lib/registry'
import { CarrinhoProvider } from './context/CarrContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CarrinhoProvider>

            <Header />
            {children}
            <Footer />

            <GlobalStyles />
          </CarrinhoProvider>
        </StyledComponentsRegistry>

      </body>
    </html>
  )
}
