import { Media } from '@/payload-types'
import type { ImageProps } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export const MediaImg = ({ image, ...props }: { image: number | Media } & Omit<ImageProps, 'src'>) =>
  typeof image === 'number' || !image.url ? null : <Image {...props} src={image.url} alt={props.alt} />
