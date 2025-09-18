
import { Metadata } from 'next'
import OpeningsContent from './_components/openings-content'

export const metadata: Metadata = {
  title: 'Chess Openings Guide | Popular Opening Strategies - ChessMaster Academy',
  description: 'Learn popular chess openings including Sicilian Defense, Queen\'s Gambit, King\'s Indian, Ruy Lopez, and more. Perfect for beginner to intermediate players.',
}

export default function OpeningsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <OpeningsContent />
      </div>
    </div>
  )
}
