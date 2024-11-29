import type { Block } from 'payload'

export const ContentBlock: Block = {
  slug: 'Content',
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
