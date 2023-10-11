import { ActionIcon, Affix } from '@mantine/core'
import { IconMail } from '@tabler/icons-react'
import Link from 'next/link'

export function MailButton({ lang }) {
  const href =
    lang === 'zh'
      ? 'mailto:mazixiang2012@yeah.net'
      : 'mailto:rexcape@tutanota.com'

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <ActionIcon
        variant="light"
        color="violet"
        size="xl"
        radius="xl"
        component={Link}
        href={href}
        target="_blank"
      >
        <IconMail />
      </ActionIcon>
    </Affix>
  )
}
