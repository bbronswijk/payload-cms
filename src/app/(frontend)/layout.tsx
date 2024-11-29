import { ReactNode } from 'react'
import './global.scss'
import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="grid min-h-dvh grid-cols-layout grid-rows-[auto,_1fr,_auto] bg-gray-800 text-white">
        {children}
        <RefreshRouteOnSave />
      </body>
    </html>
  )
}
