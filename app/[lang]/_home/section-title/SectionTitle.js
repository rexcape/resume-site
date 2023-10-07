import { Title } from '@mantine/core'
import cs from './SectionTitle.module.css'

export function SectionTitle({ children }) {
  return (
    <Title className={cs.title} order={2}>
      {children}
    </Title>
  )
}
