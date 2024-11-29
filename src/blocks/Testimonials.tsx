import { TestimonialsBlock } from '@/payload-types'
import { BreakoutSection } from '@/layout/section'
import { MediaImg } from '@/components/MediaImage'

export function Testimonials(props: TestimonialsBlock) {
  return (
    <BreakoutSection className="grid grid-cols-1 gap-12 md:grid-cols-3">
      {props?.items?.map(({ name, quote, image, role }) => (
        <article key={name} className="flex flex-col items-center rounded bg-gray-700 px-8 py-10">
          <p className="mb-4 text-sm">{quote}</p>
          <footer className="grid w-full grid-cols-[auto_1fr] items-center gap-x-2">
            {image && <MediaImg className="row-span-2 rounded-full" image={image} alt={name} width={28} height={28} />}
            <h3 className="text-sm font-bold">{name}</h3>
            <p className="max-w-80 text-xs">{role}</p>
          </footer>
        </article>
      ))}
    </BreakoutSection>
  )
}
