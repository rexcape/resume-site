import { Image as MantineImage } from '@mantine/core'
import NextImage from 'next/image'

export function Image(props) {
  return <MantineImage {...props} component={NextImage} />
}
