import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Dancing_Script, Source_Code_Pro } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import classNames from 'classnames'

const my_custom_font = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-custom',
})

const source_code_font = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code',
})

export const metadata: Metadata = {
  title: 'Mdx Repository',
  description: 'My personal webapp for all my mdx notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={classNames(my_custom_font.variable, source_code_font.variable)}
        suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
