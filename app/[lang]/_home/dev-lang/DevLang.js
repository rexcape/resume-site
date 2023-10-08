import { Container } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { SectionTitle } from '../section-title'
import { SkillCard } from '../skill-card'
import { SkillGrid } from '../skill-grid'
import cs from './DevLang.module.css'

const langs = [
  { name: 'Java', tier: 's', devicon: 'java/java-original.svg' },
  { name: 'HTML', tier: 's', devicon: 'html5/html5-original.svg' },
  { name: 'CSS', tier: 's', devicon: 'css3/css3-original.svg' },
  {
    name: 'JavaScript',
    tier: 's',
    devicon: 'javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    tier: 's',
    devicon: 'typescript/typescript-original.svg',
  },
  {
    name: 'Handlebars',
    tier: 's',
    devicon: 'handlebars/handlebars-original.svg',
  },
  { name: 'Rust', tier: 'a', devicon: 'rust/rust-plain.svg' },
  { name: 'Python', tier: 'a', devicon: 'python/python-original.svg' },
  { name: 'Bash', tier: 'a', devicon: 'bash/bash-original.svg' },
  { name: 'Go', tier: 'b', devicon: 'go/go-original.svg' },
  { name: 'C', tier: 'b', devicon: 'c/c-original.svg' },
  { name: 'C++', tier: 'b', devicon: 'cplusplus/cplusplus-original.svg' },
  { name: 'C#', tier: 'b', devicon: 'csharp/csharp-original.svg' },
  { name: 'Kotlin', tier: 'b', devicon: 'kotlin/kotlin-original.svg' },
  { name: 'Sass', tier: 'b', devicon: 'sass/sass-original.svg' },
  { name: 'Dart', tier: 'b', devicon: 'dart/dart-original.svg' },
  { name: 'Clojure', tier: 'b', devicon: 'clojure/clojure-original.svg' },
]

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
