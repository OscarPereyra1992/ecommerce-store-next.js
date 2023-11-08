import './globals.css'
//Font
import { Urbanist } from 'next/font/google'
//Components

import ModalProvider from '@/providers/model-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'La Reina',
  description: 'Casa de comidas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        
        {children}
        
        </body>
    </html>
  )
}
