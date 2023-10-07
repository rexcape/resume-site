import { Container, Text, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'
import cs from './Hero.module.css'

export function Hero({ t }) {
  return (
    <Container size={CONTAINER_DEFAULT_WIDTH}>
      <div className={cs.container}>
        <Text className={cs.title}>{t['8']}</Text>
        <Text className={cs.description}>{t['9']}</Text>
        <UnstyledButton
          className={cs.blogLink}
          component={Link}
          href="https://blog.rexcape.icu"
          target="_blank"
        >
          <span>{t['15']}</span>
        </UnstyledButton>
      </div>
    </Container>
  )
}
