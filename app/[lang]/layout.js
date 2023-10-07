import './globals.css'
import '@mantine/core/styles.css'

import { Noto_Sans_SC, Noto_Sans_JP, Noto_Sans } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '@/theme'
import { getTranslations } from '@/lib/notion'
import { Shell } from '@/components/Shell'

export const metadata = {
  title: 'resume site',
  description: 'online resume',
}

const notoSansSC = Noto_Sans_SC({
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese'],
  variable: '--font-noto-sans-sc',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese'],
  variable: '--font-noto-sans-jp',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans',
})

export function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'jp' }, { lang: 'en' }]
}

export default async function RootLayout({ children, params }) {
  const t = (await getTranslations('layout'))[params.lang]
  return (
    <html
      lang={params.lang}
      className={`${notoSansSC.variable} ${notoSansJP.variable} ${notoSans.variable}`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Shell t={t} lang={params.lang}>
            {children}
          </Shell>
        </MantineProvider>
      </body>
    </html>
  )
}
