import './globals.css';
import { Open_Sans } from 'next/font/google'
import Header from "@/components/Header"; 
import { AuthProvider } from "@/contexts/authContext";

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Desafio axion',
  description: 'Processo seletivo para desenvolvedor frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={openSans.variable}>
      <body>
        <AuthProvider>
          {/* vai inserir o header em todas as paginas (tirei nas pags de forms)*/}
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
