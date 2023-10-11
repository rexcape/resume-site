import { cache } from 'react'

import { NotionPlus, Schema } from 'notion-plus'

const client = NotionPlus.getInstance(process.env.NOTION_TOKEN)

const schema = new Schema({
  name: 'title',
  id: 'unique_id',
  zh: 'string',
  en: 'string',
  ja: 'string',
})

const model = client.getModel(process.env.TRANSLATION_DB_ID, schema)

export const getTranslations = cache(async (part) => {
  const items = []
  let result
  // collect results
  do {
    result = await model.find({
      filter: {
        property: 'name',
        title: {
          equals: part,
        },
      },
    })
    items.push(...result.results)
  } while (result?.hasMore)

  return items.reduce(
    (acc, curr) => {
      acc['zh'] = { ...acc['zh'], [curr.id]: curr.zh }
      acc['ja'] = { ...acc['ja'], [curr.id]: curr.ja }
      acc['en'] = { ...acc['en'], [curr.id]: curr.en }
      return acc
    },
    { zh: {}, ja: {}, en: {} }
  )
})

export const revalidate = 3600
