import { ContentSection } from '@/layout/section'
import { ContentBlock } from '@/payload-types'
import { PayloadLexicalReact } from '@zapal/payload-lexical-react'

export function Content({ content }: ContentBlock) {
  return (
    <ContentSection className="prose dark:prose-invert w-full">
      <PayloadLexicalReact content={content} />
    </ContentSection>
  )
}
