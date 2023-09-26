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
import { IconFileText } from '@tabler/icons-react'
import classes from './Shell.module.css'

export function Shell({ children, t, lang }) {
  const [opened, { toggle }] = useDisclosure()

  const links = [
    { href: `/${lang}/`, label: t['6'] },
    { href: `/${lang}/projects`, label: t['4'] },
    { href: `/${lang}/certifications`, label: t['5'] },
  ]

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
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <IconFileText size={30} />
            <Group ml="xl" gap={2} visibleFrom="sm">
              {links.map((item) => (
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
        {links.map((item) => (
          <Link className={classes.control} key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
