import Image from 'next/image'
import Link from 'next/link'
import { Card, Title, Text, Flex, Group, Button, Spoiler } from '@mantine/core'
import { IconCertificate } from '@tabler/icons-react'

import cs from './Certification.module.css'

export function CertificationCard({ certification, t }) {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="center"
      >
        <Image src={certification.image} width={384} height={216} />
        <Flex
          direction="column"
          ml={{ base: 0, md: 'lg' }}
          mt={{ base: 'lg', md: 0 }}
          className={cs.description}
        >
          {getLogo(certification.from)}
          <Title order={3} fw={500}>
            {t[certification.nameId]}
          </Title>
          <Spoiler
            maxHeight={80}
            showLabel={t['33']}
            hideLabel={t['34']}
            mt="sm"
            size="sm"
          >
            {t[certification.descriptionId]?.split('\n').map((i, idx) => (
              <Text key={idx} c="dimmed">
                {i}
              </Text>
            ))}
          </Spoiler>
          <Group className={cs.links}>
            <Button
              color="blue"
              leftSection={<IconCertificate size={16} />}
              component={Link}
              target="_blank"
              href={certification.link}
            >
              {t['25']}
            </Button>
          </Group>
        </Flex>
      </Flex>
    </Card>
  )
}

function getLogo(from) {
  switch (from) {
    case 'freecodecamp':
      return (
        <Link href="https://freecodecamp.org/" target="_blank">
          <Image
            className={cs.logo}
            src="/logo/freecodecamp.svg"
            width={192}
            height={40}
          />
        </Link>
      )
    default:
      return <></>
  }
}
