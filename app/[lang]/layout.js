import '@mantine/core/styles.css'

import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { getTranslations } from '@/lib/notion'
import { Shell } from '@/components/Shell'

export const metadata = {
  title: 'Rxsume',
  description: 'Online resume for rexcape',
}

export function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'jp' }, { lang: 'en' }]
}

export default async function RootLayout({ children, params }) {
  const t = (await getTranslations('layout'))[params.lang]
  return (
    <html lang={params.lang}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Shell t={t} lang={params.lang}>
            {children}
          </Shell>
        </MantineProvider>
      </body>
    </html>
  )
}
