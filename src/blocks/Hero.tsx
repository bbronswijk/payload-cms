import { Button } from '@/components/ui/button'
import { HeroBlock } from '@/payload-types'
import { ContentSection } from '@/layout/section'
import { MediaImg } from '@/components/MediaImage'

export function Hero({ image, text, title }: HeroBlock) {
  return (
    <ContentSection className="text-center">
      <MediaImg className="mx-auto" image={image} alt="Illustration" width={650} height={650} />
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="mx-auto mb-5 mt-8 max-w-[60ch]">{text}</p>
      <Button>Get Started</Button>
    </ContentSection>
  )
}
