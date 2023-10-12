import { Container } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { frameworks } from '@/data'
import { SectionTitle } from '../section-title'
import { SkillCard } from '../skill-card'

import cs from './DevFramework.module.css'
import { SkillGrid } from '../skill-grid'

export function DevFramework({ t }) {
  const frameworkCards = frameworks.map((item) => (
    <SkillCard key={item.name} skill={item} t={t} />
  ))
  return (
    <div className={cs.root}>
      <Container size={CONTAINER_DEFAULT_WIDTH}>
        <SectionTitle id="dev-framework">{t['13']}</SectionTitle>
        <SkillGrid>{frameworkCards}</SkillGrid>
      </Container>
    </div>
  )
}
