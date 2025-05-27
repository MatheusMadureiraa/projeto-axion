import './globals.css';
import { Open_Sans } from 'next/font/google'

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Sua Página',
  description: 'Descrição...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={openSans.variable}>
      <body>{children}</body>
    </html>
  )
}
