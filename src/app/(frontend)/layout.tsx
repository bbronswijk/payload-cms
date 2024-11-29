import { ReactNode } from 'react'
import './global.scss'
import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="grid min-h-dvh grid-cols-layout grid-rows-[auto,_1fr,_auto] text-white dark:bg-gray-800">
        {children}
        <RefreshRouteOnSave />
      </body>
    </html>
  )
}
