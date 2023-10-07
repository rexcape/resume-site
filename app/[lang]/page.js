import { getTranslations } from '@/lib/notion'
import { HomePage } from './_home/HomePage'

export default async function Home({ params }) {
  const t = (await getTranslations('index'))[params.lang]
  return <HomePage t={t} />
}
