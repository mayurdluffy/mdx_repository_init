import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Dancing_Script, Source_Code_Pro } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import classNames from 'classnames'

import getNotesArticles from '@/utils/notes/getNotesArticles'
import getDsaArticles from '@/utils/dsa/getDsaArticles'
import getDsaArticlesMetadata from '@/utils/dsa/getDsaArticlesMetadata'
import getNotesArticlesMetadata from '@/utils/notes/getNotesArticlesMetadata'
import { getTags } from '@/utils/getTags'

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

  const notes_articles = getNotesArticles();
  const dsa_artticles = getDsaArticles();

  const notes_articles_metadata = getNotesArticlesMetadata(notes_articles);
  const dsa_artticles_metadata = getDsaArticlesMetadata(dsa_artticles);

  const notes_articles_tags = getTags(notes_articles_metadata);
  const dsa_articles_tags = getTags(dsa_artticles_metadata);

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
          <Header 
            notes_articles_tags={notes_articles_tags}
            dsa_articles_tags={dsa_articles_tags}
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
