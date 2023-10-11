import { Container, Stack } from '@mantine/core'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import { SectionTitle } from '../section-title'
import { CertificationCard } from './CertificationCard'

import cs from './Certification.module.css'

const certifications = [
  {
    id: 'responsive-web-design',
    nameId: '29',
    link: 'https://www.freecodecamp.org/certification/rexcape/responsive-web-design',
    from: 'freecodecamp',
    descriptionId: '27',
    image: '/certification/responsive-web-design.png',
  },
  {
    id: 'back-end-development-and-apis',
    nameId: '30',
    link: 'https://www.freecodecamp.org/certification/rexcape/back-end-development-and-apis',
    from: 'freecodecamp',
    descriptionId: '28',
    image: '/certification/back-end-development-and-apis.png',
  },
  {
    id: 'front-end-development-libraries',
    nameId: '31',
    link: 'https://www.freecodecamp.org/certification/rexcape/front-end-development-libraries',
    from: 'freecodecamp',
    descriptionId: '32',
    image: '/certification/front-end-development-libraries.png',
  },
]

export function Certification({ t }) {
  const certs = certifications.map((c) => (
    <CertificationCard key={c.id} certification={c} t={t} />
  ))
  return (
    <div className={cs.root}>
      <Container size={CONTAINER_DEFAULT_WIDTH}>
        <SectionTitle id="certifications">{t['24']}</SectionTitle>
        <Stack>{certs}</Stack>
      </Container>
    </div>
  )
}
