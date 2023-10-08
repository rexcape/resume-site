import cx from 'clsx'
import { SimpleGrid } from '@mantine/core'
import cs from './SkillGrid.module.css'

export function SkillGrid({ children, className }) {
  return (
    <SimpleGrid
      className={cx(cs.grid, className)}
      cols={{ base: 3, md: 4, lg: 5 }}
      spacing={{ base: 10, md: 'md', lg: 'lg' }}
      verticalSpacing={{ base: 16, md: 'lg', lg: 'xl' }}
    >
      {children}
    </SimpleGrid>
  )
}
