import Link from 'next/link'
import { MediaImg } from '@/components/MediaImage'
import { getPayload } from 'payload'
import config from '@payload-config'

export const Header = async () => {
  const payload = await getPayload({ config })
  const { logo, items } = await payload.findGlobal({
    slug: 'header',
    depth: 1,
  })

  return (
    <header className="col-[full-width] grid grid-cols-subgrid">
      <div className="col-[content] flex flex-wrap items-center justify-center gap-6 py-8">
        <Link href="/public" className="cursor-pointer">
          <MediaImg image={logo} alt="Fylo logo" width={100} height={30} />
        </Link>
        <nav className="space-x-4 md:ml-auto">
          {items
            .map((link) => link.page)
            .filter((page) => typeof page !== 'string')
            .map((page) => (
              <Link key={page.id} href={page.id} className="hover:underline">
                {page.title}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  )
}
