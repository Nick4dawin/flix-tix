import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from '@/trpc/clients/client'
import { Container } from '@/components/atoms/container'
import { Navbar } from '@/components/organisms/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flix-Tix',
  description: 'Next Gen Movie Ticketing Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <html lang="en">
          <body className={inter.className}>
          <Toaster />
          <Navbar/>
           <Container>
            {children}
            </Container> 
         </body>

        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  )
} 


