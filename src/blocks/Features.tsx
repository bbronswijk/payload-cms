import { FeaturesBlock } from '@/payload-types'
import { ContentSection } from '@/layout/section'
import { MediaImg } from '@/components/MediaImage'

export function Features(props: FeaturesBlock) {
  return (
    <ContentSection className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {props?.items?.map(({ title, image, content }) => (
        <div key={title} className="flex flex-col items-center text-center">
          <MediaImg image={image} alt={title} width={70} height={70} />
          <h3 className="mb-2 mt-5 text-xl font-bold">{title}</h3>
          <p className="max-w-80 text-sm">{content}</p>
        </div>
      ))}
    </ContentSection>
  )
}
