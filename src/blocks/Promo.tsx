import { BreakoutSection } from '@/layout/section'
import { PromoBlock } from '@/payload-types'
import { PayloadLexicalReact } from '@zapal/payload-lexical-react'
import { MediaImg } from '@/components/MediaImage'

export function Promo({ image, title, content }: PromoBlock) {
  return (
    <BreakoutSection className="my-24 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
      <MediaImg className="mx-auto w-[500px] max-w-full" image={image} alt="Illustration" width={600} height={600} />
      <article className="max-w-[60ch] space-y-6">
        <h2 className="text-3xl font-medium">{title}</h2>
        <PayloadLexicalReact content={content} />
      </article>
    </BreakoutSection>
  )
}
