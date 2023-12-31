import { Box, Tooltip } from '@mantine/core'
import Image from 'next/image'
import {
  IconHexagonLetterS,
  IconHexagonLetterA,
  IconHexagonLetterB,
} from '@tabler/icons-react'
import cs from './SkillCard.module.css'
import Link from 'next/link'

export function SkillCard({ skill, t }) {
  return (
    <Box className={cs.skillCard} component={Link} href={skill.link}>
      <Tooltip label={skill.name} position="top" offset={12}>
        <Image
          className={cs.skillImg}
          src={
            skill.devicon
              ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.devicon}`
              : skill.static
              ? `${skill.static}`
              : '/error-404.png'
          }
          alt={skill.name}
          width={48}
          height={48}
        />
      </Tooltip>
      <Tooltip label={getLabel(skill.tier, t)} position="right">
        {getIcon(skill.tier)}
      </Tooltip>
    </Box>
  )
}

function getIcon(tier) {
  switch (tier) {
    case 's':
      return <IconHexagonLetterS className={cs.tierSvg} color="#f0cf61" />
    case 'a':
      return <IconHexagonLetterA className={cs.tierSvg} color="#c0c2ce" />
    case 'b':
      return <IconHexagonLetterB className={cs.tierSvg} color="#055a5b" />
  }
}

function getLabel(tier, t) {
  switch (tier) {
    case 's':
      return t['16']
    case 'a':
      return t['17']
    case 'b':
      return t['18']
  }
}
