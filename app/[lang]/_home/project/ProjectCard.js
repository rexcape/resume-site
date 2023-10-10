import {
  Badge,
  Box,
  Button,
  Card,
  CardSection,
  Group,
  Text,
  Title,
} from '@mantine/core'
import { IconBrandGithub, IconPlanet } from '@tabler/icons-react'
import Link from 'next/link'
import { Image } from '@/components/Image'
import cs from './Project.module.css'

export function ProjectCard({ project, t }) {
  const tags = project.tags.map((item) => (
    <Badge key={item} color="violet" variant="light">
      {item}
    </Badge>
  ))
  return (
    <Card
      className={cs.cardContainer}
      h={600}
      shadow="lg"
      padding="lg"
      radius="md"
      withBorder
    >
      <CardSection>
        <Image
          src={project.image}
          height={300}
          alt={`${project.name} demo image`}
        />
      </CardSection>
      <Box mt="sm">
        <Title order={3} fw={500}>{project.name}</Title>
      </Box>
      <Group mt="sm" mb="sm">
        {tags}
      </Group>
      <Box>
        <Text size="sm" c="dimmed">
          {t[project.descriptionId]}
        </Text>
      </Box>
      <Group mt="lg" justify="flex-end" className={cs.links}>
        {project.demo && (
          <Button
            leftSection={<IconPlanet size={12} />}
            color="indigo"
            component={Link}
            href={project.demo}
            target="_blank"
          >
            {t['22']}
          </Button>
        )}
        <Button
          leftSection={<IconBrandGithub size={12} />}
          color="dark"
          component={Link}
          href={project.github}
          target="_blank"
        >
          {t['23']}
        </Button>
      </Group>
    </Card>
  )
}
