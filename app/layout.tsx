import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Docker Swarm Demo',
  description: 'Aplicação Next.js rodando no Docker Swarm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
