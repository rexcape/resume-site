import { Container } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { langs } from '@/data'
import { SectionTitle } from '../section-title'
import { SkillCard } from '../skill-card'
import { SkillGrid } from '../skill-grid'
import cs from './DevLang.module.css'

export function DevLang({ t }) {
  const langCards = langs.map((item) => (
    <SkillCard key={item.name} skill={item} t={t} />
  ))
  return (
    <div className={cs.root}>
      <Container size={CONTAINER_DEFAULT_WIDTH}>
        <SectionTitle id="dev-lang">{t['11']}</SectionTitle>
        <SkillGrid>{langCards}</SkillGrid>
      </Container>
    </div>
  )
}
