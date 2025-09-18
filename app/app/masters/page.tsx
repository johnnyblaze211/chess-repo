
import { Metadata } from 'next'
import MastersContent from './_components/masters-content'

export const metadata: Metadata = {
  title: 'Chess Masters & Legends | Famous Chess Players - ChessMaster Academy',
  description: 'Learn about legendary chess masters including Garry Kasparov, Magnus Carlsen, Bobby Fischer, and other chess legends and their playing styles.',
}

export default function MastersPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MastersContent />
      </div>
    </div>
  )
}
