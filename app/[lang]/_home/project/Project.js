import { Container, SimpleGrid } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { SectionTitle } from '../section-title'
import { ProjectCard } from './ProjectCard'


import cs from './Project.module.css'

const projects = [
  {
    type: 'public',
    name: 'Rxofclock',
    descriptionId: '19',
    tags: ['handlebars', 'react', 'tailwind css', 'daisyui'],
    github: 'https://www.github.com/rexcape/rxofclock',
    demo: 'https://rxofclock.rexcape.icu',
    image: '/project/screenshot/rxofclock.png',
  },
  {
    type: 'public',
    name: 'Replacer',
    descriptionId: '20',
    tags: ['regex', 'svelte', 'tailwind css', 'daisyui', 'drag and drop'],
    github: 'https://www.github.com/rexcape/replacer',
    demo: 'https://replacer.rexcape.icu',
    image: '/project/screenshot/replacer.png',
  },
  {
    type: 'public',
    name: 'Mermaid editor',
    descriptionId: '21',
    tags: ['mermaid', 'tauri', 'react', 'mantine ui'],
    github: 'https://www.github.com/rexcape/mermaid-editor',
    image: '/project/screenshot/mermaid-editor.png',
  },
]

export function Project({ t }) {
  const cards = projects.map((item) => (
    <ProjectCard key={item.name} project={item} t={t} />
  ))
  return (
    <div className={cs.root}>
      <Container size={CONTAINER_DEFAULT_WIDTH}>
        <SectionTitle id="projects">{t['10']}</SectionTitle>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
          {cards}
        </SimpleGrid>
      </Container>
    </div>
  )
}
