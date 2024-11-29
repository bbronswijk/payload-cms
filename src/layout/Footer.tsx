import Image from 'next/image'
import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter } from 'lucide-react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export const Footer = async () => {
  const payload = await getPayload({ config })
  const { about, phone, email, items } = await payload.findGlobal({
    slug: 'footer',
    depth: 1,
  })

  return (
    <footer className="col-[full-width] grid grid-cols-subgrid bg-gray-900 py-40 text-white">
      <section className="col-[breakout] grid pt-16">
        <Image className="mb-10" src="/logo.svg" alt="Fylo logo" width={150} height={44} />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-4 align-baseline text-sm">
            <MapPin className="h-6 min-w-6" />
            <p>{about}</p>
          </div>
          <div className="list-none space-y-4 text-sm">
            <div className="flex gap-4 align-baseline text-sm">
              <PhoneCall className="h-6 min-w-6" />
              <span>{phone}</span>
            </div>
            <div className="flex gap-4 align-baseline text-sm">
              <Mail className="h-6 min-w-6" /> <span>{email}</span>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-12 gap-y-4 whitespace-nowrap">
            {items
              .map((link) => link.page)
              .filter((page) => typeof page !== 'string')
              .map((page) => (
                <Link key={page.id} href={page.id} className="hover:underline">
                  {page.title}
                </Link>
              ))}
          </ul>

          <div className="flex gap-4 md:justify-end">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </section>
    </footer>
  )
}
