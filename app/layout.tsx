import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmailRecruit — A/B Test Recruiting Email Templates',
  description: 'Test different recruiting email variations and track response rates to optimize outreach. Built for in-house recruiters and recruiting agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3b56891c-51aa-4b8f-8d1f-db3a7364168a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
