import { Title } from '@mantine/core'
import cs from './SectionTitle.module.css'

export function SectionTitle({ children, id }) {
  return (
    <Title className={cs.title} id={id} order={2}>
      {children}
    </Title>
  )
}
