import type { CollectionConfig, FieldHook, TextField } from 'payload'
import { CallToActionBlock } from '@/blocks/CallToAction.config'
import { ContentBlock } from '@/blocks/Content.config'
import { HeroBlock } from '@/blocks/Hero.config'
import { PromoBlock } from '@/blocks/Promo.config'
import { TestimonialsBlock } from '@/blocks/Testimonials.config'
import { FeaturesBlock } from '@/blocks/Features.config'

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

const formatSlug =
  (): FieldHook =>
  ({ data }) =>
    format(data?.['title'])

const idField: TextField = {
  name: 'id',
  unique: true,
  index: true,
  required: true,
  type: 'text',
  hooks: {
    beforeValidate: [formatSlug()],
  },
  admin: {
    readOnly: true,
  },
}

export const Page: CollectionConfig = {
  slug: 'page',
  fields: [
    idField,
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [HeroBlock, ContentBlock, PromoBlock, TestimonialsBlock, FeaturesBlock, CallToActionBlock],
    },
  ],
}
