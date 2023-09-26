import '@mantine/core/styles.css'

import { MantineProvider, ColorSchemeScript } from '@mantine/core'

export const metadata = {
  title: 'Rxsume',
  description: 'Online resume for rexcape',
}

export function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'jp' }, { lang: 'en' }]
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
