import { Button, Title } from '@mantine/core'
import { getTranslator } from '@/lib/notion'

export default async function Home({ params }) {
  const t = await getTranslator('index', params.lang)
  return (
    <main>
      <Title>Hello world!</Title>
      <Button>Get started</Button>
      <div className="text-lg font-bold">Tailwindcss</div>
      <div className="text-lg font-bold">i18n test: {t('1')}</div>
    </main>
  )
}
