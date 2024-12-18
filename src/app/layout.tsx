import '@/app/scss/globals.css'
import { Inter } from 'next/font/google'
import '@/app/scss/index.scss'
import '@/app/scss/App.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Younes K - Portfolio',
    description: 'Freelance FullStack Developer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
