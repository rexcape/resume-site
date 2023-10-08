import { Container } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { SectionTitle } from '../section-title'
import { SkillCard } from '../skill-card'
import { SkillGrid } from '../skill-grid'

import cs from './Tool.module.css'

const tools = [
  { name: 'JetBrains', tier: 's', devicon: 'jetbrains/jetbrains-original.svg' },
  {
    name: 'Visual Studio Code',
    tier: 's',
    devicon: 'vscode/vscode-original.svg',
  },
  { name: 'Git', tier: 's', devicon: 'git/git-original.svg' },
  { name: 'Nodejs', tier: 's', devicon: 'nodejs/nodejs-original.svg' },
  { name: 'Tomcat', tier: 's', devicon: 'tomcat/tomcat-original.svg' },
  { name: 'MySQL', tier: 's', devicon: 'mysql/mysql-original.svg' },
  {
    name: 'PostgreSQL',
    tier: 's',
    devicon: 'postgresql/postgresql-original.svg',
  },
  { name: 'Redis', tier: 's', devicon: 'redis/redis-original.svg' },
  { name: 'Nginx', tier: 'a', devicon: 'nginx/nginx-original.svg' },
  { name: 'Anaconda', tier: 'a', devicon: 'anaconda/anaconda-original.svg' },
  { name: 'Docker', tier: 'a', devicon: 'docker/docker-original.svg' },
  { name: 'Deno', tier: 'a', devicon: 'denojs/denojs-original.svg' },
  { name: 'MongoDB', tier: 'a', devicon: 'mongodb/mongodb-original.svg' },
  { name: 'SQLite', tier: 'a', devicon: 'sqlite/sqlite-original.svg' },
]

export function Tool({ t }) {
  const toolCards = tools.map((item) => (
    <SkillCard key={item.name} skill={item} t={t} />
  ))
  return (
    <div className={cs.root}>
      <Container size={CONTAINER_DEFAULT_WIDTH}>
        <SectionTitle>{t['14']}</SectionTitle>
        <SkillGrid>{toolCards}</SkillGrid>
      </Container>
    </div>
  )
}
