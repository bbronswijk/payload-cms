import type { Block } from 'payload'

export const CallToActionBlock: Block = {
  slug: 'CallToAction',
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'text',
      required: true,
    },
  ],
}
