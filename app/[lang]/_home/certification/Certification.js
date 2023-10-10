import { Container, Stack } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { SectionTitle } from '../section-title'
import { CertificationCard } from './CertificationCard'

import cs from './Certification.module.css'

const certifications = [
  {
    name: 'Responsive Web Design Certification',
    nameId: '29',
    link: 'https://www.freecodecamp.org/certification/rexcape/responsive-web-design',
    get: 'https://www.freecodecamp.org/learn/responsive-web-design/',
    from: 'freecodecamp',
    description:
      "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",
    descriptionId: '27',
    image: '/certification/back-end-development-and-apis.png',
  },
  {
    name: 'Back End Development and APIs',
    nameId: '30',
    link: 'https://www.freecodecamp.org/certification/rexcape/back-end-development-and-apis',
    get: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
    from: 'freecodecamp',
    description:
      "Until this point, you've only used JavaScript on the front end to add interactivity to a page, solve algorithm challenges, or build an SPA. But JavaScript can also be used on the back end, or server, to build entire web applications.",
    descriptionId: '28',
    image: '/certification/responsive-web-design.png',
  },
]

export function Certification({ t }) {
  const certs = certifications.map((c) => (
    <CertificationCard key={c.name} certification={c} t={t} />
  ))
  return (
    <div className={cs.root}>
      <Container size={CONTAINER_DEFAULT_WIDTH}>
        <SectionTitle id="certification">{t['24']}</SectionTitle>
        <Stack>{certs}</Stack>
      </Container>
    </div>
  )
}
