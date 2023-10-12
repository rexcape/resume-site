import { ActionIcon, Container, Flex, Group, Text, rem } from '@mantine/core'
import Link from 'next/link'
import { IconBrandCodepen, IconBrandGithub } from '@tabler/icons-react'
import cs from './Shell.module.css'
import { Image } from '@/components/Image'
import { CONTAINER_DEFAULT_WIDTH } from '@/theme'

const iconProps = {
  style: { width: rem(18), height: rem(18) },
  stroke: 1.5,
}

const links = [
  {
    name: 'GitHub',
    link: 'https://www.github.com/rexcape/',
    icon: <IconBrandGithub {...iconProps} />,
  },
  {
    name: 'CodePen',
    link: 'https://codepen.io/rexcape/',
    icon: <IconBrandCodepen {...iconProps} />,
  },
]

export function Footer() {
  return (
    <footer>
      <Container className={cs.inner} size={CONTAINER_DEFAULT_WIDTH}>
        <Flex align="center">
          <Text size="sm" fw={500}>
            Made with
          </Text>
          <Image
            ml="sm"
            mr="sm"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            width={92}
            height={80}
          />
          <Text size="sm" fw={500}>
            and
          </Text>
          <Image src="/logo/mantine-full.svg" ml="sm" width={92} height={36} />
        </Flex>

        <Group gap={0} className={cs.links} justify="flex-end" wrap="nowrap">
          {links.map((l) => (
            <ActionIcon
              key={l.name}
              size="lg"
              color="gray"
              variant="subtle"
              component={Link}
              href={l.link}
            >
              {l.icon}
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </footer>
  )
}
