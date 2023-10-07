import { Wave1, Wave2, Wave3, Wave4 } from './seperator'
import { Hero } from './hero'
import { DevFramework } from './dev-framework'
import { DevLang } from './dev-lang'
import { Tool } from './tool'
import cs from './HomePage.module.css'

export function HomePage({ t }) {
  return (
    <div>
      <Hero t={t} />
      <Wave1 />
      <DevLang t={t} />
      <Wave2 />
      <DevFramework t={t} />
      <Wave3 />
      <Tool t={t} />
      <Wave4 />
    </div>
  )
}
