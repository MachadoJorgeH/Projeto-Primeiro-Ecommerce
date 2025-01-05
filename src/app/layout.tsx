import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/template/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Meu E-commerce',
    description: 'E-commerce de produtos eletrônicos',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
            
        </html>
    )
}
