'use client'

import { useDisclosure } from '@mantine/hooks'
import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellMain,
  Burger,
  Group,
  Button,
  Flex,
} from '@mantine/core'
import { IconMail } from '@tabler/icons-react'
import Link from 'next/link'
import i18nConfig from '@/i18n'
import classes from './Shell.module.css'

export function Shell({ children, t, lang }) {
  const [opened, { toggle }] = useDisclosure()

  const getLinks = () => {
    const prefix = lang === i18nConfig.defaultLocale ? '/' : `/${lang}/`
    return [
      { href: `${prefix}`, label: t['6'] },
      { href: `${prefix}#projects`, label: t['4'] },
      { href: `${prefix}#certifications`, label: t['5'] },
    ]
  }

  const mailLink =
    lang === 'zh'
      ? 'mailto:mazixiang2012@yeah.net'
      : 'mailto:mazixiang2012@gmail.com'

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader className={classes.navbar}>
        <Group w="100%" h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex align="center" w="100%">
            <Group justify="center" style={{ flex: 1 }}>
              <Group gap={3} visibleFrom="sm">
                {getLinks().map((item) => (
                  <Link
                    className={classes.control}
                    key={item.href}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </Group>
            </Group>
            <Button
              variant="subtle"
              color="dark"
              radius="md"
              style={{ flex: 'none' }}
              leftSection={<IconMail />}
              component={Link}
              href={mailLink}
              target="_blank"
            >
              {t['35']}
            </Button>
          </Flex>
        </Group>
      </AppShellHeader>

      <AppShellNavbar py="md" px={4}>
        {getLinks().map((item) => (
          <Link className={classes.control} key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Button
          mt="lg"
          color="dark"
          radius="md"
          variant="subtle"
          leftSection={<IconMail />}
          component={Link}
          href={mailLink}
          target="_blank"
        >
          {t['35']}
        </Button>
      </AppShellNavbar>
      <AppShellMain style={{ padding: '0' }}>{children}</AppShellMain>
    </AppShell>
  )
}
