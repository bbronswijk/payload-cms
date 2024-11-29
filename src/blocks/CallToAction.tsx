import { Button } from '@/components/ui/button'
import { ContentSection } from '@/layout/section'
import { CallToActionBlock } from '@/payload-types'

export function CallToAction({ title, text }: CallToActionBlock) {
  return (
    <ContentSection
      className="relative mx-auto -mb-[120px] rounded bg-gray-700 p-4 shadow-lg md:p-10 md:px-14"
      style={{ marginBottom: -120 }}
    >
      <h2 className="text-center text-3xl font-medium">{title}</h2>
      <p className="mb-8 mt-5 text-center md:mx-12">{text}</p>
      <form className="flex flex-col gap-x-8 gap-y-4 md:flex-row">
        <input className="flex-1 rounded-3xl px-4 py-2" placeholder="email@example.com" />
        <Button>Get Started For Free</Button>
      </form>
    </ContentSection>
  )
}
