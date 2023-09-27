import { Button, Title } from '@mantine/core'
import { getTranslations } from '@/lib/notion'

export default async function Home({ params }) {
  const t = (await getTranslations('index'))[params.lang]
  return (
    <main>
      <Title>Hello world!</Title>
      <Button>Get started</Button>
      <div className="font-bold text-lg">i18n test: {t['1']}</div>
    </main>
  )
}
