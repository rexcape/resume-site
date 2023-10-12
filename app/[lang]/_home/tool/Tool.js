import { Container } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { tools } from '@/data'
import { SectionTitle } from '../section-title'
import { SkillCard } from '../skill-card'
import { SkillGrid } from '../skill-grid'

import cs from './Tool.module.css'

export function Tool({ t }) {
  const toolCards = tools.map((item) => (
    <SkillCard key={item.name} skill={item} t={t} />
  ))
  return (
    <div className={cs.root}>
      <Container size={CONTAINER_DEFAULT_WIDTH}>
        <SectionTitle id="tool">{t['14']}</SectionTitle>
        <SkillGrid>{toolCards}</SkillGrid>
      </Container>
    </div>
  )
}
