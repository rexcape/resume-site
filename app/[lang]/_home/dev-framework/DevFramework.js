import { Container } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { SectionTitle } from '../section-title'
import { SkillCard } from '../skill-card'

import cs from './DevFramework.module.css'
import { SkillGrid } from '../skill-grid'

const frameworks = [
  { name: 'Spring', tier: 's', devicon: 'spring/spring-original.svg' },
  { name: 'React', tier: 's', devicon: 'react/react-original.svg' },
  { name: 'Nextjs', tier: 's', devicon: 'nextjs/nextjs-original.svg' },
  { name: 'Vue', tier: 's', devicon: 'vuejs/vuejs-original.svg' },
  { name: 'Nuxtjs', tier: 's', devicon: 'nuxtjs/nuxtjs-original.svg' },
  { name: 'Tauri', tier: 's', static: 'logo/tauri.png' },
  { name: 'Mybatis', tier: 's', static: 'logo/mybatis.png' },
  {
    name: 'TailwindCSS',
    tier: 's',
    devicon: 'tailwindcss/tailwindcss-plain.svg',
  },
  { name: 'Electron', tier: 'a', devicon: 'electron/electron-original.svg' },
  { name: 'JQuery', tier: 'a', devicon: 'jquery/jquery-original.svg' },
  { name: 'Svelte', tier: 'a', devicon: 'svelte/svelte-original.svg' },
  { name: 'Django', tier: 'b', devicon: 'django/django-plain.svg' },
  { name: 'Redux', tier: 'b', devicon: 'redux/redux-original.svg' },
  { name: 'Flutter', tier: 'b', devicon: 'flutter/flutter-original.svg' },
]

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
