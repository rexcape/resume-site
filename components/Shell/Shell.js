'use client'

import { useDisclosure } from '@mantine/hooks'
import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellMain,
  Burger,
  Group,
} from '@mantine/core'
import Link from 'next/link'
import i18nConfig from '@/i18n'
import classes from './Shell.module.css'

export function Shell({ children, t, lang }) {
  const [opened, { toggle }] = useDisclosure()

  const getLinks = () => {
    const prefix = lang === i18nConfig.defaultLocale ? '/' : `/${lang}/`
    return [
      { href: `${prefix}`, label: t['6'] },
      { href: `${prefix}projects`, label: t['4'] },
      { href: `${prefix}certifications`, label: t['5'] },
    ]
  }

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
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between">
            <Group ml="xl" gap={2} visibleFrom="sm">
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
        </Group>
      </AppShellHeader>

      <AppShellNavbar py="md" px={4}>
        {getLinks().map((item) => (
          <Link className={classes.control} key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
