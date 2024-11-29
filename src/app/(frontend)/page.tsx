import { getPayload } from 'payload'
import config from '@payload-config'
import { Hero } from '@/blocks/Hero'
import { Content } from '@/blocks/Content'
import { Features } from '@/blocks/Features'
import { Promo } from '@/blocks/Promo'
import { Testimonials } from '@/blocks/Testimonials'
import { CallToAction } from '@/blocks/CallToAction'
import { Header } from '@/layout/Header'
import { Footer } from '@/layout/Footer'

export default async function Page() {
  const payload = await getPayload({ config })
  const page = await payload.findByID({
    collection: 'page',
    draft: true,
    id: 'home',
  })

  if (!page) {
    return null
  }

  return (
    <>
      <Header />
      <main className="col-start-1 -col-end-1 my-20 grid grid-cols-subgrid space-y-40">
        {page.blocks?.map((block, i) => {
          switch (block?.blockType) {
            case 'Hero':
              return <Hero key={i + block.blockType} {...block} />
            case 'Content':
              return <Content key={i + block.blockType} {...block} />
            case 'Features':
              return <Features key={i + block.blockType} {...block} />
            case 'Promo':
              return <Promo key={i + block.blockType} {...block} />
            case 'Testimonials':
              return <Testimonials key={i + block.blockType} {...block} />
            case 'CallToAction':
              return <CallToAction key={i + block.blockType} {...block} />
            default:
              return null
          }
        })}
      </main>
      <Footer />
    </>
  )
}
